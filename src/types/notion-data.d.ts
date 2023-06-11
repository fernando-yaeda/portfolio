export type ProjectData = {
  title: { id: string; title: { plain_text: string }[] }
  description: { id: string; rich_text: { plain_text: string }[] }
  techStack: { id: string; multi_select: { name: string }[] }
}
