import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { Container } from "@/components/layout/Container";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Container>
        <FeaturedSection />
      </Container>
    </>
  );
}
