import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
  Building,
  LayoutTemplate,
  Ticket,
  Store,
  Landmark,
  SquareLibrary,
} from "lucide-react";
import Image from "next/image";

type CircleProps = {
  className?: string;
  children?: React.ReactNode;
};

const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full bg-white text-foreground/50",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
Circle.displayName = "Circle";

export function APIAnimation({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centralRef = useRef<HTMLDivElement>(null);

  // Right side refs (existing)
  const websiteRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  // Left side refs (new)
  const userRef = useRef<HTMLDivElement>(null);
  const mailRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden p-4 bg-secondary dark:bg-black",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between">
        {/* Left side icons */}
        <div className="flex flex-col justify-center gap-4 text-foreground">
          <Circle ref={userRef}>
            <SquareLibrary className="size-6" />
          </Circle>
          <Circle ref={mailRef}>
            <Store className="size-6" />
          </Circle>
          <Circle ref={phoneRef}>
            <Landmark className="size-6" />
          </Circle>
        </div>

        {/* Center icon */}
        <div className="flex flex-col justify-center">
          <Circle ref={centralRef} className="size-16">
            <Image
              src="/auracles-app-icon-small.png"
              alt="Auracles App Icon"
              className="rounded-full"
              width={64}
              height={64}
              style={{ objectFit: "cover" }}
            />
          </Circle>
        </div>

        {/* Right side icons (existing) */}
        <div className="flex flex-col justify-center gap-4 text-foreground">
          <Circle ref={websiteRef}>
            <Building className="size-6" />
          </Circle>
          <Circle ref={appRef}>
            <Ticket className="size-6" />
          </Circle>
          <Circle ref={serviceRef}>
            <LayoutTemplate className="size-6" />
          </Circle>
        </div>
      </div>

      {/* Right side beams (existing) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={websiteRef}
        duration={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={appRef}
        duration={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={serviceRef}
        duration={6}
      />

      {/* Left side beams (new) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={userRef}
        duration={6}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={mailRef}
        duration={6}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={phoneRef}
        duration={6}
        reverse
      />
    </div>
  );
}
