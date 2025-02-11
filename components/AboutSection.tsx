import { Shield, Code, Palette, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-accent dark:bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-primary text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
              Passionate Developer & Security Expert
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in developing secure and user-friendly web
              applications, focusing on cybersecurity, fintech, and UI/UX
              design. With a deep understanding of both front-end and back-end
              development, I create robust solutions that prioritize security
              without compromising on user experience.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Shield,
                  label: "Cybersecurity",
                  value: "5+ Years",
                  description: "Expertise in system security",
                },
                {
                  icon: Code,
                  label: "Development",
                  value: "100+ Projects",
                  description: "Full-stack solutions",
                },
                {
                  icon: Palette,
                  label: "UI/UX Design",
                  value: "50+ Designs",
                  description: "User-centered interfaces",
                },
                {
                  icon: Wallet,
                  label: "Fintech",
                  value: "10+ Solutions",
                  description: "E-wallet implementations",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/20 
                           transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white dark:bg-gray-800"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="font-semibold dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="mt-6 hover:bg-primary hover:text-white transition-colors duration-300"
              onClick={() => window.open("#contact", "_self")}
            >
              Get in Touch
            </Button>
          </div>

          <div className="relative">
            <div
              className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 
                          dark:from-primary/10 dark:to-primary/5 animate-fade-in overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center 
                              hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full 
                          dark:bg-primary/5 animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
