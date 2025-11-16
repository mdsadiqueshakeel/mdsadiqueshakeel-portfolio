"use client";

import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Service from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Set up SEO meta tags
    document.title = 'Md Sadique Shakeel | Fullstack Developer Portfolio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Md Sadique Shakeel - Fullstack Developer specializing in MERN stack, system design, AWS, and automation. Building scalable web applications and digital solutions.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Md Sadique Shakeel - Fullstack Developer specializing in MERN stack, system design, AWS, and automation. Building scalable web applications and digital solutions.';
      document.head.appendChild(meta);
    }

    // Add other SEO meta tags
    const metaTags = [
      { name: 'keywords', content: 'fullstack developer, MERN stack, Node.js, React, MongoDB, AWS, system design, automation, web development' },
      { name: 'author', content: 'Md Sadique Shakeel' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:title', content: 'Md Sadique Shakeel | Fullstack Developer Portfolio' },
      { property: 'og:description', content: 'Fullstack Developer specializing in MERN stack, system design, AWS, and automation solutions.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Md Sadique Shakeel | Fullstack Developer Portfolio' },
      { name: 'twitter:description', content: 'Fullstack Developer specializing in MERN stack, system design, AWS, and automation solutions.' }
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (tag.name) {
          meta.name = tag.name;
        } else if (tag.property) {
          meta.setAttribute('property', tag.property);
        }
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Set theme to dark by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Service/>
        <Stats />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}