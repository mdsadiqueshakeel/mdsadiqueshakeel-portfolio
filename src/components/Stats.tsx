"use client";

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState([0, 0, 0]);

  const stats = [
    { value: 20, suffix: "+", label: "Successful Projects", description: "Production-ready applications delivered" },
    { value: 200, suffix: "+", label: "Hours of Coding", description: "Dedicated development time" },
    { value: 500, suffix: "+", label: "GitHub Contributions", description: "Open source contributions and commits" }
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let startValue = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          startValue += increment;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.ceil(startValue), stat.value);
            return newCounts;
          });
          
          if (startValue >= stat.value) {
            clearInterval(timer);
          }
        }, 30);
      });
    }
  }, [isInView]);

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Impact</span>{" "}
              <span className="text-foreground">in Numbers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measuring success through meaningful metrics and continuous growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center space-y-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + (index * 0.2),
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-6xl md:text-7xl font-bold gradient-text mb-2">
                    {counts[index]}{stat.suffix}
                  </div>
                  
                  {/* Decorative circle */}
                  <motion.div
                    className="absolute -inset-4 border-2 border-primary/20 rounded-full"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.6 + (index * 0.2),
                      type: "spring",
                      stiffness: 100
                    }}
                  />
                </motion.div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;