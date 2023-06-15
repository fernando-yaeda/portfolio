import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/button"
import TechStackTooltip from "@/components/stack-tooltip"

export const metadata = {
  title: "Projects",
}

async function getProjects() {
  const res = await fetch(`https://notion-proxy.onrender.com/database/query`)

  if (!res.ok) {
    throw new Error("failed to fetch data")
  }

  return res.json()
}

export default async function ProjectPage() {
  const data = await getProjects()
  const projects: Project[] = data.projects

  return (
    <div>
      {projects.length ? (
        <div className="flex flex-col">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-screen flex-col px-6 md:h-[calc(100vh-80px)] lg:flex-row lg:px-0"
            >
              <div className="flex h-1/3 flex-col items-center justify-center gap-4 px-16 lg:h-full lg:w-1/2 lg:flex-1">
                <h2 className="text-3xl font-bold lg:text-4xl">
                  {project.title}
                </h2>

                <p className="max-w-[32rem] text-center text-muted-foreground lg:text-lg">
                  {project.description}
                </p>

                <div className="flex justify-center gap-10">
                  <Link
                    href={`/project/${project.slug}`}
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" })
                    )}
                  >
                    Features
                  </Link>

                  <Link
                    href={`/project/${project.slug}`}
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" })
                    )}
                  >
                    Tech Details
                  </Link>

                  <Link
                    href={`/project/${project.slug}`}
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" })
                    )}
                  >
                    Live Demo
                  </Link>
                </div>
              </div>

              <div className="flex h-2/3 items-end justify-start lg:h-full lg:w-1/2 lg:flex-1 lg:pb-10">
                {project.imageUrl && (
                  <div className="relative h-full w-full rounded-t-2xl drop-shadow-xl lg:rounded-l-2xl">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="rounded-t-2xl object-cover object-left-top lg:rounded-l-2xl"
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
