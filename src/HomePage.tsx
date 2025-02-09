import Banner from "./components/Banner";
import DrinksMenu from "./components/DrinksMenu";
import Footer from "./components/Footer";
import PopcornMenu from "./components/PopcornMenu";
import ShowcaseOption from "./components/ShowcaseOption";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ShowcaseOption />
      <PopcornMenu />
      <DrinksMenu />
      <Footer />
    </>
  );
};

export default HomePage;
