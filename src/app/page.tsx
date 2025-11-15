import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Trabajos } from "@/components/trabajos";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Trabajos />
      <Footer />
    </div>
  );
}
