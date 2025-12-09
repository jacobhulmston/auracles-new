"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CircleFadingPlus, LogIn, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureBento } from "@/components/FeatureBento";
import { CoolMode } from "@/components/magicui/cool-mode";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SoundCloudPage() {
  const [isCreateLoading, setIsCreateLoading] = useState(false);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const keycloakLoginUrl =
    process.env.NEXT_PUBLIC_KEYCLOAK_LOGIN_URL ?? "https://id.auracles.io";
  const keycloakRegisterUrl =
    process.env.NEXT_PUBLIC_KEYCLOAK_REGISTER_URL ?? "https://id.auracles.io";

  const handleCreateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsCreateLoading(true);

    setTimeout(() => {
      setIsCreateLoading(false);
      window.location.href = keycloakRegisterUrl;
    }, 1000);
  };

  return (
    <div className="relative px-6 overflow-x-clip w-full flex flex-col items-center justify-center">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#ff5500]/80 via-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-lg space-y-24 py-16 sm:py-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center relative">
          <motion.div
            className="flex flex-col items-center justify-between h-full mx-auto relative max-w-2xl gap-8"
            initial="hidden"
            animate="visible"
            variants={heroContainerVariants}
          >
            {/* Logos */}
            <motion.div
              className="flex flex-row items-center justify-center gap-4 sm:gap-6"
              variants={heroItemVariants}
            >
              <Image
                src="/auracles-soundcloud-stacked.png"
                alt="Auracles and SoundCloud"
                width={320}
                height={160}
                className="w-auto h-auto sm:hidden"
              />
              <Image
                src="/auracles-soundcloud.png"
                alt="Auracles and SoundCloud"
                width={572}
                height={68}
                className="w-auto sm:w-[500px] h-auto hidden sm:block"
              />
            </motion.div>

            {/* Caption */}
            <motion.h1
              className="text-foreground w-full font-special-gothic text-4xl sm:text-5xl text-center text-balance leading-tight"
              variants={heroItemVariants}
            >
              Your home for music
            </motion.h1>

            {/* Detail paragraph */}
            <motion.p
              className="text-foreground/80 w-full text-md sm:text-lg text-center text-balance max-w-xl"
              variants={heroItemVariants}
            >
              Connect your SoundCloud account to your Auracle ID and one-click
              export your recordings, detailed metadata, and more coming soon.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center"
              variants={heroItemVariants}
            >
              <CoolMode>
                <a href="https://id.auracles.io" onClick={handleCreateClick}>
                  <Button
                    variant="gradient"
                    animated
                    size="xl"
                    className="gap-2"
                    disabled={isCreateLoading}
                  >
                    {isCreateLoading ? (
                      <Loader2
                        strokeWidth="2.25"
                        className="h-5 w-5 animate-spin"
                      />
                    ) : (
                      <CircleFadingPlus
                        strokeWidth="2.25"
                        className="h-5 w-5"
                      />
                    )}
                    Create an Auracle ID
                  </Button>
                </a>
              </CoolMode>

              <a href={keycloakLoginUrl} rel="noopener noreferrer">
                <Button
                  variant="accent"
                  animated
                  size="xl"
                  className="gap-2 bg-[#ff5500] text-white hover:bg-[#d56300] hover:text-white"
                >
                  <LogIn strokeWidth="2.25" className="h-5 w-5" />
                  Connect now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        {/* Features Section */}
        <section className="flex flex-col items-center text-center justify-center relative mx-auto space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            className="text-center"
          >
            <p className="text-foreground text-xl sm:text-2xl max-w-2xl mx-auto font-bold text-balance">
              Calling music makers to join us in creating the global home for
              music. A place for artists to set the standards for truth,
              permission and ethics
            </p>
          </motion.div>

          <FeatureBento />
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        {/* Learn More Section */}
        <section className="flex flex-col items-center text-center justify-center relative mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-foreground/70 text-md sm:text-lg max-w-lg text-balance">
              Discover how Auracles is building a future-proof data layer for
              the music industry.
            </p>

            <a
              href="https://auracles.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="ghost"
                animated
                size="xl"
                className="gap-2 text-foreground/80 hover:text-foreground"
              >
                Learn more about Auracles
                <ExternalLink
                  strokeWidth="2.25"
                  className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </Button>
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
