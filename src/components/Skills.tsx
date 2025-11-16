"use client";

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [ "Python", "Java","JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Node.js", "Express", "React.js", "Next.js", "Tailwind", "NumPy"],
    },
    {
      title: "Databases & Caching",
      skills: ["MongoDB", "MySQL","PostgreSQL", "Google Sheets API"],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS EC2",
        "AWS Amplify",
        "AWS S3",
        "AWS Lambda",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Railway",
        "Render"
      ],
    },
    {
      title: "Backend Engineering",
      skills: ["System Design", "REST APIs", "Microservices", "Authentication", "RBAC"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          
          {/* Title */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Technical</span>{" "}
              <span className="text-foreground">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I use to build efficient, scalable systems.
            </p>
          </motion.div>

          {/* Skill Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary ${
                        skill.includes("AWS") ||
                        skill === "Docker" ||
                        skill === "Kubernetes"
                          ? "bg-primary/10 text-primary"
                          : "bg-primary/10 text-primary"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.8 + skillIndex * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
