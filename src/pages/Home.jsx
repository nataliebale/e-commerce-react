import './../assets/styles/home.css'
import CardLarge from "../components/cards/CardLarge.jsx";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {getProducts} from "../services/productService.js";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
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

export default Home;
