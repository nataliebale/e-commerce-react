import './../../assets/styles/cardLarge.css'
import { Link } from "react-router-dom";

function CardLarge({image, title, description, category, price}) {
  return (
    <Link
      to={`/products/${1}`}
      className='w-[calc(25%-14px)] border rounded-[5px] overflow-hidden'
    >
      <div
        className='pt-[60%] bg-cover bg-center'
        style={{backgroundImage: `url(${ image })`}}
      ></div>
      <div className='p-[20px]'>
        <div className='text-[18px] bold'>
          { title }
        </div>
        {/* <div className='large-card__description'> */}
        {/* { description } */}
        {/* </div> */}
        <div className='text-[14px] '>
          { category }
        </div>
        <p>
          { price }
        </p>
      </div>
    </Link>
  )
}

export default CardLarge;
