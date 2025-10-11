"use client";

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, GrowthAffinity",
      content: "Sadique delivered an exceptional MLM platform that exceeded our expectations. His technical expertise in MERN stack and attention to detail made our project a huge success. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      name: "Rajesh Kumar",
      role: "CEO, IndianPly",
      content: "The e-commerce platform Sadique built for us is robust, scalable, and user-friendly. His understanding of business requirements and technical implementation is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Director, Youth Dreamers Foundation",
      content: "Working with Sadique as our DevOps intern was fantastic. He optimized our cloud deployments and brought fresh ideas to improve our educational platform's performance.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/10">
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
              <span className="gradient-text">Client</span>{" "}
              <span className="text-foreground">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-card border border-border rounded-lg p-6 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Quote decoration */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-bold">"</span>
                </div>

                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-primary text-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.6 + (index * 0.2) + (i * 0.1) 
                        }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;