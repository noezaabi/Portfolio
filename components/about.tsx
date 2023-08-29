"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Having recently earned my bachelor's degree in{" "}
        <span className="font-medium">physics</span> from EPFL, I've chosen to
        specialize my master's studies in the captivating domain of Quantum
        Computing. Currently, I am diving deep into the fields of{" "}
        <span className="font-medium">machine learning and AI</span>, fueled by
        the innovative environment of{" "}
        <span className="italic">San Francisco</span>. In addition to my
        academic endeavors, I have hands-on experience in{" "}
        <span className="font-medium">web and mobile development</span>. When
        I'm not in the classroom, you'll likely find me working on intriguing
        development projects or competing in hackathons. is the problem-solving
        aspect. My ultimate career goal is to combine these diverse skill sets
        to forge a path in <span className="font-medium">entrepreneurship</span>
        .
      </p>

      <p>
        On a personal note, I'm highly committed to maintaining an{" "}
        <span className="font-medium">active lifestyle</span> and engage in
        sports nearly every day. As I step into this exciting new phase of my
        academic and professional development, I look forward to the array of
        opportunities to make{" "}
        <span className="font-medium">meaningful contributions</span> to the
        tech landscape.
      </p>
    </motion.section>
  );
}
