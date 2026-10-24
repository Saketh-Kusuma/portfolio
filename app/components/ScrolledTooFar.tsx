"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";

export default function ScrolledTooFar() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-4xl px-8 py-4 md:px-20 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-primary dark:text-white font-serif sm:text-4xl md:text-5xl">
            Scrolled Too Far.
          </h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="mt-4 max-w-md text-sm text-secondary dark:text-neutral-400 sm:text-base"
          >
            If you&apos;ve made it this far, we should probably talk. I&apos;m
            always up for building something great together.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-200/60 px-6 py-2.5 text-sm font-medium text-primary transition-all hover:bg-neutral-300/80 dark:border-neutral-600 dark:bg-neutral-700/60 dark:text-white dark:hover:bg-neutral-600/80"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            className="mt-8 max-w-sm"
          >
            <p className="text-xs italic text-secondary/70 dark:text-neutral-500 sm:text-sm">
              &ldquo;The people who are crazy enough to think they can change
              the world are the ones who do.&rdquo;
            </p>
            <cite className="mt-2 block text-xs not-italic text-secondary/50 dark:text-neutral-600">
              — Steve Jobs —
            </cite>
          </motion.blockquote>

          {/* Sign-off */}
        </motion.div>
      </div>
    </section>
  );
}
