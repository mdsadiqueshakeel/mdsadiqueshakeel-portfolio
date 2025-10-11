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
      title: "GrowthAffinity - MLM System",
      description: "A comprehensive Multi-Level Marketing platform built with MERN stack, featuring user management, commission tracking, and real-time analytics.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Redis"],
      liveUrl: "https://growthaffinitymarketing.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      featured: true
    },
    {
      title: "IndianPly - E-commerce Platform",
      description: "Modern e-commerce solution for plywood products with inventory management, payment integration, and order tracking system.",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS", "AWS"],
      liveUrl: "https://indianply.in",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      featured: true
    },
    {
      title: "Wanderlust (Airbnb Replica)",
      description: "Full-featured property rental platform with user authentication, booking system, and interactive maps using Leaflet.",
      technologies: ["Node.js", "Express", "MongoDB", "EJS", "Leaflet", "Cloudinary"],
      githubUrl: "https://github.com/mdsadique/wanderlust",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      featured: false
    },
    {
      title: "WhatsApp Chatbot for Scholarship Status",
      description: "Automated chatbot for checking scholarship application status, built with n8n workflows and WhatsApp Business API.",
      technologies: ["n8n", "WhatsApp API", "Node.js", "MongoDB", "Automation"],
      githubUrl: "https://github.com/mdsadique/scholarship-bot",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
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
              <span className="gradient-text">Featured</span>{" "}
              <span className="text-foreground">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of production-ready applications and innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`${project.featured ? 'md:col-span-1' : 'md:col-span-1'} group`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
              >
                <motion.div
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
                      <p className="text-muted-foreground leading-relaxed">
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
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="sm"
                        >
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          onClick={() => window.open(project.githubUrl, '_blank')}
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