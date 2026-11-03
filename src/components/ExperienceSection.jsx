import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AWS Development Intern",
    company: "Technical Hub",
    location: "Kakinada, India",
    duration: "Jun 2024 – Jul 2024",
    achievements: [
      "Completed hands-on training in AWS development, Cloud9, AWS SDKs and Boto3.",
      "Practiced building serverless workflows using AWS Lambda and API Gateway.",
      "Worked with cloud services and application development concepts during the internship."
    ],
    technologies: ["AWS", "Python", "Boto3", "Lambda", "API Gateway"]
  },
  {
    title: "AI & Machine Learning Intern",
    company: "IBM SkillsBuild / Edunet Foundation / APSSDC",
    location: "Training program",
    duration: "Jun 2024 – Jul 2024",
    achievements: [
      "Completed a six-week AI/ML internship training program.",
      "Explored supervised learning, Python-based data workflows and practical machine learning concepts.",
      "Applied course concepts through hands-on exercises and project work."
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "AI"]
  }
];

export const ExperienceSection = () => (
  <section id="experience" className="py-12 px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">Experience</h2>
      <div className="space-y-5">
        {experiences.map(exp => (
          <motion.article key={exp.company} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
            viewport={{once:true}} className="bg-card border border-border rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold">{exp.title}</h3>
                <p className="text-sm text-primary">{exp.company}</p>
              </div>
              <div className="text-xs text-muted-foreground">
                <p className="flex gap-2 items-center"><Calendar size={13}/>{exp.duration}</p>
                <p className="flex gap-2 items-center mt-1"><MapPin size={13}/>{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              {exp.achievements.map(item => <li key={item}>{item}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map(tech => <span key={tech} className="bg-primary/10 text-primary text-xs rounded-full px-3 py-1">{tech}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
