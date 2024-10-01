import Navbar from "../components/navbar";
import Heros from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Heros />
      <Features />
      <About />
      <Footer />
    </>
  );
}
