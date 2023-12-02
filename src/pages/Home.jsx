import './../assets/styles/home.css'
import CardLarge from "../components/cards/CardLarge.jsx";
import {useEffect, useState} from "react";
import {getProducts} from "../services/productService.js";
import Banner from "../components/banner/Banner.jsx";
import Subscription from "../components/subscription/Subscription.jsx";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res.data)
    })
  }, []);

  return (
    <>
      <Banner></Banner>

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

      <Subscription></Subscription>
    </>
  )
}

export default Home;
