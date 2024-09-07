import Navbar from "../components/Navbar"
import Heros from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
export default function Home() {
  return(
    <>
      <Navbar />
      <Heros />
      <Features />
      <About/>
    </>
  );
}
