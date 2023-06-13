import Image from "next/image"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    slug: string[]
  }
}
async function getProjectFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/")

  // const {data} = useQuery({
  //   queryKey: ['projects'],
  //   queryFn: () => getProjects()
  // })

  // if(data) {

  //   const project = data.filter((project => project.title ===))
  // }

  const project = {
    blocks: [
      {
        title: "project title1",
        description: "project description",
        imageUrl: "https://picsum.photos/800/800",
      },
      {
        title: "project title2",
        description: "project description",
        imageUrl: "https://picsum.photos/700/700",
      },
      {
        title: "project title3",
        description: "project description",
        imageUrl: "https://picsum.photos/1000/1000",
      },
    ],
  }

  return project
}

export default async function PostPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {project.blocks.map((block) => (
        <article
          key={block.title}
          className="flex h-screen flex-col px-6 md:h-[calc(100vh-80px)] lg:flex-row lg:px-0"
        >
          <div className="flex h-1/3 flex-col items-center justify-center gap-4 px-16 lg:h-full lg:w-1/2 lg:flex-1">
            <h2 className="text-3xl font-bold lg:text-4xl">{block.title}</h2>

            <p className="max-w-[32rem] text-center text-muted-foreground lg:text-lg">
              {block.description}
            </p>
          </div>

          <div className="flex h-2/3 items-end justify-start lg:h-full lg:w-1/2 lg:flex-1 lg:pb-10">
            {block.imageUrl && (
              <div className="relative h-full w-full rounded-t-2xl drop-shadow-xl lg:rounded-l-2xl">
                <Image
                  src={block.imageUrl}
                  alt={block.title}
                  fill
                  className="rounded-t-2xl object-cover object-left-top lg:rounded-l-2xl"
                />
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
