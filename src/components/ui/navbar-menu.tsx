"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
   <motion.p
  className="cursor-pointer font-semibold text-[#d4ede4] p-2 relative hover:shadow-[0_0_0_2px_rgba(76,103,99,0.7)] hover:rounded-full hover:bg-transparent transition-all duration-300 delay-100"
>
  {item}
</motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                 
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full p-4 w-max"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-[#233831b3] shadow-input flex justify-center gap-6 space-x-4  py-3  "
    >
      {children}
    </nav>
  );
};



;