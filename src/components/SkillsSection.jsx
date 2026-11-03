import { motion } from "framer-motion";

const groups = [
  {title:"AI & Machine Learning",items:["Python","scikit-learn","Pandas","NumPy","Model Training","Classification","Regression"]},
  {title:"Generative AI",items:["Google Gemini","LangChain","RAG","Sentence Transformers","Prompt Engineering","Pinecone"]},
  {title:"AWS & Cloud",items:["Amazon EC2","Amazon S3","AWS Lambda","API Gateway","AWS IAM","Boto3","Cloud Fundamentals"]},
  {title:"Development & DevOps",items:["Flask","React","JavaScript","Git & GitHub","Docker","Kubernetes","Jenkins","Linux"]}
];
export const SkillsSection = () => (
  <section id="skills" className="py-12 px-4">
    <div className="container max-w-6xl mx-auto">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
        className="text-3xl md:text-4xl font-bold text-center mb-3 text-primary">Skills & Technologies</motion.h2>
      <p className="text-sm text-muted-foreground text-center mb-8">Tools used in coursework, training, and projects. Proficiency varies by technology.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map(group => (
          <article key={group.title} className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <div className="flex gap-2 flex-wrap">
              {group.items.map(item => <span key={item} className="text-xs rounded-lg px-3 py-2 bg-secondary text-secondary-foreground">{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
