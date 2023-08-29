import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import kanflowImg from "@/public/kanflow.png";
import doctorImg from "@/public/doctor.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mobile App Developer",
    location: "Remote",
    description:
      "I worked for a year as a freelance Flutter mobile app developper on Upwork while finishing high-school.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Physics Bachelor @ EPFL",
    location: "Lausanne, Switzerland",
    description:
      "I studied physics in one of the best STEM school in Europe. Thanks to it's polytechnic nature, I also had multiple classes in pure math, computer science and applied sciences.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Project Manager @ Junior Entreprise EPFL",
    location: "Lausanne, Switzerland",
    description:
      "I worked as a project manager for the best Junior Entreprise in Switzerland. I managed multiple projects for big swiss clients allowing students who worked with us to gain experience in the industry.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Head of Operations @ Wingman Campus Fund",
    location: "Lausanne, Switzerland",
    description:
      "I worked on the operations for the biggest student lead venture capital fund in Switzerland.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Master in Quantum Science and Engineering @ EPFL",
    location: "Lausanne, Switzerland",
    description:
      "I am specializing my master on the study of quantum sciences with a particular focus on quantum computing. This master will allow me to continue to develop my physics knowledge while learning more on theoretical computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "KanFlow",
    description:
      "Full stack web app built on the TRPC stack. It's a kanban board with features like drag and drop, real time updates and authentication.",
    tags: ["Next.js", "Typescript", "TRPC", "Prisma", "Tailwind", "Supabase"],
    imageUrl: kanflowImg,
    url: "https://github.com/noezaabi/KanFlow",
  },
  {
    title: "Doctor Training App",
    description:
      "One of my flutter project where I had to develop an app for a company that gave courses to doctor in the Middle East.",
    tags: ["Flutter", "Dart", "Library", "Quizz", "Streaming"],
    imageUrl: doctorImg,
    url: "",
  },
] as const;
