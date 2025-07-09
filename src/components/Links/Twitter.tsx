import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export default function Twitter() {
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
              href="https://twitter.com/BrentHershner"
              aria-label="Link to twitter of Brenton Hershner"
              className="w-6 h-6"
            >
              <svg
                viewBox="0 0 24 24"
                fill="hsl(var(--color-foreground))"
                className="w-5 h-5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Twitter</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
