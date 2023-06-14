import Image from "next/image"
import { notFound } from "next/navigation"
import { Project, ProjectDetails } from "@/types"

interface ProjectPageProps {
  params: {
    slug: string[]
  }
}

async function getProjects() {
  const res = await fetch(`https://notion-proxy.onrender.com/database/query`)

  if (!res.ok) {
    throw new Error("failed to fetch data")
  }

  return res.json()
}

async function getProjectDetails(params: { slug: string[] }) {
  const slug = params?.slug?.join("/")
  const projectsData = await getProjects()
  const projects: Project[] = projectsData.projects

  const project = projects.filter((project) => project.title === slug)[0]

  if (!project?.detailsId) {
    return null
  }

  const promisesList = project.detailsId.map((id) =>
    fetch(`https://notion-proxy.onrender.com/project/${id}`).then((res) => {
      if (res.ok) {
        return res.json()
      }
    })
  )

  const details: ProjectDetails[] = await Promise.allSettled(promisesList).then(
    (res) => {
      return res
        .filter((resolved) => resolved.status === "fulfilled")
        .map(
          (results) =>
            //TODO: search the reason why ts is not geting PromiseSettledResult value
            //@ts-ignore
            results.value.projectDetails
        )
    }
  )

  return details
}

export default async function PostPage({ params }: ProjectPageProps) {
  const projectDetails = await getProjectDetails(params)

  if (!projectDetails) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {projectDetails.map((projectDetails) => (
        <section
          key={projectDetails.title}
          className="flex h-screen flex-col px-6 md:h-[calc(100vh-80px)] lg:flex-row lg:px-0"
        >
          <div className="flex h-1/3 flex-col items-center justify-center gap-4 px-16 lg:h-full lg:w-1/2 lg:flex-1">
            <h2 className="text-3xl font-bold lg:text-4xl">
              {projectDetails.title}
            </h2>

            <p className="max-w-[32rem] text-center text-muted-foreground lg:text-lg">
              {projectDetails.paragraph}
            </p>
          </div>

          <div className="flex h-2/3 items-end justify-start lg:h-full lg:w-1/2 lg:flex-1 lg:pb-10">
            {projectDetails.imageUrl && (
              <div className="relative h-full w-full rounded-t-2xl drop-shadow-xl lg:rounded-l-2xl">
                <Image
                  src={projectDetails.imageUrl}
                  alt={projectDetails.title}
                  fill
                  className="rounded-t-2xl object-cover object-left-top lg:rounded-l-2xl"
                />
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
