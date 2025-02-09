import LPBuko from "../assets/buko-pandan.jpg";
import LPMelon from "../assets/melon.jpg";
import Modal from "./Modal";

const DrinksMenu = () => {
  return (
    <section className="block drinks__menu" id="drinks-menu">
      <div className="container">
        <div className="flex justify--between align--center drinks__container">
          <h2>Drinks</h2>
          <span className="menu__price">&#8369;25</span>
        </div>
        <h3>Flavors</h3>
        <div className="drinks__grid">
          <div className="drink__container">
            <img className="img img--border drink__img" src={LPBuko} alt="" />
            <h4>Buko Pandan</h4>
          </div>
          <div className="drink__container">
            <img className="img img--border drink__img" src={LPMelon} alt="" />
            <h4>Melon</h4>
          </div>
        </div>
        <Modal title="BUNDLE OFFER" className="drink__modal">
          Buy a POPCORN and DRINK, and get a ₱5 discount!
        </Modal>
      </div>
    </section>
  );
};

export default DrinksMenu;
