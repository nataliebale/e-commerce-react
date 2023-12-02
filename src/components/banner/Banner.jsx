import './../../assets/styles/cardLarge.css'
import bannerImage from '../../assets/images/gradient-black-background-with-wavy-lines_23-2149138436.jpg';

function Banner() {
  const imageStyles = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="relative w-full bg-grey-light pt-[50px]">
      <div className="absolute w-full bg-grey-light h-[150%] t-[200px] z-[-1]"></div>
      <div
        className="container m-auto py-[80px] px-[80px] rounded-[5px]"
        style={imageStyles}
      >
        <h1 className="text-white text-[40px]">What's New!</h1>
        <p className="text-white text-[20px]">
          Just millions of people selling the things they love.
        </p>
        <button className="mt-[60px] text-center py-3 px-6 text-[16px] rounded-[5px] text-white background-gradient">
          Go to Products
        </button>
      </div>
    </div>
  )
}

export default Banner;
