import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Agentic AI & LLMs",
    skills: [
      { name: "LangChain", level: 95, icon: "⛓️" },
      { name: "GPT-4", level: 90, icon: "🧠" },
      { name: "Claude", level: 88, icon: "🔮" },
      { name: "Gemini", level: 92, icon: "💎" },
      { name: "Multi-Agent Systems", level: 88, icon: "🤖" },
      { name: "RAG Pipelines", level: 92, icon: "📚" },
      { name: "Function Calling", level: 88, icon: "📞" },
      { name: "Prompt Engineering", level: 95, icon: "💭" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS SageMaker", level: 90, icon: "☁️" },
      { name: "AWS Lambda", level: 85, icon: "⚡" },
      { name: "AWS EC2", level: 85, icon: "💻" },
      { name: "AWS S3", level: 90, icon: "🗄️" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "GitHub Actions", level: 80, icon: "⚙️" },
      { name: "CloudWatch", level: 80, icon: "📊" },
      { name: "AWS IAM", level: 85, icon: "🔒" },
    ],
  },
  {
    title: "Databases & Vector DBs",
    skills: [
      { name: "FAISS", level: 90, icon: "🔍" },
      { name: "ChromaDB", level: 88, icon: "💾" },
      { name: "Pinecone", level: 85, icon: "🌲" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "Vector Search", level: 87, icon: "🎯" },
      { name: "Embedding Models", level: 88, icon: "🔢" },
      { name: "Similarity Search", level: 85, icon: "🔗" },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "TensorFlow", level: 85, icon: "🧠" },
      { name: "PyTorch", level: 87, icon: "🔥" },
      { name: "FastAPI", level: 85, icon: "⚡" },
      { name: "Flask", level: 90, icon: "🌶️" },
      { name: "Streamlit", level: 92, icon: "📊" },
      { name: "React", level: 75, icon: "⚛️" },
      { name: "Git", level: 90, icon: "📝" },
    ],
  },
];

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-10 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.15,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 p-5 rounded-xl hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-center text-primary">{category.title}</h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-base">{skill.icon}</span>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors text-xs font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        animate={{
                          scale: hoveredSkill === skill.name ? 1.05 : 1,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
