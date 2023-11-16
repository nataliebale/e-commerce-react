import './../assets/styles/home.css'
import CardLarge from "../components/cards/CardLarge.jsx";
import { Link } from "react-router-dom";

function Home() {
  const card = {
    image: 'https://picsum.photos/400/300',
    title: 'Card title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    category: 'Category',
    price: '100$'
  };

  return (
    <>
      {/* <Link to={`/products/${card.id}`}> */}
        <CardLarge
          image={card.image}
          title={card.title}
          description={card.description}
          category={card.category}
          price={card.price}
        ></CardLarge>
      {/* </Link> */}
    </>
  )
}

export default Home;
