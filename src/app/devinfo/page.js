"use client";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Globe, Code } from "lucide-react";
import Image from "next/image";
import developer from "./infotab.json";
import Link from "next/link";

export default function DevProfile() {
  const [headerPosition, setHeaderPosition] = useState(-100);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  4;
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderPosition(0);
    }, 100);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className={`absolute inset-0 backdrop-blur-sm bg-black bg-opacity-40 transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>

        <div
          className={`w-full text-white px-4 fixed top-0 z-10 transition-all duration-500 ease-out ${
            scrolled ? "py-2 bg-black bg-opacity-90 backdrop-blur-sm" : "py-5"
          }`}
          style={{
            transform: `translateY(${headerPosition}px)`,
          }}
        >
          <div className="max-w-5xl mx-auto relative z-10">
            <div
              className={`flex transition-all duration-500 ${
                scrolled
                  ? "flex-row items-center justify-between"
                  : "flex-col items-center space-y-6"
              }`}
            >
              <div
                className={`flex transition-all duration-500 ${
                  scrolled ? "items-center gap-4" : "flex-col items-center"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-full border-2 border-white transition-all duration-500 ${
                    scrolled ? "w-10 h-10" : "w-40 h-40 md:w-48 md:h-48"
                  }`}
                >
                  <Image
                    src={"/imgs/ProfileImage.JPG"}
                    alt="Profile Image"
                    height={200}
                    width={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className={`${scrolled ? "ml-2" : "mt-4 text-center"}`}>
                  <h1
                    className={`font-bold transition-all duration-500 ${
                      scrolled ? "text-xl" : "text-4xl md:text-5xl"
                    }`}
                  >
                    {developer.name}
                  </h1>
                  <p
                    className={`transition-all duration-500 text-gray-300 ${
                      scrolled ? "hidden" : "text-lg"
                    }`}
                  >
                    {developer.title}
                  </p>
                </div>
              </div>

              <div
                className={`flex transition-all duration-500 ${
                  scrolled ? "items-center gap-4" : "gap-4 justify-center"
                }`}
              >
                <a
                  href={`mailto:${developer.contact.email}`}
                  className="hover:text-gray-300 transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={`https://${developer.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={`https://${developer.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`https://${developer.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-1">
          <div className="text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Welcome to my Portfolio
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Scroll down to explore my experience and projects
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-12 py-12 bg-black relative z-0">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
            About
          </h2>
          <div className="space-y-6">
            <p className="text-lg">{developer.bio}</p>

            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {developer.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-900 px-3 py-2 rounded"
                  >
                    <Code size={16} className="mr-2" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
            Experience
          </h2>
          <div className="space-y-8">
            {developer.experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-gray-800 pl-4 relative"
              >
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-1.5"></div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <div className="text-lg font-medium">{exp.company}</div>
                <div className="text-gray-400 mb-2">{exp.period}</div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
            Education
          </h2>
          <div className="space-y-6">
            {developer.education.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-gray-700 pl-4 relative"
              >
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-1.5"></div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="text-lg">{edu.institution}</div>
                <div className="text-gray-400">{edu.year}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 relative">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
            Projects
          </h2>

          <div className="space-y-10 mt-4">
            {developer.projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-900 p-4 rounded-lg shadow-md ${
                  index === 0 ? "" : "md:flex md:items-start"
                }`}
              >
                {index === 0 ? (
                  <>
                    <h3 className="text-xl text-center font-semibold mb-3">
                      {project.name}
                    </h3>
                    <div className="relative w-full my-5 bg-white p-3 h-auto overflow-hidden rounded-lg">
                      <Image
                        src={project.previewImg}
                        alt="Project preview"
                        width={project.width}
                        height={project.height}
                        className="rounded-lg object-cover w-full h-auto"
                      />
                    </div>
                    <p className="text-gray-400 mt-4 text-center">
                      {project.description}
                    </p>
                    <hr className="my-5 border-gray-700" />
                    <div className="flex flex-wrap items-center justify-center">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-800 text-gray-300 px-3 py-2 rounded-lg text-sm mr-2 mt-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <hr className="my-5 border-gray-700" />

                    <Link href="/" className="flex justify-center">
                      <button
                        className={`mt-8 px-8 py-3 border border-white text-white text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 ${
                          isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          animation: isLoaded
                            ? "fadeIn 1.5s ease forwards 0.8s"
                            : "",
                          opacity: isLoaded ? 1 : 0, 
                        }}
                      >
                        View Project
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 w-full">
                      <Image
                        src={project.previewImg}
                        alt="Project preview"
                        width={project.width}
                        height={project.height}
                        className="rounded-lg object-cover w-full h-auto"
                      />
                    </div>
                    <div className="md:ml-6 md:w-1/2 w-full  mt-4 md:mt-0">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <p className="text-gray-400 mt-2">
                        {project.description}
                      </p>
                      <hr className="my-5 border-gray-700" />
                      <div className="flex flex-wrap mt-3 items-center">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block bg-gray-800 text-gray-300 px-3 py-2 rounded-lg text-sm mr-2 mt-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <hr className="my-5 border-gray-700" />

                      <Link href="/" className="flex justify-center">
                        <button
                          className={`mt-8 px-8 py-3 border border-white text-white text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 ${
                            isLoaded ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            animation: isLoaded
                              ? "fadeIn 1.5s ease forwards 0.8s"
                              : "",
                            opacity: isLoaded ? 1 : 0, // Убедимся, что кнопка становится видимой
                          }}
                        >
                          View Project
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
            Contact
          </h2>
          <div className="space-y-4">
            <a
              href={`mailto:${developer.contact.email}`}
              className="flex items-center p-3 hover:bg-gray-800 rounded bg-gray-900 transition-colors"
            >
              <Mail size={20} className="mr-3" />
              <span>{developer.contact.email}</span>
            </a>

            <a
              href={`https://${developer.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 hover:bg-gray-800 rounded bg-gray-900 transition-colors"
            >
              <Github size={20} className="mr-3" />
              <span>{developer.contact.github}</span>
            </a>

            <a
              href={`https://${developer.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 hover:bg-gray-800 rounded bg-gray-900 transition-colors"
            >
              <Linkedin size={20} className="mr-3" />
              <span>{developer.contact.linkedin}</span>
            </a>

            <a
              href={`https://${developer.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 hover:bg-gray-800 rounded bg-gray-900 transition-colors"
            >
              <Globe size={20} className="mr-3" />
              <span>{developer.contact.website}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
