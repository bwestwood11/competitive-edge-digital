import ClientReviews from "@/components/ClientReviews";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import SkillSection from "@/components/SkillSection";


export default function Home() {
  return (
    <div>
      <HeroSection  />
      <SkillSection />
      <ClientReviews  />
      <Features />
      <Portfolio />
    </div>
  )
}
