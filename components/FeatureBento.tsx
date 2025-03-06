import React from "react";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import {
  BellIcon,
  Share2Icon,
  DatabaseIcon,
  CodeIcon,
  SearchIcon,
  FileIcon,
  BrainIcon,
  ShieldIcon,
  UserCheckIcon,
  UsersIcon,
  KeyIcon,
  MicIcon,
  LucideIcon,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { AnimatedBeamDemo } from "@/components/AnimatedBeamDemo";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { DataOrganizationAnimation } from "@/components/DataOrganizationAnimation";
import { APIAnimation } from "@/components/APIAnimation";
import { UserNetworkAnimation } from "@/components/UserNetworkAnimation";
import Image from "next/image";
// Add this type definition at the top of the file, after the imports
type Feature = {
  name: string;
  description: string;
  className: string;
  videoSrc?: string;
  icon?: LucideIcon;
  href?: string;
  cta?: string;
  ctaType?: "learn" | "soon";
  customComponent?: React.ReactNode;
};

// Update the features array to use the self-contained component
const features: Feature[] = [
  {
    name: "Control and organise your data",
    description:
      "All of your metadata, stems, press releases, assets, event listings, bios, IDs, contact information, and just about everything the music industry needs to know about you – in one secure, manageable place.",
    href: "#",
    className: "col-span-1",
    icon: DatabaseIcon,
    customComponent: <DataOrganizationAnimation />,
  },
  {
    name: "Use our API",
    description:
      "Get all artist and release data easily plugged into your app, service, or website. Managed by musicians and their teams, from one centralised place –  updated everywhere instantly.",
    cta: "Coming May 2025",
    ctaType: "soon",
    className: "col-span-1",
    icon: CodeIcon,
    customComponent: <APIAnimation />,
  },
  {
    name: "Search and be discovered",
    description:
      "Customise your own public page with all of your artist data and get discovered by others. Search all other publicly available datapoints to discover music peers from around the globe.",
    className: "col-span-1",
    href: "#",
    customComponent: (
      <Image
        src="/public-profile-screenshot.png"
        alt="Public profile customisation screenshot"
        fill
        className="object-cover rounded-[20px] pointer-events-none"
        priority
      />
    ),
  },
  {
    name: "Share your assets",
    description:
      "Share artist assets and stems privately with those you invite. Control every part of your data and what's public or private.",
    className: "col-span-1",
    href: "#",
    customComponent: (
      <Image
        src="/share-assets-screenshot.png"
        alt="Shareable assets screenshot"
        fill
        className="object-cover rounded-[20px] pointer-events-none"
        priority
      />
    ),
  },
  {
    name: "Sign in with AuracleID",
    description:
      "A verified and secure login to partner services using our API; so they can be confident it's you.",
    className: "col-span-1",
    customComponent: (
      <Image
        src="/aura-login-screenshot.png"
        alt="AuracleID login screenshot"
        fill
        className="object-cover rounded-[20px] pointer-events-none"
        priority
      />
    ),
    cta: "Coming May 2025",
  },
  {
    name: "ML powered analysis",
    description:
      "Capture the vibe, character, tempo, and instruments of a song to increase discoverability and collaboration.",
    className: "col-span-1",
    href: "#",
    customComponent: (
      <Image
        src="/song-analysis-screenshot.png"
        alt="Song analysis screenshot"
        fill
        className="object-cover rounded-[20px] pointer-events-none"
        priority
      />
    ),
  },
  {
    name: "Opt out of AI training",
    description:
      "Set your preferences for AI training across different partners and government bodies. Add directly to Spawning's Do Not Train registry on upload of your works.",
    href: "#",
    className: "col-span-1",
    customComponent: (
      <Image
        src="/opt-out-screenshot.png"
        alt="Opt out of AI training screenshot"
        fill
        className="object-cover rounded-[20px] pointer-events-none"
        priority
      />
    ),
  },
  {
    name: "Verified credits",
    description:
      "We present metadata on works and let artists edit and verify it themselves, meaning everyone can receive full extensive credits for each part of their work.",
    className: "col-span-1",
    href: "#",
    customComponent: (
      <Image
        src="/verified-credits-screenshot.png"
        alt="Verified credits screenshot"
        fill
        className="object-cover rounded-[20px] pointer-events-none"
        priority
      />
    ),
  },
  {
    name: "A trust network",
    description:
      "Validate your peers to help grow a trusted network of music makers, ensuring accurate and verified data across the industry.",
    className: "col-span-1",
    href: "#",
    customComponent: <UserNetworkAnimation />,
  },
  /*
  {
    name: "Protect your AI voice",
    description:
      "Multiple tools to help you experiment, protect, and control your AI voice.",
    className: "col-span-1",
    href: "#",
    cta: "Coming soon",
    ctaType: "soon",
    icon: MicIcon,
  },*/
];

export function FeatureBento() {
  // Start with false for SSR
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Don't render anything until after hydration
  if (!hasMounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {features.map((feature, idx) => (
        <FeatureCard key={idx} feature={feature} isMobile={isMobile} />
      ))}
    </div>
  );
}

function FeatureCard({
  feature,
  isMobile,
}: {
  feature: Feature;
  isMobile: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show first frame but keep paused
    if (videoRef.current && feature.videoSrc) {
      videoRef.current.currentTime = 0;
      // Using the loadeddata event to ensure the frame is actually loaded
      videoRef.current.addEventListener("loadeddata", () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
        }
      });
    }
  }, [feature.videoSrc]);

  useEffect(() => {
    if (!isMobile || !feature.videoSrc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;

          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Handle any autoplay errors silently
            });
          } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        });
      },
      {
        threshold: 0.7,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile, feature.videoSrc]);

  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current && feature.videoSrc) {
      videoRef.current.play().catch(() => {
        // Handle any autoplay errors silently
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current && feature.videoSrc) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "card relative overflow-hidden p-6 rounded-[20px]",
        feature.className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-[20px] bg-secondary">
        {feature.customComponent ? (
          feature.customComponent
        ) : feature.videoSrc ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={feature.videoSrc} type="video/mp4" />
          </video>
        ) : feature.icon ? (
          <div className="flex h-full w-full items-center justify-center bg-secondary">
            {feature.icon &&
              React.createElement(feature.icon, {
                className: "h-12 w-12 text-gray-700 dark:text-gray-300",
              })}
          </div>
        ) : null}
      </div>
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {feature.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {feature.description}
        </p>
        {feature.cta && (
          <div className="mt-4">
            <span className="text-xs font-medium bg-accent/5 p-2 rounded-full">
              {feature.cta}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
