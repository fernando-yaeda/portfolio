import Link from "next/link"

import { TechIcons } from "./icons"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

export function ProjectCard() {
  return (
    <Card className="relative hover:shadow-lg transition-all cursor-pointer">
      <CardHeader>
        <CardTitle className="font-bold">Track It</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          A habit tracker app, with responsive layout, that you can use to build
          new habits and follow your progress with beautiful charts.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        <TechIcons.nest className="text-muted-foreground " />
        <TechIcons.next className="text-muted-foreground" />
        <TechIcons.typescript className="text-muted-foreground" />
        <TechIcons.tailwind className="text-muted-foreground" />
      </CardFooter>
      <Link href={"/"} target="_blank" className="absolute inset-0">
        <span className="sr-only">View Project</span>
      </Link>
    </Card>
  )
}
