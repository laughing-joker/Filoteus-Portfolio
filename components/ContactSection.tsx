import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary text-sm uppercase tracking-wider">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
          Lets Work Together
        </h2>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:text-primary"
          >
            <FaGithub className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:text-primary"
          >
            <FaLinkedin className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:text-primary"
          >
            <FaTwitter className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
