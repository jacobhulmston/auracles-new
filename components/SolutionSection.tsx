import {
  Brain,
  Zap,
  Shield,
  Settings2,
  SearchX,
  ShieldQuestion,
} from "lucide-react";
import { motion } from "framer-motion";
import { APIAnimation } from "@/components/APIAnimationBig";

const solutions = [
  {
    icon: Settings2,
    title: "Unclear Permissions",
    description:
      "Artists need to be able to set granular permissions for how their work is used. But companies don't know where to look, and artists have no place to set them.",
  },
  {
    icon: SearchX,
    title: "Incorrect & Incomplete Data",
    description:
      "There's no central place for artists to manage their data, and no way to verify the accuracy of it. Every service needs updating individually, and information outdates quickly.",
  },
  {
    icon: ShieldQuestion,
    title: "Impersonation & Income Loss",
    description:
      "There's no way to verify the identity of an artist, and no way to verify the authenticity of a work. Artists often don't receive income from what is theirs to claim.",
  },
];

export function SolutionSection() {
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
    <section className="w-full max-w-7xl mx-auto p-10 sm:p-16 bg-green-300/20 rounded-[20px] mt-8 space-y-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpVariants}
        className="text-center"
      >
        <h2 className="text-foreground text-sm font-bold mb-4 text-green-900 p-2 bg-green-300/30 rounded-lg w-fit mx-auto">
          THE SOLUTION
        </h2>
        <p className="text-foreground text-2xl sm:text-3xl font-semibold ">
          A comprehensive and forward-thinking suite of tools.
        </p>
      </motion.div>
      <APIAnimation />
      {/*}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="w-16 h-16 rounded-full bg-green-300 flex items-center justify-center mb-2">
              <solution.icon
                className="w-8 h-8 text-green-700"
                strokeWidth={2}
              />
            </div>
            <h3 className="text-lg font-semibold">{solution.title}</h3>
            <p className="text-foreground-muted text-sm text-balance">
              {solution.description}
            </p>
          </motion.div>
        ))}
      </div>
      */}
    </section>
  );
}
