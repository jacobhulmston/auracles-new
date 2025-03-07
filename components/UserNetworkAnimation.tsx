import { IconCloud } from "@/components/magicui/icon-cloud";

const images = [
  "/persona1.webp",
  "/persona2.webp",
  "/persona3.webp",
  "/persona4.webp",
  "/persona5.webp",
  "/persona6.webp",
  "/persona7.webp",
  "/persona8.webp",
  "/persona9.webp",
  "/persona10.webp",
  "/persona11.webp",
  "/persona12.webp",
  "/persona13.webp",
  "/persona14.webp",
  "/persona15.webp",
  "/persona16.webp",
  "/persona17.webp",
  "/persona18.webp",
  "/persona19.webp",
  "/persona20.webp",
  "/persona21.webp",
  "/persona22.webp",
  "/persona23.webp",
  "/persona24.webp",
  "/persona25.webp",
  "/persona26.webp",
  "/persona27.webp",
  "/persona28.webp",
  "/persona29.webp",
  "/persona30.webp",
];

export function UserNetworkAnimation() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-xl pointer-events-none scale-150 sm:scale-100">
      <div className="bg-primary/10 rgb-background90 rounded-full w-64 h-64 sm:w-60 sm:h-60 absolute" />
      <IconCloud images={images} />
    </div>
  );
}
