import AboutMe from "../../components/HomeComponents/AboutMe";
import Banner from "../../components/HomeComponents/Banner";
import Contact from "../../components/HomeComponents/Contact";
import Education from "../../components/HomeComponents/Education";
import Projects from "../../components/HomeComponents/Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Home;
