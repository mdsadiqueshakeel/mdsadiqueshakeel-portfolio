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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Crafting Scalable Systems</span>
              <br />
              <span className="text-foreground">& Meaningful Digital Experiences</span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Enthusiastic software engineering student & freelancer with a passion for building scalable, 
              production-ready applications. Strong expertise in backend development with Node.js, Express, 
              MongoDB, Redis, Microservices, and System Design, complemented by modern frontend skills in 
              React.js, Next.js, and Tailwind CSS. I specialize in automation using n8n workflows and AWS 
              cloud services, helping businesses transform their ideas into robust digital solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="bg-card border border-border rounded-lg p-6 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                End-to-end web application development using modern technologies and best practices.
              </p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-lg p-6 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">System Architecture</h3>
              <p className="text-muted-foreground">
                Designing scalable, maintainable systems with microservices and cloud-native solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-lg p-6 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automation & DevOps</h3>
              <p className="text-muted-foreground">
                Streamlining workflows with n8n automation and AWS deployment strategies.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;