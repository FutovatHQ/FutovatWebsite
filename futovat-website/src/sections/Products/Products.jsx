import "./Products.css";

const products = [
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
      <div className="section-header">
        <h2>Our Products</h2>

        <p>
          We build innovative products that simplify work, improve productivity,
          and solve real-world problems.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.title}>
            <div className="product-image">
              <span>Product Preview</span>
            </div>

            <span className="product-status">{product.status}</span>

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <button>{product.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
