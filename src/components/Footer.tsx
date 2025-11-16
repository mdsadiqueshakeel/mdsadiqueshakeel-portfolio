"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const quickLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sadique-shakeel-a5bb29266/",
      icon: <Linkedin size={20} className="text-primary" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/mdsadiqueshakeel",
      icon: <Github size={20} className="text-primary" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sadique__shakeel/",
      icon: <Instagram size={20} className="text-primary" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100025187237972",
      icon: <Facebook size={20} className="text-primary" />,
    },
    {
      name: "Email",
      url: "mailto:mdsadiqueshakeel@gmail.com",
      icon: <Mail size={20} className="text-primary" />,
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold gradient-text">
              Md Sadique Shakeel
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Fullstack Developer specializing in scalable web applications,
              system architecture, and automation solutions.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">
              Get in Touch
            </h3>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary" />
                <a
                  href="mailto:mdsadiqueshakeel@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mdsadiqueshakeel@gmail.com
                </a>
              </div>

              {/* Country */}
              <div className="flex items-center space-x-3">
                <span className="text-primary">📍</span>
                <span className="text-muted-foreground">India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Md Sadique Shakeel. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
