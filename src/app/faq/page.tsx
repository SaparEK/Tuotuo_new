import Header from "@/components/Header";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="pt-24 pb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Частые вопросы</h1>
          <p className="text-gray-600 mt-3">Ответы на популярные вопросы о доставке и услугах</p>
        </section>
        <FAQ />
      </main>
    </div>
  );
}


