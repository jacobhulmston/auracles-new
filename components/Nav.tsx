"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserRound, Newspaper, ArrowRightIcon, Mails } from "lucide-react";
import { AuraclesIcon } from "@/components/icons/auracles-icon";
import { Discord } from "@/components/icons/discord";
import { ContactForm } from "@/components/ContactForm";

export function Nav() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <nav className="mx-auto flex justify-center w-full select-none p-4 sm:p-8">
      <ContactForm
        isOpen={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
      />
      <div className="flex flex-row justify-between items-center text-sm w-full">
        <div className="w-1/3">
          <Button
            animated
            variant="ghost"
            className="gap-2.5 text-foreground opacity-70 px-2"
          >
            <AuraclesIcon className="w-6 h-6" />
            <span className="font-medium hidden sm:flex">Auracles</span>
          </Button>
        </div>

        <div className="flex justify-center w-1/3">
          <a
            href="https://medium.com/@imogenheap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="md"
              animated
              variant="activeToggle"
              className="py-5 rounded-full opacity-80"
            >
              <span className="flex-row items-center gap-1 hidden sm:flex">
                <div className="bg-accent rounded-full py-1 px-2 font-semibold">
                  <Newspaper className="inline-block mr-1.5 size-4" />
                  Blog post
                </div>
                <span className="font-semibold">
                  Act now, before AI Acts up!
                </span>
              </span>
              <div className="flex sm:hidden flex-row items-center">
                <div className="bg-accent rounded-full py-1 px-2 font-semibold mr-1">
                  <Newspaper className="inline-block mr-1.5 size-4" />
                  Blog post
                </div>
                <span className="font-semibold">Act on AI now</span>
              </div>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </Button>
          </a>
        </div>

        <div className="w-1/3 flex justify-end gap-x-4">
          <div className="relative flex flex-row gap-2 opacity-70">
            <Button
              animated
              variant="ghost"
              size="icon"
              className="relative hidden sm:flex"
              onClick={() => setIsContactFormOpen(true)}
            >
              <Mails strokeWidth="2.5" className="h-5 w-5" />
            </Button>

            <a
              href="https://discord.gg/vWYQTSKngE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                animated
                variant="ghost"
                size="icon"
                className="relative hidden sm:flex"
              >
                <Discord strokeWidth={2.5} className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://id.auracles.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button animated variant="ghost" size="icon" className="relative">
                <UserRound strokeWidth="2.5" className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
