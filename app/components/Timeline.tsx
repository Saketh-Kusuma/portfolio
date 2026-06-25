"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

interface TimelineData {
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineData;
  index: number;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  const dotScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1.3, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <li ref={ref} className="mb-12 ms-6 relative">
      {/* Animated dot */}
      <motion.div
        style={{ scale: dotScale, opacity: dotOpacity }}
        className="absolute w-3 h-3 bg-secondary rounded-full -left-[2.3rem] top-1.5 border-2 border-background  ring-secondary"
      />

      {/* Content */}
      <motion.div style={{ opacity, x }}>
        <time className="text-xs font-medium text-secondary dark:text-neutral-200 tracking-wide uppercase mb-1 block">
          {item.date}
        </time>
        <h3 className="text-base font-semibold text-heading mb-1">
          {item.title}
        </h3>
        <p className="text-sm font-normal leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </li>
  );
};

const Timeline = ({ data }: { data: TimelineData[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      <ol className="relative border-s border-transparent ps-2">
        <motion.div
          style={{ scaleY: lineScaleY, originY: 0 }}
          className="absolute left-0 top-0 bottom-0 w-px bg-secondary"
        />

        {data.map((timeLineData, index) => (
          <TimelineItem key={index} item={timeLineData} index={index} />
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
