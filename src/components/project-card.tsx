import Link from "next/link"
import { Project } from "@/types"

import { TechIconByStack } from "./icons"
import TeckStackTooltip from "./stack-tooltip"
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
}: ProjectCardProps) {
  return (
    <Link href={"/"} target="_blank">
      <Card className="cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl">
        <CardHeader>
          <CardTitle className="font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>

        <CardFooter className="flex gap-4">
          {techStack.map((stack, index) => {
            const Icon = TechIconByStack({ stack })
            if (Icon) {
              return (
                <TeckStackTooltip
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
