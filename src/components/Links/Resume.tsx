import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const Resume = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              target="_blank"
              rel="noopener"
              href={`../../BrentonHershnerResume.pdf`}
              aria-label="Resume of Brenton Hershner"
              className="w-6 h-6"
            >
              <svg
                viewBox="0 0 24 24"
                fill="hsl(var(--color-foreground))"
                className="w-5 h-5"
              >
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Resume;
