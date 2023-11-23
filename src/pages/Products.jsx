import './../assets/styles/home.css'
import CardLarge from "../components/cards/CardLarge.jsx";
import {useEffect, useState} from "react";
import {getProducts} from "../services/productService.js";

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(res => {
      console.log(res.data)
      setProducts(res.data)
    })
  }, []);


  return (
    <div className='flex flex-row flex-wrap'>
      {
        products.map(item => {
          return (
            <div key={item.id} className='w-[20%]'>
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
  )
}

export default Products;
