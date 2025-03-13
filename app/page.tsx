"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircleFadingPlus, Mails, LogIn, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureBento } from "@/components/FeatureBento";
import { CirclesBackground } from "@/components/CirclesBackground";
import { ProblemSection } from "@/components/ProblemSection";
import { Supporters } from "@/components/Supporters";
import { AuracleBorder } from "@/components/AuracleBorder";
import { ContactForm } from "@/components/ContactForm";
import { Safari } from "@/components/magicui/safari";
import { CoolMode } from "@/components/magicui/cool-mode";

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
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

  // Hero section animation variants with staggered children
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing for a more natural feel
      },
    },
  };

  const safariVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.6, // Delay the Safari animation to appear after text elements
      },
    },
  };

  const handleCreateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsCreateLoading(true);

    setTimeout(() => {
      setIsCreateLoading(false);
      // Navigate to the URL directly using the anchor's href
      window.location.href = "https://id.auracles.io/welcome?register";
    }, 1000);
  };

  return (
    <div className="relative px-6 overflow-x-clip w-full flex flex-col items-center justify-center">
      {/* ContactForm Dialog */}
      <ContactForm
        isOpen={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
      />
      {/* Hero Section - removed circles from here */}
      <section className="flex flex-col items-center justify-center relative sm:top-[550px] top-[300px]">
        <CirclesBackground />
      </section>
      <div className="max-w-screen-lg space-y-16">
        <section className="flex flex-col items-center justify-center relative">
          <motion.div
            className="flex flex-col items-center justify-between h-full py-20 mx-auto relative max-w-lg gap-6"
            initial="hidden"
            animate="visible"
            variants={heroContainerVariants}
          >
            <motion.p
              className="text-foreground w-full font-bold sm:font-semibold text-4xl sm:text-6xl text-center text-balance"
              variants={heroItemVariants}
            >
              The missing digital foundation layer for music
            </motion.p>
            <motion.p
              className="text-foreground w-full font-medium text-md sm:text-xl text-center text-balance"
              variants={heroItemVariants}
            >
              A verified digital ID with an information and permissions source
              for musicmakers, services, and representatives.
            </motion.p>
            <motion.div
              className="flex flex-row gap-4"
              variants={heroItemVariants}
            >
              <CoolMode>
                <a
                  href="https://id.auracles.io/welcome?register"
                  onClick={handleCreateClick}
                >
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

              <a
                href="https://id.auracles.io/welcome?login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" animated size="xl" className="gap-2">
                  <LogIn strokeWidth="2.25" className="h-5 w-5" />
                  Sign in
                </Button>
              </a>
            </motion.div>
            <motion.p
              className="text-sm opacity-50 font-medium text-center"
              variants={heroItemVariants}
            >
              Founded by Imogen Heap
            </motion.p>
          </motion.div>
          <motion.div
            className="w-full relative"
            initial="hidden"
            animate="visible"
            variants={safariVariants}
          >
            <Safari
              url="auracles.io"
              className="size-full"
              imageSrc="/app-screenshot-7.png"
            />
          </motion.div>
        </section>
        <Supporters />
        <ProblemSection />
        {/* <section className="sm:mt-16 mt-8 px-8 pt-10 sm:pt-16 flex flex-col items-center text-center justify-center relative mx-auto bg-gradient-to-b from-green-700/15 to-transparent rounded-t-[300px]">*/}
        <section className="flex flex-col items-center text-center justify-center relative mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            className="text-center"
          >
            <h2 className="text-foreground text-sm font-bold mb-4 text-green-900 p-2 bg-green-300/30 rounded-lg w-fit mx-auto">
              THE SOLUTION
            </h2>
            <p className="text-foreground text-xl sm:text-2xl max-w-2xl mx-auto font-bold text-balance">
              A comprehensive and forward-thinking suite of tools. Built by
              artists, for artists.
            </p>
          </motion.div>
        </section>
        <section className="">
          <FeatureBento />
        </section>
        <section className="flex flex-col items-center text-center justify-center relative mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            className="text-center"
          >
            <h2 className="text-sm font-bold mb-4 text-foreground p-2 bg-[#f0ebe5] rounded-lg w-fit mx-auto">
              ACT BEFORE AI ACTS UP
            </h2>
            <p className="text-foreground text-xl sm:text-2xl max-w-2xl mx-auto font-bold text-balance">
              The greatest collaboration of all time - featuring ALL of us.
            </p>
          </motion.div>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <section className="p-10 sm:p-16 flex flex-col items-center text-center justify-center relative mx-auto bg-primary/30 rounded-[20px] overflow-hidden">
            {/* Custom Dots Background */}
            <div className="absolute inset-0 pointer-events-none">
              <AuracleBorder />
            </div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h2 className="text-lg font-bold text-center text-balance mb-0 leading-none">
                Create your Auracles.
              </h2>
              <p className="text-sm text-gray-600 text-balance">
                An Auracle defines the{" "}
                <span className="font-bold">
                  &quot;Everything of Something&quot;.
                </span>{" "}
                Artists can create Auracles for each of their artistic personas,
                and create ones for each of their works. All ready to populate
                with detailed metadata points and permissions.
              </p>
              <CoolMode>
                <a
                  href="https://id.auracles.io/welcome?register"
                  onClick={handleCreateClick}
                >
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
            </motion.div>
          </section>
          <section className="p-10 sm:p-16 flex flex-col items-center text-center justify-center relative mx-auto bg-accent/5 rounded-[20px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h2 className="text-lg font-bold text-balance mb-0 leading-none">
                Work with us…
              </h2>
              <p className="text-sm text-gray-600 text-pretty">
                We&apos;ve built the solution, now we need the industry to
                integrate. Get early access to our API, and join our talks with
                partners and goverment bodies to help build the future for the
                creative industry.
              </p>
              <div className="flex flex-row gap-4">
                <a
                  href="mailto:hello@auracles.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="accent" animated size="xl" className="gap-2">
                    <Send strokeWidth="2.25" className="h-5 w-5" />
                    Contact Us
                  </Button>
                </a>

                <Button
                  variant="accent"
                  animated
                  size="xl"
                  className="gap-2"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  <Mails strokeWidth="2.25" className="h-5 w-5" />
                  Newsletter
                </Button>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
