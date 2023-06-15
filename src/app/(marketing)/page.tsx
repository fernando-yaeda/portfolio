import Link from "next/link"
import { Project } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/button"
import { Icons } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"

async function getProjects() {
  const res = await fetch(`https://notion-proxy.onrender.com/database/query`)

  if (!res.ok) {
    throw new Error("failed to fetch data")
  }

  return res.json()
}

export default async function HomePage() {
  const data = await getProjects()
  const projects: Project[] = data.projects.slice(0, 6)

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex h-full max-w-[64rem]  flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-4xl font-extrabold lg:text-5xl">
            Hi, I&apos;m Fernando Yaeda.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m a full stack developer skilled in Javascript/Typescript,
            ReactJs and NodeJs. I love music, programming and people. Constantly
            studying and improving my skills to deliver the best solutions.
          </p>
          <div className="space-x-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-muted-foreground"
              )}
            >
              <Icons.github />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-muted-foreground"
              )}
            >
              <Icons.linkedin />
            </Link>
            <Link
              href={siteConfig.links.mailTo}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-muted-foreground"
              )}
            >
              <Icons.mail />
            </Link>
          </div>
        </div>
      </section>
      <section
        id="project"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-4xl font-extrabold lg:text-5xl">Projects</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore a collection of my recent projects showcasing my expertise
            in NestJS, ReactJS, NextJS, PostgreSQL and more.
          </p>
        </div>
        <div className="md:max-width-[64rem] mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects &&
            projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                slug={project.slug}
              />
            ))}
        </div>
        <div className="container flex justify-center">
          <Link href="/project" className={cn(buttonVariants({ size: "lg" }))}>
            View all projects
          </Link>
        </div>
      </section>
    </>
  )
}
