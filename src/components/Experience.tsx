"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Full-Stack Developer & Automation Engineer",
      company: "Freelance | Remote",
      period: "2024 – Present",
      description:
        "Delivering end-to-end production applications for businesses using MERN stack, Next.js, Redis, and AWS. Designed scalable APIs, optimized backend workflows, and deployed applications using Docker, Railway, Render, and AWS services.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Redis",
        "AWS",
        "Docker",
        "n8n",
        "System Design",
      ],
    },
    {
      title: "DevOps Intern",
      company: "Youth Dreamers Foundation",
      period: "2025",
      description:
        "Built and deployed Moodle-based learning platforms, optimized server performance, and contributed to cloud deployments. Improved automation pipelines and streamlined infrastructure processes.",
      technologies: ["Moodle", "DevOps", "Server Management", "CI/CD"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Professional</span>{" "}
              <span className="text-foreground">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineering roles where I built systems, solved problems, and delivered results.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative flex items-start space-x-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                >
                  <div className="hidden md:flex relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  </div>

                  <motion.div
                    className="flex-1 bg-card border border-border rounded-lg p-6 md:p-8"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>

                      <span className="mt-2 md:mt-0 inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
