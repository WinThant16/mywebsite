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
            Hi, I&apos;m Win.
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
          {/* <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            “မရှိတာထက် မသိတာ ခက် - Not knowing is worse than not having.”{" "}
            <br /> <br />I carry this Burmese saying with me wherever I go. It is
            a saying that has been passed down through generations in my family, a
            reminder of the importance of knowledge, curiosity, and the pursuit of
            understanding. It reflects my journey from Myanmar to the United
            States, a journey that has been shaped by my roots and the values
            instilled in me by my family and culture.
          </p> */}

          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            I grew up in Yangon, where the sound of street vendors, scent of
            mohinga, and vibrant neighborhood energy filled my everyday life. My
            childhood was shaped by both the simplicity and richness of Burmese
            culture which had a deep sense of community, curiosity, and
            creativity that sparked my early interest in technology.
          </p>

          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            Today, I’m pursuing a Master of Science degree in Computer Science
            at USC, after earning my Bachelor&apos;s at UC Riverside. It&apos;s
            been a journey of growth, academically and personally, here
            I&apos;ve had the chance to explore everything from full-stack
            development to embedded systems, machine learning, and database
            systems.
          </p>

          <p className="text-base leading-relaxed sm:text-lg md:text-xl">
            I’m passionate about building thoughtful, user-friendly technology
            that makes a real impact. When I&apos;m not coding, I love cooking
            Burmese food, collecting Pokémon cards, and geeking over NBA stats.
          </p>
        </div>
      </motion.section>
    </>
  );
}
