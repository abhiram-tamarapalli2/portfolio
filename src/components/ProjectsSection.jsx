import { ArrowRight, ExternalLink, Github, Lock } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AyuCore AI — Medical Knowledge Assistant",
    description: "Flask-based RAG chatbot prototype combining Gemini responses with Pinecone retrieval and medical reference content. For education, not clinical advice.",
    image: "/projects/project1.png",
    tags: ["Python", "Flask", "Gemini", "Pinecone", "RAG"],
    githubUrl: "https://github.com/abhiram-tamarapalli2/Ayucore-AI",
    status: "Public repository",
  },
  {
    id: 2,
    title: "EcoCollect — Waste Management Prototype",
    description: "Private React and TypeScript prototype with citizen, driver, vendor and leaderboard views. AI classification and IoT integrations are planned.",
    image: "/projects/project2.png",
    tags: ["React", "TypeScript", "Tailwind", "UI Prototype"],
    githubUrl: null,
    status: "Private prototype",
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description: "Responsive portfolio built with React, Vite, Framer Motion and Tailwind CSS to present projects, technical interests and experience.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "JavaScript", "Frontend"],
    githubUrl: "https://github.com/abhiram-tamarapalli2/portfolio",
    status: "Public repository",
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="py-12 px-4 relative">
    <div className="container mx-auto max-w-6xl">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
        className="text-3xl md:text-4xl font-bold mb-3 text-center">
        Featured <span className="text-primary">Projects</span>
      </motion.h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-8">
        Selected AI/ML and software projects. Live integrations, demos and benchmark results are documented only when verified.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <motion.article key={project.id} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}}
            viewport={{once:true}} whileHover={{y:-5}}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
            <div className="h-40 overflow-hidden">
              <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover"/>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="text-xs text-primary font-medium">{project.status}</div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <span key={tag} className="rounded-full px-2 py-1 text-xs bg-secondary text-secondary-foreground">{tag}</span>)}
              </div>
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline">
                  <Github size={16}/> View source <ExternalLink size={13}/>
                </a>
              ) : (
                <span className="inline-flex gap-2 items-center text-sm text-muted-foreground"><Lock size={15}/> Source repository is private</span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
      <a href="https://github.com/abhiram-tamarapalli2" target="_blank" rel="noopener noreferrer"
         className="cosmic-button w-fit flex items-center gap-2 mx-auto mt-8">
         Explore GitHub <ArrowRight size={16}/>
      </a>
    </div>
  </section>
);
