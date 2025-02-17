"use client";

import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { QASection } from "@/components/QASection";
import { QrCode, BadgeCheck, Scan } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(isDark ? "dark" : "light");
    }
  }, [isDark, mounted]);

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
  });

  const leftPhoneX = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["-20px", "60px"],
    {
      clamp: true,
    },
  );

  const rightPhoneX = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["20px", "-100px"],
    {
      clamp: true,
    },
  );

  const rightPhoneY = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["-20px", "20px"],
    {
      clamp: true,
    },
  );

  const bumpScale = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.15],
    [1, 1.1, 1],
    {
      clamp: true,
    },
  );

  const leftRotation = useTransform(scrollYProgress, [0.05, 0.15], [-2, 10], {
    clamp: true,
  });

  const rightRotation = useTransform(scrollYProgress, [0.05, 0.15], [2, -10], {
    clamp: true,
  });

  const circleScale = useTransform(scrollYProgress, [0, 0.2], [1.5, 2.5], {
    clamp: true,
  });

  const circleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.1], {
    clamp: true,
  });

  const scanIconOpacity = useTransform(scrollYProgress, [0.15, 0.3], [1, 0], {
    clamp: true,
  });

  const checkIconOpacity = useTransform(scrollYProgress, [0.25, 0.3], [0, 1], {
    clamp: true,
  });

  const createBounceAnimation = (
    delay = 0,
    scaleValues = [1, 1.0, 1],
    blurAmount = 0,
  ) => ({
    scale: scaleValues,
    filter: [
      `blur(${blurAmount}px)`,
      `blur(${blurAmount * 3.5}px)`,
      `blur(${blurAmount}px)`,
    ],
    transition: {
      duration: 60 / 15,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  });

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

  return (
    <div className="relative px-0 max-w-[500px] mx-6">
      {/* Background circles - moved outside sections */}
      <motion.div
        id="circle"
        style={{
          scale: circleScale,
          position: "fixed",
          top: "100px",
          left: "50%",
          x: "-50%",
          transformOrigin: "center",
          opacity: circleOpacity,
        }}
        className="-z-10"
      >
        <div className="relative w-[450px] h-[450px] rounded-full scale-125 mx-auto">
          <motion.div
            className="absolute inset-1 rounded-full border-4 border-secondary-foreground dark:border-primary-accent"
            animate={createBounceAnimation(0, [1, 1.1, 1], 2)}
          />
          <motion.div
            className="absolute inset-8 rounded-full border-4 border-secondary-foreground dark:border-primary-accent opacity-80"
            animate={createBounceAnimation(0.01, [0.99, 1.095, 0.99], 3)}
          />
          <motion.div
            className="absolute inset-14 rounded-full border-4 border-secondary-foreground dark:border-primary-accent opacity-60"
            animate={createBounceAnimation(0.02, [0.97, 1.09, 0.97], 4)}
          />
          <motion.div
            className="absolute inset-20 rounded-full border-4 border-secondary-foreground dark:border-primary-accent opacity-40"
            animate={createBounceAnimation(0.03, [0.96, 1.085, 0.96], 5)}
          />
          <motion.div
            className="absolute inset-26 rounded-full border-4 border-secondary-foreground dark:border-primary-accent opacity-20"
            animate={createBounceAnimation(0.04, [0.94, 1.08, 0.94], 6)}
          />
        </div>
      </motion.div>

      {/* Hero Section - removed circles from here */}
      <section className="flex items-center justify-center relative">
        <div className="flex flex-col items-center justify-between h-full py-20 mx-auto relative">
          <div className="flex flex-col items-center gap-3 mt-36 relative">
            <div className="flex flex-col items-center gap-12">
              <div className="flex scale-[3.5] -space-x-3">
                <Switch
                  id="theme-toggle"
                  checked={!isDark}
                  onCheckedChange={(checked) => setIsDark(!checked)}
                  className="-rotate-[60deg] data-[state=checked]:bg-primary-accent data-[state=unchecked]:bg-[#d91cf7]"
                />
                <div className="bg-black dark:bg-white h-[20px] aspect-square rounded-full mt-[14px]"></div>
              </div>
              <Image
                src="/wordmark.svg"
                alt="Auracles"
                width={843}
                height={165}
                className="text-foreground my-4 scale-[0.87] invert dark:invert-0"
                priority
              />
            </div>
          </div>
          <div className="text-center">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
              <span className="text-secondary-foreground dark:text-primary-accent font-instrument-serif text-[80px] leading-none">
                “
              </span>
              <p className="text-foreground w-56 sm:w-full font-medium text-2xl text-center mb-4 mt-4">
                The music industry is a mess, right?
                <br />
                Well, we have a plan!
              </p>
              <span className="text-secondary-foreground dark:text-primary-accent font-instrument-serif text-[80px] leading-none pl-1">
                ”
              </span>
            </div>
            <div className="text-foreground font-bold">
              <p className="text-base">Imogen Heap</p>
              <p className="text-xs">Auracles Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center relative h-[50vh] mx-auto">
        <motion.div
          style={{
            x: leftPhoneX,
            scale: bumpScale,
            rotate: leftRotation,
          }}
          className="dark:shadow-[0px_0px_150px_15px_rgba(236,_72,_153,_0.2)] 
          border-[4px] border-solid border-black bg-primary h-[300px] w-[180px] 
          rounded-3xl relative flex items-center justify-center
          hover:text-foreground/80
          bg-gradient-to-br from-[#ff00b3]/70 to-[#ff51cb]/20 via-[#ff51cb]/50
          hover:bg-[#ff51cb] shadow-[inset_0px_0px_58px_8px_rgba(255,_255,_255,_0.9)]
          outline outline-3 outline-offset-0 outline-secondary/90 dark:outline-primary-foreground/90"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-b-[20px]" />
          <QrCode className="w-20 h-20 text-[#761e5c]" />
        </motion.div>
        <motion.div
          style={{
            x: rightPhoneX,
            y: rightPhoneY,
            scale: bumpScale,
            rotate: rightRotation,
          }}
          className="dark:shadow-[0px_0px_150px_15px_rgba(0,_205,_205,_0.3)]
          border-[4px] border-solid border-black
          backdrop-blur-md h-[300px] w-[180px] rounded-3xl relative flex items-center justify-center
          rgb-background90 bg-[#1ae0cd]/20
          hover:text-foreground/80 
          bg-gradient-to-bl from-[#1ae0cd]/50 to-[#86e7de]/20 via-[#86e7de]/30
          hover:bg-[#71cbc2]/50 shadow-[inset_0px_0px_58px_8px_rgba(255,_255,_255,_0.9)]
          outline outline-3 outline-offset-0 outline-secondary/90 dark:outline-primary-foreground/90"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-[15px] bg-black rounded-b-[20px]" />
          <motion.div className="absolute" style={{ opacity: scanIconOpacity }}>
            <Scan className="w-20 h-20 text-[#30716a] dark:text-[#86e7de]" />
          </motion.div>
          <motion.div
            className="absolute"
            style={{ opacity: checkIconOpacity }}
          >
            <BadgeCheck className="w-20 h-20 text-[#30716a] dark:text-[#bbede8]" />
          </motion.div>
        </motion.div>
      </section>
      <section className="flex flex-col items-center text-center justify-center relative mx-auto space-y-4 px-8 pt-12 sm:pt-6">
        <motion.p
          className="font-bold "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
        >
          For everyone in the business of making music. Auracles are the
          centralised store for &#8220;the everything of you&#8221;.
        </motion.p>
        {/*} <motion.p
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
        >
          Events will include an 18 hour live stream from 9am GMT, hosted by me,
          Imogen Heap; the founder of Auracles.
        </motion.p> */}
        <motion.p
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
        >
          To join the Auracles network, create your Auracle ID clicking the
          button below and follow{" "}
          <a
            className="underline decoration-dotted"
            href="https://www.instagram.com/auracles.io/"
          >
            @Auracles.io
          </a>{" "}
          on Instagram. Bring together as many music makers as you can and
          validate each other on the map to join the map.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
        >
          It&apos;s time we get this sorted, once and for all!
        </motion.p>
      </section>
      <div className="space-y-16 my-16">
        {/* <section>
          <div className="h-[150px] hover:h-[300px] transition-all bg-transparent duration-700 relative flex size-full max-w-lg items-center justify-center overflow-hidden px-40">
            <Globe className="-top-6 opacity-80 hover:opacity-100 transition-opacity duration-1000" />
          </div>
          <div className="text-center mx-auto card p-0 rounded-[20px] dark:shadow-[0px_0px_100px_15px_rgba(147,_51,_234,_0.1)]">
            <div className="w-full h-full p-8 rounded-[20px] shadow-[inset_0px_0px_56px_-7px_rgba(255,_255,_255,_0.05)]">
              <p className="text-2xl mb-8 font-medium text-foreground dark:text-primary">
                Watch the Auracles global launch event…
              </p>
              <div className="relative">
                <HeroVideoDialog
                  className="dark:hidden block"
                  animationStyle="top-in-bottom-out"
                  videoSrc="https://www.youtube.com/embed/Wl3Ha0CE3pQ"
                  thumbnailSrc="/mapimage.jpg"
                  thumbnailAlt="Auracles Public Launch Event"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="top-in-bottom-out"
                  videoSrc="https://www.youtube.com/embed/Wl3Ha0CE3pQ"
                  thumbnailSrc="/mapimage.jpg"
                  thumbnailAlt="Auracles Public Launch Event"
                />
              </div>
            </div>
          </div>
        </section>*/}
        <section className="flex flex-col items-center text-center justify-center relative mx-auto space-y-4 px-8 pt-12 sm:pt-6">
          <a
            href="https://id.auracles.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button animated size="xl">
              Create an Auracle ID
            </Button>
          </a>
          <a
            href="https://song.auracles.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button animated size="xl">
              Preview an Auracle of a song
            </Button>
          </a>
        </section>

        <section>
          <QASection />
        </section>
      </div>
    </div>
  );
}
