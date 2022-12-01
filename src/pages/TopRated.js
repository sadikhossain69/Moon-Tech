import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

const TopRated = () => {
  const { state } = useProducts()
  const { loading, products, error } = state
  const { data: p } = products

  let content

  if (loading) {
    content = <p>Loading...</p>
  }

  if (error) {
    content = <p>Something went wrong</p>
  }

  if (!loading && !error) {
    content = p?.filter(product => product.rating >= 4 ).map(product => <ProductCard key={product._id} product={product} />)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        content
      }
    </div>
  );
};

export default TopRated;
