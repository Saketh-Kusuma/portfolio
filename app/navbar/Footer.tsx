import React from "react";
import FooterParagraph from "../components/FooterParagraph";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github,
  LeetcodeIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";
import Container from "../components/Container";
const Footer = () => {
  return (
    <Container className="">
      <Container className="flex h-full justify-between flex-wrap w-full px-8 md:px-20 py-4 md:py-5 border-t border-neutral-300 dark:border-neutral-800">
        <FooterParagraph />
        <div className="flex items-center justify-center gap-4">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/saketh-kusuma/"
          >
            <HugeiconsIcon
              icon={Linkedin01Icon}
              className="h-4 w-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
            />{" "}
          </Link>
          <Link target="_blank" href="https://github.com/Saketh-Kusuma">
            <HugeiconsIcon
              icon={Github}
              className="h-4 w-4 text-neutral-500 dark:text-neutral-200  hover:text-neutral-700 dark:hover:text-neutral-300"
            />
          </Link>
          <Link target="_blank" href="https://leetcode.com/u/sakethsunny65/">
            <HugeiconsIcon
              icon={LeetcodeIcon}
              className="h-4 w-4 text-neutral-500 dark:text-neutral-200  hover:text-neutral-700 dark:hover:text-neutral-300"
            />
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
