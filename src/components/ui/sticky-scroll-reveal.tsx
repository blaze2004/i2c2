"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll=({
  content,
  className,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode|any;
  }[];
  contentClassName?: string;
  className?: string;
}) => {
  const [activeCard, setActiveCard]=React.useState(0);
  const ref=useRef<HTMLDivElement>(null);
  const { scrollYProgress }=useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength=content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints=content.map((_, index) => index/cardLength);
    const closestBreakpointIndex=cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance=Math.abs(latest-breakpoint);
        if (distance<Math.abs(latest-cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors=[
    "#0f172a",
    "#020817",
    "#1e1b4b",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard%backgroundColors.length],
      }}
      className={cn("min-h-screen flex justify-center relative space-x-10 rounded-md p-10", className)}
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title+index} className="min-h-screen my-20 flex flex-col justify-center">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard===index? 1:0.3,
                }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard===index? 1:0.3,
                }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              <motion.div
                className={cn(
                  "lg:hidden w-full h-full rounded-md overflow-hidden mt-16",
                  contentClassName
                )}
              >
                {item.content??null}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className={cn(
          "hidden lg:block h-60 w-80 lg:w-[600px] lg:h-full rounded-md sticky top-[40%] overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content??null}
      </motion.div>
    </motion.div>
  );
};
