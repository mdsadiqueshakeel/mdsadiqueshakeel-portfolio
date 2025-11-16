"use client";

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          ref={ref}
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Engineer</span>{" "}
            <span className="text-foreground">Focused on Scalable Systems</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I’m a software engineering student and full-stack developer 
              specializing in backend architecture, distributed systems, 
              automation workflows, and cloud-native deployments.  
              I build production-ready applications using the MERN stack, 
              scalable APIs with Node.js & Express, and efficient data layers 
              with MongoDB and Redis.  
              <br /><br />
              My work extends to automation using n8n, AWS services, containerization, 
              and modern DevOps practices. I focus on solving real-world problems 
              with clean engineering and performance-oriented design.
            </p>
          </motion.div>

          {/* 3 Feature Highlights */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Full-stack */}
            <motion.div
              className="bg-card border border-border rounded-lg p-6 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                Building modern, scalable web applications using MERN, Next.js, TypeScript, and clean architecture.
              </p>
            </motion.div>

            {/* Backend + Systems */}
            <motion.div
              className="bg-card border border-border rounded-lg p-6 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2">Backend & System Design</h3>
              <p className="text-muted-foreground">
                Designing performant APIs, microservices, caching layers, queues, 
                and distributed system components.
              </p>
            </motion.div>

            {/* DevOps + Cloud */}
            <motion.div
              className="bg-card border border-border rounded-lg p-6 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2">Cloud & Automation</h3>
              <p className="text-muted-foreground">
                Deploying on AWS, containerizing with Docker, workflow automation using n8n, and CI/CD pipelines.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
