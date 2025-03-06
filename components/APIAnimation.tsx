import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Building, LayoutTemplate, Ticket } from "lucide-react";
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
  const websiteRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden p-4 bg-secondary dark:bg-black",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between">
        <div className="flex flex-col justify-center">
          <Circle ref={centralRef} className="size-16">
            <Image
              src="/auracles-app-icon-small.png"
              alt="Auracles App Icon"
              className="rounded-full"
              layout="intrinsic"
              width={64}
              height={64}
              objectFit="cover"
            />
          </Circle>
        </div>
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

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={websiteRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={appRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={serviceRef}
        duration={3}
      />
    </div>
  );
}
