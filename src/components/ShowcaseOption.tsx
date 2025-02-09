import Button from "./Button";
import { HashLink } from "react-router-hash-link";

const ShowcaseOption = () => {
  return (
    <div className="block" id="showcase-option">
      <div className="container showcase__option">
        <header className="showcase__header">
          <h1>Explore Our Menu</h1>
        </header>
        <div className="showcase__btns">
          <HashLink smooth className="showcase__link" to="#popcorn-menu">
            <Button type="primary" className="showcase__btn">
              Popcorn
            </Button>
          </HashLink>
          <HashLink smooth className="showcase__link" to="#drinks-menu">
            <Button type="secondary" className="showcase__btn">
              Drinks
            </Button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseOption;
