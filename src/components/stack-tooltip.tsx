import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

type TeckStackTooltipProps = {
  trigger: React.ReactNode
  content: React.ReactNode
}

export default function TeckStackTooltip({
  trigger,
  content,
}: TeckStackTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={1}>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent sideOffset={6}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
