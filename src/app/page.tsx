import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { Container } from "@/components/layout/Container";
import Swiper from "@/components/sections/Swiper";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Swiper />
      <Container>
        <FeaturedSection />
      </Container>
    </>
  );
}
