import { Marquee } from "@/components/magicui/marquee";

// Import SVGs directly
import Wave from "./icons/wave.svg";
import RostrGroup from "./icons/the-rostr-group.svg";
import LivingContent from "./icons/living-content.svg";
import Korus from "./icons/korus.svg";
import Jen from "./icons/jen.svg";
import Hangouts from "./icons/hangouts.svg";
import Fyi from "./icons/fyi.svg";
import Fac from "./icons/fac.svg";
import Endlesss from "./icons/endlesss.svg";
import Cyanite from "./icons/cyanite.svg";

interface Supporter {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  alt: string;
}

const supporters: Supporter[] = [
  { Icon: Wave, alt: "Wave" },
  { Icon: RostrGroup, alt: "The Rostr Group" },
  { Icon: LivingContent, alt: "L'ving 'ontent" },
  { Icon: Korus, alt: "Korus" },
  { Icon: Jen, alt: "Jen" },
  { Icon: Hangouts, alt: "Hangouts" },
  { Icon: Fyi, alt: "FYI" },
  { Icon: Fac, alt: "FAC" },
  { Icon: Endlesss, alt: "Endlesss" },
  { Icon: Cyanite, alt: "Cyanite" },
];

export function Supporters() {
  return (
    <div className="relative -mx-[50vw] left-[50%] right-[50%] w-screen bg-[#f5ece5] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
          Supported by
        </p>
        <div className="relative overflow-hidden">
          <Marquee className="py-4 [--duration:40s]" repeat={5}>
            {supporters.map((supporter, index) => (
              <div key={index} className="mx-6 shrink-0">
                <supporter.Icon
                  className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
                  aria-label={supporter.alt}
                  preserveAspectRatio="xMidYMid meet"
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#f5ece5] sm:via-[#f5ece5] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#f5ece5] sm:via-[#f5ece5] to-transparent z-10" />
        </div>
      </div>
    </div>
  );
}
