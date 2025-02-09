import Button from "./Button";
import CatalogueTitle from "../assets/catalogue-title.png";
import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el: any) => {
  const yOffset = -350;
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Banner = () => {
  return (
    <section className="block flex align--center flex--column banner">
      <img className="img img--logo" src={CatalogueTitle} alt="" />
      <HashLink smooth to="#showcase-option" scroll={scrollWithOffset}>
        <Button className="banner__btn">View Menu</Button>
      </HashLink>
    </section>
  );
};

export default Banner;
