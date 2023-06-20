import React, { useEffect, useState } from "react";
import Card from "./Card";
import { client } from "../lib/client";

const List = ({ catId, maxPrice, sort }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && category == "${catId}" && price <= ${maxPrice}]| order(price ${sort})`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, [catId, maxPrice, sort]);

  return (
    <div className="flex justify-center md:gap-40 flex-wrap">
      {products?.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default List;
