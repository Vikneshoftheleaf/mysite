import NavBar from "@/components/nav";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
import AboutBubble from "@/components/aboutbuble";
import Footer from "@/components/footer";
export const metadata = {
  title: "Viknesh | Portfolio Website",
  description: "Hello everyone, I'm Viknesh a Web Developer and a Tech ethusiast, This is my portfolio website, i listed all my works, experience and my project.",
};


export default function Home() {
  return (
    <>
    <Hero/>
    <AboutBubble/>
    <Skills/>
    <Timeline/>
    </>
  );
}
