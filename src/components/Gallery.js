import { cakes } from "../data";
import { CakeContext } from "../Contexts/CakeContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Gallery = () => {
  const { addItemToCart, cart } = useContext(CakeContext);

  return (
    <section className="Gallery" id="gallery">
      <div className="section-title">
        <h2>
          Our <span>Gallery</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {cakes.map(({ id, title, img, description, price, flavor }) => {
          return (
            <article className="cake-card" key={id}>
              <div className="cake-img">
                <img src={img} className="cake" alt="" />
              </div>
              <div className="cake-info">
                <div className="cake-title">
                  <h4>{title}</h4>
                </div>
                <p>{description}</p>
                <div className="cake-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    Ksh {price}
                  </p>
                  <p>{flavor}</p>
                  <button
                    className="cake-btn"
                    onClick={() => addItemToCart(id)}
                  >
                    Add To Cart {cart[id] > 0 && <>({cart[id]})</>}
                    {/* <Link to="/Cart">Add to Cart</Link> */}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
