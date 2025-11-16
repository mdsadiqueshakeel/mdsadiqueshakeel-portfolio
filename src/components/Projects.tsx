"use client";

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "MadarsaArabia – Education Platform",
      description:
        "End-to-end education management platform built with Next.js and Node.js. Includes course management, secure authentication, admin dashboards, and optimized backend flows for scalability.",
      technologies: ["Next.js", "Node.js", "MongoDB", "JWT", "Tailwind", "Redis"],
      liveUrl: "https://madarsaarabia.in",
      image: "Madarsa.webp",
      featured: true,
    },
    {
      title: "Gramflix – OTT Streaming Platform",
      description:
        "A high-performance content streaming platform featuring secure video delivery, admin analytics, user subscriptions, and optimized database design for fast content access.",
      technologies: ["Next.js", "MongoDB", "Node.js", "Stripe", "Cloudinary"],
      liveUrl: "https://gramflix.in",
      image: "gramflix.webp",
      featured: true,
    },
    {
      title: "DIYMattress – 3D Custom Mattress Builder",
      description:
        "A fully interactive 3D mattress customization tool allowing users to design layers, visualize materials, and generate dynamic pricing. Built with React Three Fiber and API-driven configuration.",
      technologies: ["Next.js", "React Three Fiber", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "",
      image: "3D_Matress.webp",
      featured: false,
    },
    {
      title: "n8n WhatsApp Automation Bot",
      description:
        "Automated workflow that responds to WhatsApp queries, checks scholarship status, handles lead pipelines, and integrates MongoDB + APIs. Built using n8n and Node.js.",
      technologies: ["n8n", "Node.js", "MongoDB", "WhatsApp API", "Automation"],
      githubUrl: "https://github.com/mdsadique/scholarship-bot",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=2339&q=80",
      featured: false,
    },
    {
      title: "CV AI – Smart Resume Analyzer",
      description:
        "AI-powered resume analysis tool that extracts skills, evaluates job match score, and provides improvement suggestions using LLM-based embeddings & vector search.",
      technologies: ["Next.js", "Python", "LLM APIs", "Embeddings", "Vector DB"],
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=2340&q=80",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          
          {/* Section Header */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Featured</span>{" "}
              <span className="text-foreground">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world products, automation systems, and platforms delivered end-to-end.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                <motion.div
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="relative overflow-hidden h-48">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3 pt-2">
                      {project.liveUrl && (
                        <Button
                          onClick={() => window.open(project.liveUrl, "_blank")}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="sm"
                        >
                          Live Demo
                        </Button>
                      )}

                      {project.githubUrl && (
                        <Button
                          onClick={() => window.open(project.githubUrl, "_blank")}
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          size="sm"
                        >
                          GitHub
                        </Button>
                      )}
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
