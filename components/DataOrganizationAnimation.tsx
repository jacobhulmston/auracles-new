import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Update the type to support both image and text items
interface BaseItem {
  type: "image" | "text";
  alt: string;
}

interface ImageItem extends BaseItem {
  type: "image";
  src: string;
}

interface TextItem extends BaseItem {
  type: "text";
  text: string;
  description: string;
  icon?: string;
}

type DataItem = ImageItem | TextItem;

export function DataOrganizationAnimation() {
  // Updated data items with richer text content
  const dataItems: DataItem[] = [
    {
      type: "text",
      text: "Press release",
      description:
        "Announcing Imogen Heap's new single 'What Have You Done To Me?' out now. The release is part one of three connecting songs.",
      alt: "Geospatial Analysis description",
    },
    { type: "image", src: "/grad3.jpg", alt: "Geographic data" },
    { type: "image", src: "/texture1.png", alt: "Frou Frou" },
    { type: "image", src: "/chordatabytes1.png", alt: "Data mapping" },
    {
      type: "text",
      text: "Event Listing",
      description:
        "26 Feb 2025 - Live audiovisual performance. The Round House, London, UK.",
      alt: "Data Insights description",
    },
    { type: "image", src: "/swipe1.jpg", alt: "Coordinate system" },
    { type: "image", src: "/grad2.jpg", alt: "Spatial analysis" },
    {
      type: "text",
      text: "Bio",
      description:
        "Imogen Heap, a British artist, has spent 30 years self-producing music, releasing four solo albums and one with Frou Frou.",
      alt: "Data Insights description",
    },
    { type: "image", src: "/swipe3.jpg", alt: "Coordinate system" },
    { type: "image", src: "/froufrou.jpg", alt: "Topographic data" },
    { type: "image", src: "/grad1.jpg", alt: "Terrain visualization" },
    { type: "image", src: "/swipe2.jpg", alt: "Cartographic data" },
  ];

  // Split items into two rows
  const firstRow = dataItems.slice(0, dataItems.length / 2);
  const secondRow = dataItems.slice(dataItems.length / 2);

  const Card = ({ item }: { item: DataItem }) => {
    const baseClassName = cn(
      "relative flex-shrink-0 overflow-hidden rounded-3xl bg-background",
      // light styles
      "hover:bg-gray-900/[.05]",
      // dark styles
      " dark:hover:bg-gray-50/[.15]",
    );

    if (item.type === "image") {
      return (
        <div className={cn(baseClassName, "h-28 w-28 sm:h-28 sm:w-28")}>
          <Image
            src={item.src}
            alt={item.alt}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
      );
    }

    return (
      <figure className={cn(baseClassName, "h-28 w-28 sm:h-28 sm:w-28 p-2")}>
        <div className="flex flex-row items-center gap-2">
          {item.icon && <div className="text-sm">{item.icon}</div>}
          <div className="flex flex-col text-xs">
            <figcaption className="text-[6px] sm:text-[8px] font-medium dark:text-white">
              {item.text}
            </figcaption>
          </div>
        </div>
        <blockquote className="mt-0 sm:mt-1 text-[5px] sm:text-[8px] text-gray-600 dark:text-gray-300">
          {item.description}
        </blockquote>
      </figure>
    );
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-secondary dark:bg-black aspect-square pointer-events-none">
      <Marquee reverse className="[--duration:30s]">
        {firstRow.map((item, idx) => (
          <Card key={`row1-${idx}`} item={item} />
        ))}
      </Marquee>

      <Marquee className="[--duration:30s]">
        {secondRow.map((item, idx) => (
          <Card key={`row2-${idx}`} item={item} />
        ))}
      </Marquee>

      {/* Gradient overlays for smooth transitions */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary dark:from-black"></div>
    </div>
  );
}
