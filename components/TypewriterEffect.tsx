"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LoopingTypewriter({
  words,
  className,
  cursorClassName,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex].text;
    let typingSpeed = isDeleting ? 50 : 100; // speed for typing/deleting

    if (!isDeleting && displayedText === currentWord) {
      typingSpeed = 1500; // pause after typing full word
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <div className={cn("sm:text-4xl text-2xl font-bold ", className)}>
      <span
        className={cn(
          "dark:text-white text-black ",
          words[currentWordIndex].className
        )}
      >
        {displayedText}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-7  bg-blue-400 ml-[2px]",
          cursorClassName
        )}
      />
    </div>
  );
}
