import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center px-4 overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl pointer-events-none"
        style={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl z-10">
        <motion.div
          className="text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span
                  className="block text-foreground"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Hi, I&apos;m
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Abhiram Tamarapalli
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-primary font-medium">AWS Cloud & AI Engineer</span>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Specializing in Machine Learning, Generative AI, and Cloud Solutions.
              Building intelligent applications with cutting-edge AI technologies and AWS infrastructure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
            >
              <motion.a
                href="#projects"
                className="cosmic-button group inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>View My Work</span>
                <motion.div
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
                </motion.div>
              </motion.a>

              <motion.a
                href="#about"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6 pt-6"
            >
              {[
                { Icon: Github, href: "https://github.com/abhiram-tamarapalli2", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/abhiram-tamarapalli-6a8177330", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:abhiramtamarapalli2@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator - Static position at bottom of flex container */}
      <motion.div
        className="py-8 flex flex-col items-center cursor-pointer z-10"
        variants={floatingVariants}
        animate="floating"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.span
          className="text-sm text-muted-foreground mb-2 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.span>
        <motion.div
          className="p-2 rounded-full border-2 border-primary/50 hover:border-primary transition-colors"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
