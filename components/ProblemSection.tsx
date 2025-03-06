import { Settings2, SearchX, ShieldQuestion } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Settings2,
    title: "Unclear Permissions",
    description:
      "Artists need to be able to set granular permissions for how their work is used. But companies don't know where to look, and artists have no reliable place to set them.",
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

export function ProblemSection() {
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
    <section className="w-full max-w-7xl mx-auto p-10 sm:p-16 bg-red-300/20 rounded-[20px] space-y-12 shadow-sm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpVariants}
        className="text-center"
      >
        <h2 className="text-foreground text-sm font-bold mb-4 text-red-900 p-2 bg-red-300/30 rounded-lg w-fit mx-auto">
          THE PROBLEM
        </h2>
        <p className="text-foreground text-xl sm:text-2xl max-w-2xl mx-auto font-bold text-balance">
          Technology has transformed the way we consume art, but advances in AI
          have proven that data & rights management{" "}
          <span className="font-extrabold">urgently</span> needs fixing before
          the music industry falls behind.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((problem) => (
          <motion.div
            key={problem.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="w-16 h-16 rounded-full bg-red-300 flex items-center justify-center mb-2">
              <problem.icon className="w-8 h-8 text-red-700" strokeWidth={2} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold">
              {problem.title}
            </h3>
            <p className="text-foreground-muted text-sm text-balance font-semimedium">
              {problem.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
