"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 20, suffix: "+", label: "Successful Projects", description: "Production-ready applications delivered" },
    { value: 200, suffix: "+", label: "Hours of Coding", description: "Dedicated development time" },
    { value: 500, suffix: "+", label: "GitHub Contributions", description: "Open source contributions and commits" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  // COUNT ANIMATION (highly optimized)
  useEffect(() => {
    if (!isInView) return;

    stats.forEach((stat, i) => {
      let current = 0;
      const step = stat.value / 40;

      const interval = setInterval(() => {
        current += step;
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.min(Math.ceil(current), stat.value);
          return updated;
        });

        if (current >= stat.value) clearInterval(interval);
      }, 25);
    });
  }, [isInView]);

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          ref={ref}
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Impact</span>{" "}
              <span className="text-foreground">in Numbers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Highlights of my work, growth, and consistency.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center space-y-3"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.2 * i }}
              >
                <div className="relative inline-block">
                  <div className="text-6xl md:text-7xl font-bold gradient-text">
                    {counts[i]}
                    {stat.suffix}
                  </div>

                  {/* animated ring */}
                  <motion.div
                    className="absolute -inset-4 border-2 border-primary/20 rounded-full"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={isInView ? { scale: 1, rotate: 360 } : {}}
                    transition={{ duration: 1.2, delay: 0.4 * i }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
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
