import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    description:
      "Foundational certification covering Oracle Cloud AI services, machine learning capabilities, and AI implementation strategies.",
    badge: "☁️",
    skills: ["Oracle Cloud", "AI Foundations", "Cloud Computing", "Machine Learning"],
    credentialId: "OCI-AI-FOUNDATIONS-2025",
    link: "#",
  },
  {
    title: "Oracle Generative AI Professional",
    issuer: "Oracle",
    date: "2024",
    description:
      "Advanced certification covering generative AI fundamentals, model training, enterprise applications, and Oracle AI services.",
    badge: "🏆",
    skills: ["Generative AI", "Oracle Cloud", "AI Ethics", "Model Deployment"],
    credentialId: "ORACLE-GENAI-PRO-2024",
    link: "#",
  },
  {
    title: "Databricks Generative AI Fundamentals",
    issuer: "Databricks",
    date: "2024",
    description:
      "Comprehensive certification covering Databricks platform for generative AI, MLOps, and large-scale data processing.",
    badge: "🧠",
    skills: ["Databricks", "Generative AI", "MLOps", "Data Engineering"],
    credentialId: "DATABRICKS-GENAI-2024",
    link: "#",
  },
  {
    title: "AWS Academy Graduate: Cloud Web Application Builder",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    description:
      "Hands-on program covering AWS cloud services for building and deploying scalable web applications.",
    badge: "🚀",
    skills: ["AWS", "Cloud Computing", "Web Development", "Application Deployment"],
    credentialId: "AWS-ACADEMY-WEBAPP-2024",
    link: "#",
  },
  {
    title: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Foundational AWS certification covering core cloud concepts, services, and best practices for cloud computing.",
    badge: "☁️",
    skills: ["AWS", "Cloud Fundamentals", "Cloud Architecture", "AWS Services"],
    credentialId: "AWS-CLOUD-ESSENTIALS-2024",
    link: "#",
  },
  {
    title: "Oracle MySQL 8.0 Database Developer",
    issuer: "Oracle",
    date: "2024",
    description:
      "Database development certification covering MySQL 8.0 features, optimization, advanced queries, and database design.",
    badge: "🗄️",
    skills: ["MySQL", "Database Design", "SQL Optimization", "Data Management"],
    credentialId: "ORACLE-MYSQL-DEV-2024",
    link: "#",
  },
  {
    title: "Machine Learning Foundations",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Foundational machine learning certification covering ML concepts, AWS ML services, and practical implementations.",
    badge: "🤖",
    skills: ["Machine Learning", "AWS ML", "Data Science", "Model Training"],
    credentialId: "AWS-ML-FOUNDATIONS-2024",
    link: "#",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-10 px-4 relative bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-4 rounded-xl hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{cert.badge}</div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-medium text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground text-[10px]">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.date}
                  </div>
                </div>

                <p className="text-muted-foreground text-xs mb-3 leading-relaxed">{cert.description}</p>

                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-muted-foreground mb-1.5 flex items-center">
                    <Award className="h-3 w-3 mr-1 text-yellow-500" />
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-[10px] text-yellow-600 dark:text-yellow-400"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-[10px] text-muted-foreground">ID: {cert.credentialId}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2 py-0.5 text-[10px] border border-primary/50 text-primary hover:bg-primary/10 bg-transparent rounded-md transition-all duration-200 flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Verify
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
