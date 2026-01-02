import { Cloud, Brain, Database, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export const AboutSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section id="about" className="py-10 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="text-primary text-glow">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column: Image & Buttons */}
            <motion.div
              className="flex flex-col items-center gap-8"
              variants={itemVariants}
            >
              {/* Circular Photo */}
              <div className="relative group max-w-[300px] w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-full overflow-hidden border-4 border-primary/20 bg-card w-full h-full shadow-2xl">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Buttons - Moved here */}
              <div className="flex flex-wrap gap-4 justify-center w-full">
                <a
                  href="#contact"
                  className="cosmic-button flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Get In Touch
                </a>

                <a
                  href="#"
                  className="px-6 py-2 rounded-full border border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </motion.div>

            {/* Right Column: Bio & Skills */}
            <motion.div className="space-y-8 text-center lg:text-left" variants={itemVariants}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold text-xl">Hello! I&apos;m a passionate engineer</span> committed to solving complex problems with cutting-edge technology.
                  Currently pursuing my B.Tech in <span className="text-primary font-medium">Artificial Intelligence and Machine Learning</span> at Aditya Engineering College.
                </p>
                <p>
                  My journey involves deep diving into <span className="text-foreground font-medium">AWS Cloud</span> architectures and exploring the frontiers of <span className="text-foreground font-medium">Generative AI</span>.
                  I love building scalable solutions and intelligent agents that make a real difference.
                </p>
                <p>
                  With a <span className="text-foreground font-medium">CGPA of 8.01</span> and hands-on experience from internships,
                  I bring a blend of theoretical knowledge and practical expertise to every project.
                </p>
              </div>

              {/* Cards Grid - Updated to 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
                {[
                  {
                    Icon: Cloud,
                    title: "Cloud Native",
                    desc: "AWS, Docker, Kubernetes & Scalable Systems"
                  },
                  {
                    Icon: Brain,
                    title: "Gen AI",
                    desc: "LLMs, RAG Pipelines & AI Agents"
                  },
                  {
                    Icon: Database,
                    title: "Data Eng",
                    desc: "Vector DBs, SQL & Data Pipelines"
                  }
                ].map((card, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors">
                    <card.Icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground text-sm mb-1">{card.title}</h4>
                    <p className="text-xs text-muted-foreground leading-snug">{card.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
