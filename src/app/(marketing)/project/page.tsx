import Image from "next/image"
import Link from "next/link"
import { Link2 } from "lucide-react"

import { getProjects } from "@/lib/notion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/button"

export const metadata = {
  title: "Projects",
}

export default async function ProjectPage() {
  const projects = await getProjects()

  return (
    <div>
      {projects.length ? (
        <div className="flex flex-col">
          {projects.map((project) => (
            <article
              key={project.title}
              className="h-screen md:h-[calc(100vh-80px)] flex flex-col lg:flex-row px-6 lg:px-0"
            >
              <div className="h-1/3 lg:h-full lg:w-1/2 flex lg:flex-1 flex-col justify-center items-center gap-4 px-16">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  {project.title}
                </h2>

                <p className="max-w-[32rem] lg:text-lg text-muted-foreground text-center">
                  {project.description}
                </p>

                <Button>View Project</Button>
              </div>

              <div className="h-2/3 lg:h-full lg:w-1/2 flex lg:flex-1 justify-start items-end lg:pb-10">
                {project.imageUrl && (
                  <div className="relative w-full h-full rounded-t-2xl lg:rounded-l-2xl drop-shadow-xl">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover object-left-top rounded-t-2xl lg:rounded-l-2xl"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No projects to display.</p>
      )}
    </div>
  )
}
