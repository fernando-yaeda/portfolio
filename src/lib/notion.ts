import { Project } from "@/types"
import { Client } from "@notionhq/client"
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"

import { ProjectData } from "@/types/notion-data"

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const databaseId = process.env.NOTION_PROJECT_DATABASE_ID as string

export async function getProjects() {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "status",
          status: {
            equals: "Done",
          },
        },
      ],
    },
  })

  // @ts-ignore
  const projects = response.results.map((res) => res.properties) as ProjectData[]

  const formattedProjects: Project[] = projects.map((project) => ({
    title: project.title.title[0].plain_text,
    description: project.description.rich_text[0].plain_text,
    techStack: project.techStack.multi_select.map((stack) => stack.name),
  }))

  return formattedProjects
}
