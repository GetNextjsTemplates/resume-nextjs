import AboutMe from "./components/home/about-me"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"

const page = () => {
  return (
    <>
      <HeroSection />
      <ContactBar/>
      <AboutMe/>
      <ExperienceSec/>
    </>
  )
}

export default page