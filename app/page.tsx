"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CircleFadingPlus,
  Mails,
  LogIn,
  Send,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureBento } from "@/components/FeatureBento";
import { CirclesBackground } from "@/components/CirclesBackground";
import { ProblemSection } from "@/components/ProblemSection";
import { Supporters } from "@/components/Supporters";
import { ContactForm } from "@/components/ContactForm";
import { CoolMode } from "@/components/magicui/cool-mode";
import Tilt from "react-parallax-tilt";

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

  const carouselVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.6,
      },
    },
  };

  // Carousel images - add src for real images, or leave as placeholder
  const carouselImages = [
    {
      id: 1,
      width: 759,
      height: 268,
      src: "/imogencard.png",
      alt: "Imogen Heap ID Card",
    },
    {
      id: 2,
      width: 745,
      height: 268,
      src: "/songprojectfolder.png",
      placeholder: "Project folder",
    },
    {
      id: 3,
      width: 268,
      height: 268,
      src: "/validatepeer.png",
      placeholder: "Someone validating a peer",
    },
    {
      id: 4,
      width: 549,
      height: 268,
      src: "/pressimagesfolder.png",
      placeholder: "Press images folder",
    },
    {
      id: 5,
      width: 387,
      height: 268,
      src: "/rolescard.png",
      placeholder: "Roles example",
    },
  ];

  // Simple carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(800);
  const maxHeight = 310;
  const itemGap = 24;

  // Track viewport width for responsive sizing
  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Calculate dimensions to fit within maxHeight while preserving aspect ratio
  // Also cap width to viewport on mobile
  const getItemDimensions = (img: (typeof carouselImages)[number]) => {
    const aspectRatio = img.width / img.height;
    const baseHeight = maxHeight;
    const baseWidth = maxHeight * aspectRatio;
    // Cap width at min of 800px or viewport - 48px (for padding)
    const maxWidth = Math.min(800, viewportWidth - 48);
    const cappedWidth = Math.min(baseWidth, maxWidth);
    const cappedHeight =
      cappedWidth < baseWidth ? cappedWidth / aspectRatio : baseHeight;
    return { width: cappedWidth, height: cappedHeight };
  };

  const currentIndex =
    ((currentSlide % carouselImages.length) + carouselImages.length) %
    carouselImages.length;

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => prev - 1);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  // Handle swipe/drag
  const swipeThreshold = 50; // Minimum drag distance to trigger slide change
  const swipeVelocityThreshold = 500; // Minimum velocity to trigger slide change

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const { offset, velocity } = info;

    // Determine if swipe was significant enough
    if (
      Math.abs(offset.x) > swipeThreshold ||
      Math.abs(velocity.x) > swipeVelocityThreshold
    ) {
      if (offset.x > 0 || velocity.x > swipeVelocityThreshold) {
        // Swiped right - go to previous
        goToPrev();
      } else {
        // Swiped left - go to next
        goToNext();
      }
    }
  };

  // Calculate x position for an item based on its offset from current
  // Takes into account actual widths of items in between
  const getXPosition = (targetOffset: number) => {
    if (targetOffset === 0) return 0;

    let x = 0;
    const direction = targetOffset > 0 ? 1 : -1;
    const steps = Math.abs(targetOffset);

    for (let i = 0; i < steps; i++) {
      // Get the index of items we're stepping through
      const fromIdx =
        (((currentIndex + direction * i) % carouselImages.length) +
          carouselImages.length) %
        carouselImages.length;
      const toIdx =
        (((currentIndex + direction * (i + 1)) % carouselImages.length) +
          carouselImages.length) %
        carouselImages.length;

      const fromWidth = getItemDimensions(carouselImages[fromIdx]).width;
      const toWidth = getItemDimensions(carouselImages[toIdx]).width;

      // Move by half of each item's width plus gap
      x += direction * (fromWidth / 2 + itemGap + toWidth / 2);
    }

    return x;
  };

  // Direct Keycloak URLs - bypass /welcome page
  const keycloakLoginUrl =
    process.env.NEXT_PUBLIC_KEYCLOAK_LOGIN_URL ?? "https://id.auracles.io";
  const keycloakRegisterUrl =
    process.env.NEXT_PUBLIC_KEYCLOAK_REGISTER_URL ?? "https://id.auracles.io";

  const handleCreateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsCreateLoading(true);

    setTimeout(() => {
      setIsCreateLoading(false);
      // Navigate directly to Keycloak registration
      window.location.href = keycloakRegisterUrl;
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
            className="px-8 sm:px-0 flex flex-col items-center justify-between h-full mt-10 mb-0 sm:mb-10 mx-auto relative max-w-lg gap-6"
            initial="hidden"
            animate="visible"
            variants={heroContainerVariants}
          >
            <motion.p
              className="text-foreground w-full font-special-gothic text-4xl sm:text-6xl text-center text-pretty"
              variants={heroItemVariants}
            >
              Building a future-proof data layer for the music industry
            </motion.p>
            <motion.p
              className="text-foreground w-full font-medium text-md sm:text-xl text-center text-balance"
              variants={heroItemVariants}
            >
              Empowering musicians and teams with their own verified digital ID,
              control over their metadata, and clear permissions that services
              can <span className="italic">actually see</span>.
            </motion.p>
            <motion.div
              className="flex flex-row gap-4"
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
                <Button variant="accent" animated size="xl" className="gap-2">
                  <LogIn strokeWidth="2.25" className="h-5 w-5" />
                  Sign in
                </Button>
              </a>
            </motion.div>
            <motion.div
              className="text-sm font-medium text-center flex sm:flex-row flex-col items-center justify-center gap-1.5"
              variants={heroItemVariants}
            >
              <span className="opacity-50">Dec 2025 article:</span>
              <div className="flex flex-row items-center justify-center gap-1.5">
                <a
                  className="font-bold text-foreground hover:underline hover:decoration-dotted opacity-50"
                  href="https://medium.com/@imogenheap/what-do-musicians-do-about-genai-3ff458f955f0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What Do Musicians Do About GenAI?
                </a>
                <ExternalLink
                  strokeWidth="2.5"
                  className="size-3 text-foreground group-hover:text-foreground opacity-50"
                />
              </div>
            </motion.div>
          </motion.div>
          {/* Full-width carousel - breaks out of container */}
          <motion.div
            className="relative"
            style={{ width: "100vw" }}
            initial="hidden"
            animate="visible"
            variants={carouselVariants}
          >
            {/* Carousel container */}
            <div className="relative overflow-hidden pb-8">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 sm:bg-gradient-to-r from-[##f4ebe4] to-transparent z-50 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 sm:bg-gradient-to-l from-[#f4ebe4] to-transparent z-50 pointer-events-none" />

              {/* Carousel track - draggable */}
              <motion.div
                className="relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
                style={{ height: `${maxHeight + 50}px` }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
              >
                <AnimatePresence mode="popLayout">
                  {carouselImages.map((img, idx) => {
                    // Calculate offset from current slide (with wrapping)
                    let offset = idx - currentIndex;
                    if (offset > carouselImages.length / 2)
                      offset -= carouselImages.length;
                    if (offset < -carouselImages.length / 2)
                      offset += carouselImages.length;

                    // Only render items within visible range to prevent fly-through
                    const maxVisibleOffset = 3;
                    if (Math.abs(offset) > maxVisibleOffset) return null;

                    const isCurrent = offset === 0;
                    const distance = Math.abs(offset);
                    const { width, height } = getItemDimensions(img);

                    // Position based on actual item widths
                    const xPosition = getXPosition(offset);

                    // Use virtual position as key so wrapped items don't animate across
                    const virtualPosition = currentSlide + offset;

                    return (
                      <motion.div
                        key={virtualPosition}
                        className="absolute cursor-pointer"
                        initial={{ x: xPosition, opacity: 0, scale: 0.85 }}
                        animate={{
                          x: xPosition,
                          opacity: isCurrent
                            ? 1
                            : Math.max(0.4, 1 - distance * 0.25),
                          scale: isCurrent ? 1 : 0.9,
                          zIndex: 10 - distance,
                        }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 28,
                        }}
                        onClick={() => {
                          if (!isCurrent) {
                            setCurrentSlide(currentSlide + offset);
                          }
                        }}
                      >
                        <Tilt
                          tiltMaxAngleX={4}
                          tiltMaxAngleY={4}
                          perspective={900}
                          transitionSpeed={800}
                          scale={1.01}
                          gyroscope
                          glareEnable={true}
                          glareBorderRadius="20px"
                          tiltReverse
                        >
                          <div
                            className={`relative rounded-2xl overflow-hidden transition-shadow duration-300 ${
                              isCurrent
                                ? "shadow-2xl ring-2 ring-primary/20"
                                : "shadow-lg"
                            }`}
                            style={{
                              width: `${width}px`,
                              height: `${height}px`,
                              background: img.src
                                ? undefined
                                : "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))",
                            }}
                          >
                            {img.src ? (
                              <Image
                                src={img.src}
                                alt={img.alt || "Carousel image"}
                                fill
                                className="object-cover pointer-events-none select-none"
                                sizes={`${Math.round(width)}px`}
                                priority={idx === 0}
                                draggable={false}
                              />
                            ) : (
                              <div className="absolute inset-0 flex flex-col items-center justify-center text-foreground/30 text-sm font-medium border border-primary/10 rounded-2xl">
                                <span>{img.placeholder}</span>
                                <span className="text-xs">
                                  {img.width}×{img.height}
                                </span>
                              </div>
                            )}
                          </div>
                        </Tilt>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Navigation arrows 
            <button
              onClick={goToPrev}
              className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-primary/10 shadow-lg hover:bg-background hover:scale-105 transition-all z-20"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-primary/10 shadow-lg hover:bg-background hover:scale-105 transition-all z-20"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            */}

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    // Find the closest scroll position that shows this image
                    const diff = idx - currentIndex;
                    setCurrentSlide((prev: number) => prev + diff);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-foreground/60 w-6"
                      : "bg-foreground/20 hover:bg-foreground/40 w-2"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </section>
        <Supporters />
        <ProblemSection />
        {/* <section className="sm:mt-16 mt-8 px-8 pt-10 sm:pt-16 flex flex-col items-center text-center justify-center relative mx-auto bg-gradient-to-b from-green-700/15 to-transparent rounded-t-[300px]">*/}
        <section className="flex flex-col items-center text-center justify-center relative mx-4 sm:mx-auto">
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
        <section className="mx-0 sm:mx-8 lg:mx-0">
          <FeatureBento />
        </section>
        <section className="flex flex-col items-center text-center justify-center relative mx-4 sm:mx-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <section className="p-10 sm:p-16 flex flex-col items-center text-center justify-center relative mx-auto bg-primary/30 lg:rounded-[20px] overflow-hidden">
            {/* Background Image */}
            <Image
              src="/circles-background.jpg"
              alt=""
              fill
              className="object-cover blur-sm"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              className="flex flex-col items-center justify-center gap-4 relative z-10"
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
            </motion.div>
          </section>
          <section className="p-10 sm:p-16 flex flex-col items-center text-center justify-center relative mx-auto bg-accent/5 lg:rounded-[20px]">
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
