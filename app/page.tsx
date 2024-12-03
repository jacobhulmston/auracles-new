"use client";

import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { QASection } from "@/components/QASection";
import { QrCode, BadgeCheck, Scan } from "lucide-react";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDark(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();

  const leftPhoneX = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["-20px", "60px"],
  );

  const rightPhoneX = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["20px", "-100px"],
  );

  const rightPhoneY = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    ["-20px", "20px"],
  );

  const bumpScale = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.2],
    [1, 1.1, 1],
  );

  const leftRotation = useTransform(scrollYProgress, [0.05, 0.15], [-2, 10]);

  const rightRotation = useTransform(scrollYProgress, [0.05, 0.15], [2, -10]);

  const circleScale = useTransform(scrollYProgress, [0, 0.2], [1.5, 2.5]);

  const circleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const scanIconOpacity = useTransform(scrollYProgress, [0.3, 0.35], [1, 0]);

  const checkIconOpacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

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
    <div className="relative overflow-hidden px-0">
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
            className="absolute inset-1 rounded-full border-4 border-primary-accent"
            animate={createBounceAnimation(0, [1, 1.1, 1], 2)}
          />
          <motion.div
            className="absolute inset-8 rounded-full border-4 border-primary-accent opacity-80"
            animate={createBounceAnimation(0.01, [0.99, 1.095, 0.99], 3)}
          />
          <motion.div
            className="absolute inset-14 rounded-full border-4 border-primary-accent opacity-60"
            animate={createBounceAnimation(0.02, [0.97, 1.09, 0.97], 4)}
          />
          <motion.div
            className="absolute inset-20 rounded-full border-4 border-primary-accent opacity-40"
            animate={createBounceAnimation(0.03, [0.96, 1.085, 0.96], 5)}
          />
          <motion.div
            className="absolute inset-26 rounded-full border-4 border-primary-accent opacity-20"
            animate={createBounceAnimation(0.04, [0.94, 1.08, 0.94], 6)}
          />
        </div>
      </motion.div>

      {/* Hero Section - removed circles from here */}
      <section className="flex items-center justify-center relative">
        <div className="flex flex-col items-center justify-between h-full py-20 max-w-[500px] mx-auto relative">
          <div className="flex flex-col items-center gap-3 mt-36 relative">
            <div className="flex flex-col items-center gap-12">
              <div className="flex scale-[4] -space-x-3">
                <Switch
                  id="theme-toggle"
                  checked={isDark}
                  onCheckedChange={setIsDark}
                  className="-rotate-[60deg] data-[state=checked]:bg-foreground data-[state=unchecked]:bg-foreground"
                />
                <div className="bg-primary-accent h-[20px] aspect-square rounded-full mt-[14px]"></div>
              </div>
              <label
                htmlFor="theme-toggle"
                className="text-[80px] text-foreground font-medium font-instrument-serif"
              >
                Auracles
              </label>
            </div>
          </div>
          <div className="text-center">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
              <span className="text-primary-accent font-instrument-serif text-[80px] leading-none">
                “
              </span>
              <p className="text-foreground font-medium text-2xl text-center mb-4 mt-4">
                The music industry is a mess, right?
                <br />
                Well, we have a plan!
              </p>
              <span className="text-primary-accent font-instrument-serif text-[80px] leading-none pl-1">
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

      <section className="flex items-center justify-center relative h-[50vh] max-w-[500px] mx-auto">
        <motion.div
          style={{
            x: leftPhoneX,
            scale: bumpScale,
            rotate: leftRotation,
          }}
          className="shadow-sm border-[4px] border-solid border-black bg-primary h-[300px] w-[180px] rounded-3xl relative flex items-center justify-center"
        >
          <QrCode className="w-20 h-20 text-primary-accent " />
        </motion.div>
        <motion.div
          style={{
            x: rightPhoneX,
            y: rightPhoneY,
            scale: bumpScale,
            rotate: rightRotation,
          }}
          className="shadow-sm border-[4px] border-solid border-black bg-primary/20 rgb-background90 backdrop-blur-lg h-[300px] w-[180px] rounded-3xl relative flex items-center justify-center"
        >
          <motion.div className="absolute" style={{ opacity: scanIconOpacity }}>
            <Scan className="w-20 h-20 text-secondary-foreground dark:text-primary" />
          </motion.div>
          <motion.div
            className="absolute"
            style={{ opacity: checkIconOpacity }}
          >
            <BadgeCheck className="w-20 h-20 text-primary-accent" />
          </motion.div>
        </motion.div>
      </section>
      <section className="flex flex-col items-center text-center justify-center relative max-w-[500px] mx-auto space-y-4 px-4">
        <motion.p
          className="font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
        >
          On 9th December, music makers will connect and verify each other to
          create the missing foundation layer for music.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
        >
          More details will be coming next week, but events will include an 18
          hour live stream from 9am GMT, hosted by me, Imogen Heap, the founder
          of Auracles.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
        >
          To be part of this live stream, sign up with your email below and
          follow @Auracles.io on Instagram. If you can gather your music maker
          friends on the day, I can bring you up on the screen!
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
        <section>
          <div className="max-w-[500px] text-center mx-auto card">
            <p className="text-3xl font-instrument-serif mb-8 font-medium">
              Join the gatherings planned so far!
            </p>
            <ContactForm />
          </div>
        </section>

        <section>
          <QASection />
        </section>
      </div>
    </div>
  );
}
