import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AyuCore AI - Medical Chatbot",
    description: "AI-powered healthcare chatbot using Flask + Google Gemini API with Pinecone vector database for medical knowledge retrieval.",
    image: "/projects/project1.png",
    tags: ["Flask", "Google Gemini", "Pinecone", "AWS", "Healthcare AI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "ResumeMind AI - Resume Analyzer",
    description: "AI-driven resume analysis tool leveraging LLMs + LangChain for skill extraction, gap analysis, and personalized recommendations.",
    image: "/projects/project2.png",
    tags: ["LangChain", "LLMs", "Flask", "React", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Neural Style Transfer Telegram Bot",
    description: "Published IEEE research project deploying Neural Style Transfer through Telegram Bot for real-time artistic image transformation.",
    image: "/projects/project3.png",
    tags: ["TensorFlow", "Neural Networks", "Telegram API", "Research"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const projectCardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-10 px-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          Featured <span className="text-primary"> Projects </span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Here are some of my recent AI/ML projects. Each project was carefully
          crafted with attention to innovation, performance, and real-world impact.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projects.map((project, key) => (
            <motion.div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
              variants={projectCardVariants}
              whileHover="hover"
              style={{ perspective: 1000 }}
            >
              <div className="h-40 overflow-hidden relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 bg-primary/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-4">
                <motion.div
                  className="flex flex-wrap gap-2 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="px-2 py-0.5 text-[10px] font-medium border rounded-full bg-secondary text-secondary-foreground"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.h3
                  className="text-lg font-semibold mb-1"
                  whileHover={{ color: "rgb(var(--primary))" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-muted-foreground text-xs mb-3 leading-relaxed"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: -15 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8"
          variants={itemVariants}
        >
          <motion.a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/abhiram-tamarapalli2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>Check My Github</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};
