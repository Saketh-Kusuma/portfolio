"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { buttonVariants } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${buttonVariants({ variant: "ghost", size: "icon" })} h-9 w-9 rounded-full cursor-pointer relative`}
        aria-label="Toggle theme"
      >
        <Sun
          className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <Moon
          className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={
          "z-100 w-auto min-w-[7rem] dark:bg-neutral-800 bg-neutral-200 dark:text-neutral-200 text-neutral-900 ring-1 px-1"
        }
        sideOffset={6}
        alignOffset={0}
        side="bottom"
      >
        <DropdownMenuItem
          className={"cursor-pointer hover:ring-1 flex gap-2 justify-center"}
          onClick={() => setTheme("light")}
        >
          <span className="hidden sm:flex">Light</span>
          <Sun className="h-5 w-5" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className={"cursor-pointer hover:ring-1 flex gap-2 justify-center"}
          onClick={() => setTheme("dark")}
        >
          <span className="hidden sm:flex">Dark</span>
          <Moon className="h-5 w-5" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className={"cursor-pointer hover:ring-1 flex gap-2 justify-center"}
          onClick={() => setTheme("system")}
        >
          <span className="hidden sm:flex">System</span>
          <Monitor className="h-5 w-5" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
