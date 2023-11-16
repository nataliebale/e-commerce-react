import './../assets/styles/home.css'
import CardLarge from "../components/cards/CardLarge.jsx";

function Products() {
  const card = {
    image: 'https://picsum.photos/400/300',
    title: 'Card title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    category: 'Category',
    price: '100$'
  };



  return (
    <>
      <CardLarge
        image={card.image}
        title={card.title}
        description={card.description}
        category={card.category}
        price={card.price}
      ></CardLarge>
      <CardLarge
        image={card.image}
        title={card.title}
        description={card.description}
        category={card.category}
        price={card.price}
      ></CardLarge>
    </>
  )
}

export default Products;
