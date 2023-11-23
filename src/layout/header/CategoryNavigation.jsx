import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCategories} from "../../services/categoryService.js";

function CategoryNavigation() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => {
      console.log(res.data);
      setCategories(res.data)
    })
  }, []);

  return (
    <nav>
      <ul className='flex'>
        { categories.map((category, index) => {
          return (
            <li className='pb-4 pr-3' key={index}>
              <Link to={`/products?category=${category}`} className='uppercase'>
                { category }
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default CategoryNavigation;
