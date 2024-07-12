import {
  BestSection,
  Container,
  CouponSection,
  Footer,
  HeroSection,
  NavBar,
  Products,
  Services,
  Timeline,
} from "./components";

export default function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Container>
        <Timeline />
        <BestSection />
        <Services />
        <Products />
        <CouponSection />
      </Container>
      <Footer />
    </>
  );
}
