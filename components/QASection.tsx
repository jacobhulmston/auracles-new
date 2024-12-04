import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type Question = {
  question: string;
  answer: string | JSX.Element;
};

const questions: Question[] = [
  {
    question: "What are Auracles?",
    answer: (
      <>
        An Auracle is “The Everything of Something”. Based on the physical
        concept of auras, an Auracle is a place for everything surrounding a
        person or a thing.
        <ul className="list-disc pl-6 mt-4">
          <li className="mb-4">
            <b>For music makers:</b> Your Auracle is the centralised store for
            “the everything of you” as an artist. For example, are you or your
            team fed up with updating your bio on multiple services? Maybe you
            don’t even have that level of control on some services? With
            Auracles you simply update your bio in one place, then participating
            services will know where to find and update their version. You can
            add all your known identifiers (ISNI, IPI, IPN etc), add all of your
            contacts (manager, agent etc), add your skills, your instruments,
            your interests, inspirations etc. The more the industry knows about
            you, the easier it is to direct business. And when business is easy,
            it’s more likely to flow your way!
          </li>
          <li>
            <b>For songs:</b> Once you have verified your artist Auracle, you’ll
            soon be able to create Auracles of your works. Imagine a centralised
            place to store, permission, and share everything about a song;
            including not only credits and metadata, but also where you can set
            your permissions for other services, such as stem usage, sample use,
            AI training etc. A place where every service can access your source
            of truth and honour your permissions. Furthermore, each song Auracle
            becomes a central place for other artists to submit their derivative
            works of the song, to make remix and sample clearance easier. A song
            Auracle truly is “the everything” of a song.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Who are Auracles for?",
    answer:
      "For now - Music makers only. However, looking at it in a wider sense managers and services benefit from the whole concept too.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, you as a music maker are in full control of your data and what you decide to make public and what stays private.",
  },
];

export function QASection() {
  return (
    <section>
      <div className="max-w-[500px] mx-auto">
        <Accordion type="single" collapsible>
          {questions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
