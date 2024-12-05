"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Globe from "@/components/magicui/globe";

export default function Home() {
  const [isDark] = useState<boolean>(true);
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

      <div className="space-y-16 my-16">
        <section>
          <div className="h-[150px] hover:h-[300px] transition-all bg-transparent duration-700 relative flex size-full max-w-lg items-center justify-center overflow-hidden px-40">
            <Globe className="-top-6 opacity-80 hover:opacity-100 transition-opacity duration-1000" />
          </div>
          <div className="text-center mx-auto card p-0 rounded-[20px] dark:shadow-[0px_0px_100px_15px_rgba(147,_51,_234,_0.1)]">
            <div className="w-full h-full p-8 rounded-[20px] shadow-[inset_0px_0px_56px_-7px_rgba(255,_255,_255,_0.05)]">
              <p className="text-2xl font-medium text-foreground dark:text-primary">
                You&apos;re in!
              </p>
              <motion.p
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
              >
                Follow{" "}
                <a
                  className="underline decoration-dotted"
                  href="https://www.instagram.com/auracles.io/"
                >
                  @Auracles.io
                </a>{" "}
                on Instagram for updates. Remember to bring together as many
                music makers as you can to verify each other on our live stream.
              </motion.p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
