import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Generative AI Intern",
    company: "TECHNICAL HUB",
    location: "Kakinada, India",
    duration: "June 2024 - July 2024",
    achievements: [
      "Designed and deployed multi-agent RAG pipeline using LangChain, FAISS, and ChromaDB achieving 30% improvement",
      "Optimized LLM performance through LoRA and QLoRA fine-tuning techniques, reducing computational costs by 40%",
      "Implemented agentic workflows for automated question-answering and summarization systems"
    ],
    technologies: ["LangChain", "FAISS", "ChromaDB", "LoRA", "QLoRA", "Multi-Agent Systems", "RAG", "LLMs"]
  },
  {
    id: 2,
    title: "AI/ML Intern",
    company: "Edunet Foundation (via APSSDC IBM SkillsBuild)",
    location: "Remote",
    duration: "June 2024 – July 2024",
    achievements: [
      "Completed 6-week AI/ML program covering supervised/unsupervised learning and neural networks",
      "Built LLM-powered applications with LangChain, RAG pipelines, and vector databases",
      "Applied prompt engineering and function calling for intelligent query answering"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "LangChain", "FastAPI", "Flask", "Vector Databases", "NLP"]
  }
];

export const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      className="py-10 px-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 w-px h-full bg-primary hidden md:block"></div>

          <div className="space-y-6 md:ml-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1.0] // Smooth graceful entrance
                }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[3.45rem] top-6 w-3 h-3 bg-primary rounded-full z-10 hidden md:block outline outline-4 outline-background"></div>

                <motion.div
                  className="bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.01, y: -2 }}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-0.5">{exp.title}</h3>
                      <div className="text-sm font-semibold text-muted-foreground mb-1">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end lg:text-right text-xs text-muted-foreground space-y-0.5">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-primary" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} className="text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <h4 className="text-sm font-semibold text-green-500">Key Achievements</h4>
                    </div>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0 mt-1.5"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1.5">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "hsl(var(--primary))",
                            color: "hsl(var(--primary-foreground))",
                            borderColor: "hsl(var(--primary))"
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
