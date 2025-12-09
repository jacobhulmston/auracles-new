"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserRound, Mails } from "lucide-react";
import { AuraclesIcon } from "@/components/icons/auracles-icon";
import { Discord } from "@/components/icons/discord";
import { ContactForm } from "@/components/ContactForm";
import { NavSearchBar } from "@/components/NavSearchBar";

// Direct Keycloak login URL - bypasses /welcome page
const keycloakLoginUrl =
  process.env.NEXT_PUBLIC_KEYCLOAK_LOGIN_URL ?? "https://id.auracles.io";

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
            variant="ghost"
            className="gap-2.5 text-foreground opacity-70 px-2 pointer-events-none"
          >
            <AuraclesIcon className="w-6 h-6" />
            <span className="font-medium hidden sm:flex">Auracles</span>
          </Button>
        </div>

        <div className="flex justify-center w-1/3 relative z-50">
          <NavSearchBar />
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
            <a href={keycloakLoginUrl} rel="noopener noreferrer">
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
