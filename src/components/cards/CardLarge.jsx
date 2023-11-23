import './../../assets/styles/cardLarge.css'
import { Link } from "react-router-dom";

function CardLarge({id, image, title, category, price}) {
  return (
    <Link
      to={`/products/${id}`}
      className='block mt-4 border rounded-[5px] overflow-hidden'
    >
      <div className='p-4'>
        <div
          className='pt-[80%] bg-cover bg-center'
          style={{backgroundImage: `url(${ image })`}}
        ></div>
        <div className='text-[18px] pt-4 bold'>
          { title }
        </div>
        <div className='text-[14px] py-1 text-grey'>
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
