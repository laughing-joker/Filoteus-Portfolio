import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Cybersecurity", level: 95 },
  { name: "Full-Stack Development", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Blockchain & Fintech", level: 80 },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-accent" id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Skills & Tech Stack
          </h2>
        </div>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
