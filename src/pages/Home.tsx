"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-slate-200 px-6 text-center text-slate-800">
      {isClient && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl"
        >
          <div className="relative mx-auto mb-6 aspect-square w-[60vw] max-w-[240px] overflow-hidden rounded-full sm:w-[40vw] md:w-[30vw]">
            <Image
              src="/avatar2.png"
              alt="My Picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <motion.h1
            className="typing-blink mb-3 w-fit overflow-hidden whitespace-nowrap border-r-2 border-slate-800 font-mono text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Hi, I'm Win.
          </motion.h1>

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg">
            I'm a passionate web developer focused on building clean,
            responsive, and modern experiences that bring ideas to life.
          </p>
        </motion.div>
      )}
    </section>
  );
}
