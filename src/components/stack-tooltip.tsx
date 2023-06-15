import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

type TechStackTooltipProps = {
  trigger: React.ReactNode
  content: React.ReactNode
}

export default function TechStackTooltip({
  trigger,
  content,
}: TechStackTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={1}>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent sideOffset={6}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
