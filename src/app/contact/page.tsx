import Header from "@/components/Header";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="pt-24 pb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Связаться с нами</h1>
          <p className="text-gray-600 mt-3">Оставьте заявку — перезвоним и рассчитаем стоимость</p>
        </section>
        <Contact />
      </main>
    </div>
  );
}


