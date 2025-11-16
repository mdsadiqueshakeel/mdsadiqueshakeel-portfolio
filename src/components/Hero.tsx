"use client";

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/mdsadiqueshakeel-portfolio/Md_Sadique_Shakeel.pdf";
  link.download = "Md_Sadique_Shakeel.pdf";
  link.click();
};




  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="gradient-text">Sadique </span>
                <span className="text-foreground">Shakeel</span>
              </motion.h1>
              
              {/* Updated Subheadline */}
              <motion.div
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p>
                  Software Engineer & Full-Stack Developer building scalable backend systems, 
                  modern full-stack applications, and automation workflows with a focus on 
                  clean engineering and real-world problem solving.
                </p>
              </motion.div>
            </motion.div>

            {/* TAGS (New) */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              {[
                "Backend Architecture",
                "Scalable Systems",
                "MERN / Next.js",
                "AWS & DevOps",
                "n8n Automation",
                "LeetCode 150+"
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-full"
                size="lg"
              >
                Let’s Connect
              </Button>
              
              <Button
                onClick={downloadResume}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium rounded-full"
                size="lg"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Stats (Updated Wording) */}
            <motion.div
              className="flex items-center space-x-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">20+</span>
                </div>
                <span className="text-sm text-muted-foreground">Projects Delivered</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">2+</span>
                </div>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Content - Photo (UNCHANGED) */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ImageWithFallback
                  src="Hero_image.webp"
                  alt="Md Sadique Shakeel"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full"
                animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full"
                animate={{ y: [0, 10, 0], rotate: [360, 180, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
