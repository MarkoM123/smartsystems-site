import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Process from "@/components/Process";
import ServiceCards from "@/components/ServiceCards";
import Trust from "@/components/Trust";
import WhyUs from "@/components/WhyUs";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = {
  title: "SmartSystems BG | Pametni sistemi za dom i objekte u Beogradu",
  description:
    "Projektovanje i ugradnja pametnih sistema: pametno grejanje, sigurnost i automatika. Beograd i okolina. Zatražite procenu.",

  openGraph: {
    title: "SmartSystems BG | Pametni sistemi za dom i objekte",
    description:
      "Pametno grejanje, sigurnost i automatika za stanove i objekte u Beogradu.",
    url: "https://smartsystems-site.vercel.app",
    images: [
      {
        url: "https://smartsystems-site.vercel.app/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "SmartSystems BG – Pametni sistemi",
      },
    ],
  },
};


export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Process />
      <ServiceCards />
      <WhyUs/>
    </>
  );
}
