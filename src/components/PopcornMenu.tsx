import LPPopcorn from "../assets/popcorn-catalogue.jpg";
import LPBBQ from "../assets/LP bbq.jpg";
import LPCaramel from "../assets/LP caramel.jpg";
import LPCheese from "../assets/LP cheese.jpg";
import LPSpicy from "../assets/LP spicy bbq.jpg";
import Modal from "./Modal";
import Showcase from "./Showcase";

const PopcornMenu = () => {
  return (
    <section className="block popcorn__menu" id="popcorn-menu">
      <div className="popcorn__container container">
        <img
          className="img img--500 img--border menu__img"
          src={LPPopcorn}
          alt=""
        />
        <div className="menu__container">
          <span className="menu__price popcorn__price">&#8369;25</span>
          <h2 className="menu__title">Lovy Popcorn</h2>
          <h3>Flavors</h3>
          <div className="flex flex--wrap menu__flavors">
            <span className="menu__flavor flavor__cheese">Cheese</span>
            <span className="menu__flavor flavor__spicy">Spicy BBQ</span>
            <span className="menu__flavor flavor__bbq">BBQ</span>
            <span className="menu__flavor flavor__caramel">Caramel</span>
          </div>
          <Modal className="popcorn__modal">5 peso discount with COUPON</Modal>
        </div>
        <Showcase srcs={[LPCheese, LPSpicy, LPBBQ, LPCaramel]} />
      </div>
    </section>
  );
};

export default PopcornMenu;
