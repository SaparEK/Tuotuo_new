import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-seamless-sky text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Testimonials />
      </main>
    </div>
  );
}
