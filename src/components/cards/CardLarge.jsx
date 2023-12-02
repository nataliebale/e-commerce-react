import './../../assets/styles/cardLarge.css'
import { Link } from "react-router-dom";

function CardLarge({id, image, title, category, price}) {
  return (
    <Link
      to={`/products/${id}`}
      className='block bg-white mt-4 border rounded-[5px] overflow-hidden'
    >
      <div className='p-4'>
        <div
          className='pt-[80%] bg-contain bg-no-repeat bg-center'
          style={{backgroundImage: `url(${ image })`}}
        ></div>
        <div className='text-[18px] pt-4 bold overflow-hidden h-[4.4rem] line-clamp-2 flex truncate whitespace-normal'>
          { title }
        </div>
        <div className='text-[14px] py-1 text-grey'>
          { category }
        </div>
        <p>
          { price } $
        </p>
        <button className="w-full text-center p-2 mt-3 text-[12px] rounded-[5px] font-bold uppercase bg-grey-light">
          Add to cart
        </button>
        {/*<button className="w-full text-center p-2 mt-3 text-[12px] rounded-[5px] text-white background-gradient">*/}
        {/*  Add to cart*/}
        {/*</button>*/}
      </div>
    </Link>
  )
}

export default CardLarge;
