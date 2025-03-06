import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Building, LayoutTemplate, Ticket } from "lucide-react";

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
          "z-10 flex size-12 items-center justify-center rounded-full bg-green-300 text-green-700 shadow-sm",
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
  const topLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const middleLeftRef = useRef<HTMLDivElement>(null);
  const middleRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={topLeftRef}>
            <Building className="size-6" strokeWidth={2} />
          </Circle>
          <Circle ref={topRightRef}>
            <LayoutTemplate className="size-6" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={middleLeftRef}>
            <Ticket className="size-6" />
          </Circle>
          <Circle ref={centralRef} className="size-16">
            <img
              src="/auracles-app-icon-small.png"
              alt="Auracles App Icon"
              className="size-full rounded-full"
            />
          </Circle>
          <Circle ref={middleRightRef}>
            <Building className="size-6" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={bottomLeftRef}>
            <LayoutTemplate className="size-6" />
          </Circle>
          <Circle ref={bottomRightRef}>
            <Ticket className="size-6" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topLeftRef}
        toRef={centralRef}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={topLeftRef}
        curvature={-75}
        endYOffset={-10}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={middleLeftRef}
        toRef={centralRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={middleLeftRef}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bottomLeftRef}
        toRef={centralRef}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={bottomLeftRef}
        curvature={75}
        endYOffset={10}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topRightRef}
        toRef={centralRef}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={topRightRef}
        curvature={-75}
        endYOffset={-10}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={middleRightRef}
        toRef={centralRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={middleRightRef}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bottomRightRef}
        toRef={centralRef}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centralRef}
        toRef={bottomRightRef}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
