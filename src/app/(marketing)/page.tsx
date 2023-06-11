import Link from "next/link"

import { siteConfig } from "@/config/site"
import { getProjects } from "@/lib/notion"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/button"
import { Icons } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"

export default async function IndexPage() {
  const projects = await getProjects()

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container h-full max-w-[64rem] flex flex-col justify-center items-center text-center gap-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl">
            Hi, I&apos;m Fernando Yaeda.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m a full stack developer skilled in Javascript/Typescript,
            ReactJs and NodeJs. I Love building exceptional web applications and
            constantly expanding my skill set to deliver innovate solutions.
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
          <Button size="lg">Schedule a meeting</Button>
        </div>
      </section>
      <section
        id="project"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center">
          <h2 className="font-extrabold text-4xl lg:text-5xl">Projects</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore a collection of my recent projects showcasing my expertise
            in NestJS, ReactJS, NextJS, PostgreSQL and more.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-width-[64rem] md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
        </div>
      </section>
    </>
  )
}
