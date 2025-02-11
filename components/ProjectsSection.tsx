import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "LughaTausi",
    description:
      "A multilingual platform with a sleek UI focused on African languages.",
    tags: ["Next.js", "TailwindCSS", "NLP"],
    link: "#",
  },
  {
    title: "SecureWallet",
    description: "Digital wallet solution with advanced security features.",
    tags: ["React", "Node.js", "Blockchain"],
    link: "#",
  },
  {
    title: "CyberGuard",
    description: "Cybersecurity analysis and monitoring dashboard.",
    tags: ["Vue.js", "Python", "ML"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
