import React from "react";
import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard.jsx";

const Product = () => {
  useEffect(() => {
    fetch("https://ecommerce-version2-cp23.onrender.com/productinfo")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setData(err));
  }, []);
  return(
    <>
<div className="product-header">
  <p>
    With 12 different Training programs that have boosted over 1,000 athletes speed, strength, and explosiveness.
  </p>
  <ul>
    <li>Over 3,000 athletes and customers have had signiFicant differences athletic ability and huge muscle gain within 3 months.</li>
    <li>Improved physical health and a better lifestyle.</li>
  </ul>
  <p id="product-quote">Choose the option best suited for your goals below!</p><p className='product-header_last'>We now have added a "BK Pack", "Mindset Pack", "Weight Loss Pack" & Many More!</p>
</div>
<div className="products">
</div>

<div>
<ProductFilter />
      <div className="products">
        {data.map((products) => (
          <ProductCard products={products} />
        ))}
      </div>
    </div>
</>
  );
};

export default Product;
