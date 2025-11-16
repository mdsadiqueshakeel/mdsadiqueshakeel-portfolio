"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Production-grade web applications using Next.js, MERN stack, TypeScript, secure auth systems, dashboards, and scalable backend APIs.",
      features: [
        "Next.js / MERN Stack",
        "Secure Authentication (JWT / Session)",
        "Admin Dashboards",
        "Microservice-ready Architecture",
        "Optimized Database Design (MongoDB, Redis)",
      ],
      popular: true,
    },
    {
      title: "Automation & Workflow Engineering",
      description:
        "Custom business automations, WhatsApp bots, lead pipelines, API integrations, and internal tools using n8n + Node.js.",
      features: [
        "WhatsApp Automation",
        "API Integrations",
        "Lead Management Workflows",
        "Database-driven Automation",
        "Internal Tools & Scripts",
      ],
      popular: false,
    },
    {
      title: "Cloud Deployment & DevOps",
      description:
        "Cloud-native deployments on AWS and modern DevOps workflows using Docker, Kubernetes, CI/CD pipelines, and server optimization.",
      features: [
        "AWS EC2 / Amplify / S3 / Lambda",
        "Docker Containerization",
        "Kubernetes (K8s)",
        "CI/CD Pipelines",
        "Performance & Scaling Optimization",
      ],
      popular: false,
    },
    {
      title: "Custom API & Backend Systems",
      description:
        "High-performance backend systems with clean architecture, caching, rate-limiting, and microservice-based design.",
      features: [
        "REST API Development",
        "Caching with Redis",
        "Queues & Background Jobs",
        "High-Traffic Optimizations",
        "System Design Consultation",
      ],
      popular: false,
    },
    {
      title: "AI Integrations & LLM Tools",
      description:
        "AI-powered systems including resume analyzers, chatbots, embeddings, RAG pipelines, and automation with LLM APIs.",
      features: [
        "LLM Integrations",
        "Embeddings & Vector Search",
        "Custom Chatbots",
        "AI-Augmented Workflows",
        "Document Intelligence",
      ],
      popular: false,
    },
    {
      title: "Mobile-First Web Apps (PWA)",
      description:
        "Lightweight, app-like mobile web experiences built using React and Next.js with offline support, caching, and smooth UI.",
      features: [
        "Progressive Web Apps",
        "Responsive UI/UX",
        "Optimized for low-end mobile devices",
        "Fast APIs",
        "SEO + Performance Tuned",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-20">
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
              <span className="gradient-text">Services</span>{" "}
              <span className="text-foreground">I Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineering-driven solutions for modern businesses and scalable software systems.
            </p>
          </motion.div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`relative bg-card border rounded-lg p-8 ${
                  service.popular
                    ? "border-primary shadow-lg shadow-primary/20 scale-105"
                    : "border-border hover:border-primary/50"
                } transition-colors`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                whileHover={{ y: service.popular ? 0 : -10, scale: service.popular ? 1.05 : 1.02 }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Requested
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.1 + featureIndex * 0.05,
                        }}
                      >
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full ${
                      service.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                    size="lg"
                  >
                    Start Project
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LeetCode CTA */}
          <motion.div
            className="text-center pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-muted-foreground mb-4">
              I actively practice Data Structures & Algorithms.
            </p>

            <Button
              onClick={() => window.open("https://leetcode.com/u/sadiqueshakeel/", "_blank")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View My LeetCode Profile
            </Button>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;
