import './../assets/styles/home.css'
import CardLarge from "../components/cards/CardLarge.jsx";
import { useEffect, useState } from "react";
import { getProductsByCategory, getProducts } from "../services/productService.js";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsGetter = category ? getProductsByCategory(category) : getProducts();
    productsGetter.then(res => {
      setProducts(res.data);
    })
  }, [category]);

  return (
    <section className='container mx-auto mt-[40px] mb-[50px]'>
      <div className='flex flex-row flex-wrap mx-[-9px]'>
      {
        products.map(item => {
          return (
            <div key={item.id} className='w-[calc(20%-18px)] mx-[9px]'>
              <CardLarge
                id={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                price={item.price}
              ></CardLarge>
            </div>
          )
        })
      }
    </div>
    </section>
  )
}

export default Products;
