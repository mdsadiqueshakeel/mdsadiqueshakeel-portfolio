"use client";

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Starter Plan",
      price: "$2990",
      description: "Perfect for small businesses and startups",
      features: [
        "Responsive Web Application",
        "Basic CRUD Operations",
        "User Authentication",
        "Database Integration",
        "Basic Deployment",
        "1 Month Support"
      ],
      popular: false
    },
    {
      title: "Professional Plan",
      price: "$4990",
      description: "Ideal for growing businesses",
      features: [
        "Full-Stack Web Application",
        "Advanced Features & APIs",
        "Payment Integration",
        "Admin Dashboard",
        "Cloud Deployment (AWS)",
        "3 Months Support",
        "Performance Optimization",
        "SEO Setup"
      ],
      popular: true
    },
    {
      title: "Enterprise Plan",
      price: "$9990",
      description: "For large-scale applications",
      features: [
        "Scalable Microservices Architecture",
        "Advanced Security & RBAC",
        "Third-party Integrations",
        "Analytics & Reporting",
        "DevOps & CI/CD Pipeline",
        "6 Months Support",
        "Load Balancing",
        "Custom Automation Workflows"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="services" className="py-20">
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
              <span className="gradient-text">Service</span>{" "}
              <span className="text-foreground">Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your project needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`relative bg-card border rounded-lg p-8 ${
                  service.popular 
                    ? 'border-primary shadow-lg shadow-primary/20 scale-105' 
                    : 'border-border hover:border-primary/50'
                } transition-colors`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
                whileHover={{ y: service.popular ? 0 : -10, scale: service.popular ? 1.05 : 1.02 }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {service.price}
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.6 + (index * 0.2) + (featureIndex * 0.1) 
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
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p className="text-muted-foreground mb-4">
              Need a custom solution? Let's discuss your requirements.
            </p>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact for Custom Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;