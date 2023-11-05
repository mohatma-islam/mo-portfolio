"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TapButton from "./TapButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
        <li>Laravel</li>
        <li>Vue</li>
        <li>React</li>
        <li>Nextjs</li>
        <li>Tailwind CSS</li>
        <li>SASS/CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5">
        <li>Masters in Data Science</li>
        <li>Bachelor of Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-5">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTapChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with Laravel, Vue, React, Redux, MySQL, PostgreSQL, MongoDB,
            Git and AWS services. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TapButton
              selectTap={() => handleTapChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TapButton>
            <TapButton
              selectTap={() => handleTapChange("education")}
              active={tab === "education"}
            >
              Education
            </TapButton>
            <TapButton
              selectTap={() => handleTapChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TapButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
