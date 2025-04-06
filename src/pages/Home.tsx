"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-[100dvh] flex-col items-center justify-center bg-slate-200 px-6 text-center text-slate-800">
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
        </motion.div>
      </section>

      {/* About Section - Animates on scroll */}
      <motion.section
        className="px-6 py-12 text-center text-slate-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            “Even the smallest candle can shine bright in the darkest night.”{" "}
            <br /> <br />I carry this Burmese saying with me wherever I go — a
            reminder of the strength, warmth, and resilience of the people of
            Myanmar. My roots in this beautiful country are at the heart of who
            I am.
          </p>

          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            I grew up in Yangon, where the sound of street vendors, scent of
            mohinga, and vibrant neighborhood energy filled my everyday life. My
            childhood was shaped by both the simplicity and richness of Burmese
            culture — a deep sense of community, curiosity, and creativity that
            sparked my early interest in technology.
          </p>

          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            Today, I’m pursuing my undergraduate degree in Computer Science at
            UC Riverside. It’s been a journey of growth - academically and
            personally - where I’ve had the chance to explore everything from
            full-stack development to embedded systems, machine learning, and AI
            ethics.
          </p>

          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            I’m passionate about building thoughtful, user-friendly technology
            that makes a real impact. When I’m not coding, I love cooking
            Burmese food, collecting Pokémon cards, and geeking over NBA stats.
          </p>
        </div>
      </motion.section>
    </>
  );
}
