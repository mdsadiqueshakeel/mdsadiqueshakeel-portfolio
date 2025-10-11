"use client";

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello Sadique!

New inquiry from your portfolio:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

Best regards,
${formData.fullName}`;

    const whatsappUrl = `https://wa.me/916202488640?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      title: "Email",
      value: "mdsadiqueshakeel@gmail.com",
      link: "mailto:mdsadiqueshakeel@gmail.com",
      icon: "📧"
    },
    {
      title: "WhatsApp",
      value: "+91-6202488640",
      link: "https://wa.me/916202488640",
      icon: "📱"
    },
    {
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/mdsadiqueshakeel",
      icon: "💼"
    },
    {
      title: "GitHub",
      value: "View my code",
      link: "https://github.com/mdsadiqueshakeel",
      icon: "💻"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/10">
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
              <span className="gradient-text">Let's Work</span>{" "}
              <span className="text-foreground">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Get in touch and let's discuss your project.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-input border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    Send Message via WhatsApp
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to work on new projects and help bring innovative ideas to life. 
                  Whether you need a full-stack web application, system architecture consultation, 
                  or automation solutions, I'm here to help.
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-xl">{info.icon}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.title}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Why Work With Me?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <span>Fast response within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <span>Production-ready, scalable solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <span>Ongoing support and maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <span>Transparent communication throughout</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;