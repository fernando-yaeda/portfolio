import Image from "next/image"
import { notFound } from "next/navigation"
import { Project, ProjectDetails } from "@/types"

import { cn } from "@/lib/utils"

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

  const project = projects.filter((project) => project.slug === slug)[0]

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
          className={cn(
            projectDetails.desktop
              ? "flex h-screen flex-col px-6 md:h-[calc(100vh-80px)] lg:flex-row lg:px-0"
              : `flex flex-col px-6 md:h-[calc(100vh-80px)] lg:flex-row lg:px-0`
          )}
          style={{
            backgroundColor: projectDetails.background,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-4 px-16 py-14 md:h-1/3 md:py-0 lg:h-full lg:w-1/2 ">
            <h2 className="text-center text-3xl font-bold lg:text-4xl">
              {projectDetails.title}
            </h2>

            <p className="max-w-[32rem] text-center font-semibold lg:text-lg">
              {projectDetails.paragraph}
            </p>
          </div>

          {projectDetails.imageUrl && projectDetails.desktop ? (
            <div className="flex h-full items-end justify-start pb-10 md:h-2/3 md:pb-0 lg:h-full lg:w-1/2 lg:pb-10">
              <div className="relative -right-6 h-full w-full overflow-hidden rounded-l-2xl rounded-r-none drop-shadow-xl md:-right-0 md:rounded-b-none md:rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none">
                <Image
                  src={projectDetails.imageUrl}
                  alt={projectDetails.title}
                  fill
                  className="object-cover object-left-top"
                />
              </div>
            </div>
          ) : (
            <div className="flex h-full items-end justify-center px-16 md:h-2/3 md:pt-10 lg:h-full lg:w-1/2 lg:justify-start">
              <div className="relative h-full overflow-hidden drop-shadow-xl md:h-full">
                <Image
                  src={projectDetails.imageUrl}
                  alt={projectDetails.title}
                  width={410}
                  height={864}
                  className="object-cover object-top lg:rounded-l-2xl"
                />
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
