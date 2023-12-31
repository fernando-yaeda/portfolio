import Link from "next/link"
import { Project } from "@/types"

import { TechIconByStack } from "./icons"
import TechStackTooltip from "./stack-tooltip"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

type ProjectCardProps = Project

export async function ProjectCard({
  title,
  description,
  techStack,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/project/${slug}`}>
      <Card className="cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl">
        <CardHeader>
          <CardTitle className="font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex gap-4">
          {techStack.map((stack, index) => {
            const Icon = TechIconByStack({ stack })
            if (Icon) {
              return (
                <TechStackTooltip
                  key={index}
                  trigger={
                    <Icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  }
                  content={<p>{stack}</p>}
                />
              )
            }
          })}
        </CardFooter>
        <span className="sr-only">View Project Details</span>
      </Card>
    </Link>
  )
}
