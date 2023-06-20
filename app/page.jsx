import Slider from "../components/Slider";
import FeaturedProjects from "../components/FeaturedProjects";
import TrendingProjects from "../components/TrendingProjects";
import Categories from "../components/Categories";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProjects type="Featured" />
      <Categories />
      <TrendingProjects type="Trending" />
      <Contact />
    </div>
  );
};

export default Home;
