import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

      <div className="animate-fade-up space-y-6 text-center max-w-4xl">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24 border-2 border-primary">
            <AvatarImage src="/placeholder.svg" alt="Filoteus Ngonyani" />
            <AvatarFallback>FN</AvatarFallback>
          </Avatar>

          <span className="inline-block text-primary px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm animate-fade-in">
            Filoteus Ngonyani
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Crafting Secure & Seamless
          <span className="text-primary block mt-2">Digital Experiences</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Cybersecurity • Full-Stack Development • UI/UX Design • E-Wallet
          Solutions
        </p>

        <button
          onClick={handleScroll}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors duration-200 animate-float"
        >
          Explore My Work
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
