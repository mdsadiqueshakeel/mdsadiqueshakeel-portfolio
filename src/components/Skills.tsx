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
      skills: ["JavaScript", "Java", "HTML", "CSS", "EJS"],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Node.js", "Express", "React.js", "Next.js", "Bootstrap", "Axios", "Leaflet"],
      icon: "⚛️"
    },
    {
      title: "Databases & Caching",
      skills: ["MongoDB", "Redis", "SQL", "Google Sheets API"],
      icon: "🗄️"
    },
    {
      title: "Backend & Authentication",
      skills: ["REST APIs", "JWT", "Session Management", "RBAC"],
      icon: "🔐"
    },
    {
      title: "Deployment & Tools",
      skills: ["AWS", "Railway", "Render", "Hostinger", "GitHub Actions", "Docker"],
      icon: "☁️"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration"],
      icon: "🤝"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Technical</span>{" "}
              <span className="text-foreground">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (categoryIndex * 0.1) 
                }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.8 + (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      whileHover={{ scale: 1.1 }}
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