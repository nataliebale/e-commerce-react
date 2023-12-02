import './../assets/styles/home.css';
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService.js";
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductById(id).then(res => {
        setProduct(res.data);
      });
    }
  }, [id]);

  const loading = () => {
    return (
      <div className='text-center pt-[200px]'>
        Loading...
      </div>
    );
  }

  const loadProduct = () => {
    return (
      <section className='container mx-auto mt-[40px] mb-[50px]'>
        <div className='flex flex-row justify-between'>
        <div className='w-[50%]'>
          <img src={ product?.image } alt={ product?.title } />
        </div>
        <div className='w-[calc(50%-20px)]'>
          <h1>
            { product?.title }
          </h1>
          <p>{ product?.description }</p>
          <p>Category: { product?.category }</p>
          <p>Price: { product?.price } $</p>
          <p>Rating: { product?.rating?.rate }*</p>
        </div>
      </div>
      </section>
    );
  }

  return (
    <>
      { product ? loadProduct() : loading() }
    </>
  )
}

export default Product;