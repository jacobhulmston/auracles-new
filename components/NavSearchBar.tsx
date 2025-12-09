"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const placeholders = [
  "Imogen Heap",
  "Guitar London",
  "Hyperpop producers",
  "Korg NTS-1",
  "Music journalist in Germany",
  "Blockchain",
  "Aphex Twin",
  "MI.MU Gloves",
  "Mixer in Plymouth",
  "Sound designer in Los Angeles",
  "Graphic designer",
  "VJ in UK",
  "The Weeknd",
  "Jane Remover",
  "Tokyo",
  "Artists with ADHD",
  "Indie rock artist in Scotland",
  "Endlesss",
  "Electric organ London",
  "Kelela",
  "Mastering engineer",
  "FKA twigs",
  "Female managers",
  "Video director",
  "Bassist in Sydney",
  "DJ in Stockholm",
  "Art director",
  "Ariana Grande",
  "Breakcore artist",
  "Vocalist in Manchester",
  "Queer artist",
  "Choir",
];

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function NavSearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [shuffledPlaceholders, setShuffledPlaceholders] = useState<string[]>(
    [],
  );
  const inputRef = useRef<HTMLInputElement>(null);

  // Shuffle placeholders on mount
  useEffect(() => {
    setShuffledPlaceholders(shuffleArray(placeholders));
  }, []);

  // Rotate placeholders
  useEffect(() => {
    if (shuffledPlaceholders.length === 0) return;

    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % shuffledPlaceholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [shuffledPlaceholders]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [],
  );

  const handleSearch = useCallback(() => {
    if (inputValue.trim()) {
      const searchUrl = `https://id.auracles.io/search?q=${encodeURIComponent(
        inputValue.trim(),
      )}`;
      window.open(searchUrl, "_blank", "noopener,noreferrer");
    }
  }, [inputValue]);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch],
  );

  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="justify-center grow max-w-lg mx-4"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex-grow overflow-hidden text-foreground items-center rounded-full bg-card/50 hover:bg-card disabled:bg-bg-card/50 focus:bg-card active:bg-card w-full py-2 px-1 h-11 border shadow-xs hover:shadow-sm relative border-white/20 focus:border-white/50 hover:border-white/50 active:border-white/50 flex"
      >
        <div className="inline-flex items-center justify-center h-9 w-9 aspect-square">
          <Search className="w-4 h-4" />
        </div>
        <input
          ref={inputRef}
          type="text"
          className={cn(
            "text-sm font-normal justify-start border-none bg-transparent focus:outline-none w-full text-ellipsis",
          )}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={inputValue}
          style={{ textOverflow: "ellipsis" }}
        />
        <AnimatePresence mode="wait">
          {!inputValue && shuffledPlaceholders.length > 0 && (
            <motion.p
              key={currentPlaceholder}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-10 text-sm text-accent/50 pointer-events-none text-ellipsis overflow-hidden whitespace-nowrap"
              style={{ width: "calc(100% - 110px)" }}
            >
              {shuffledPlaceholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
