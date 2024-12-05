import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

type ReleaseNote = {
  version: string;
  date: string;
  notes: string[];
};

const releaseNotes: ReleaseNote[] = [
  {
    version: "1.0",
    date: "01 Nov 2024",
    notes: ["Initial release"],
  },
];

export const Footer = () => {
  return (
    <footer className="flex justify-center w-full my-10 text-sm text-secondary-active text-center">
      <p>
        <Dialog>
          <DialogTrigger className="hover:underline decoration-dotted cursor-pointer">
            Auracles {releaseNotes[0].version}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Release Notes</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {releaseNotes.map((release) => (
                <div key={release.version} className="space-y-2">
                  <div className="flex flex-row gap-2">
                    <h3 className="text-sm font-semibold">
                      Version {release.version}
                    </h3>
                    <p className="text-sm font-normal">{release.date}</p>
                  </div>
                  <ul className="text-sm list-disc pl-4">
                    {release.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>{" "}
        © {new Date().getFullYear()}{" "}
        <Link
          className="hover:underline decoration-dotted cursor-pointer"
          href="http://hablab.london/"
        >
          Hablab London Ltd
        </Link>{" "}
        • <PrivacyPolicy />
      </p>
    </footer>
  );
};
