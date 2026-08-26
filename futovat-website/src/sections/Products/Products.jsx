import "./Products.css";

import BetaLeafSample from "../../assets/images/BetaLeafSample.png";

const products = [
  {
    title: "BetaLeaf",
    description:
      "A simple platform where authors can share their books with beta readers, gather feedback and reviews, and improve their stories before publishing.",
    status: "Launching Soon",
    button: "Coming Soon",
    image: BetaLeafSample,
  },
  {
    title: "Saga",
    description:
      "A gamified productivity platform that transforms learning and personal growth into an RPG adventure.",
    status: "In Development",
    button: "Learn More",
  },
  {
    title: "AI Assistant",
    description:
      "AI-powered tools that help businesses automate daily tasks and improve efficiency.",
    status: "Coming Soon",
    button: "Coming Soon",
  },
  {
    title: "Unity Tools",
    description:
      "Professional tools and plugins for Unity game developers to speed up production.",
    status: "Coming Soon",
    button: "Coming Soon",
  },
];

function Products() {
  return (
    <section id="products" className="products">
      <div className="section-header products-header">
        <span className="section-eyebrow">WHAT WE CREATE</span>

        <h2>Our Products</h2>

        <p>
          We build innovative products that simplify work, improve productivity,
          and solve real-world problems.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card" key={product.title}>
            <div className="product-image">
              {product.image ? (
                <>
                  <img src={product.image} alt={`${product.title} preview`} />

                  <div className="product-image-overlay"></div>
                </>
              ) : (
                <div className="product-placeholder">
                  <span>PRODUCT</span>
                  <small>PREVIEW</small>
                </div>
              )}
            </div>

            <div className="product-content">
              <span className="product-status">{product.status}</span>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <button
                className={
                  product.status === "Launching Soon"
                    ? "product-button product-button-primary"
                    : "product-button"
                }
              >
                {product.button}

                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
