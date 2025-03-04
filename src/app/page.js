import HomeSecNav from "./components/homeSecNav/HomeSecNav";
import TextSlider from "./components/textSlider/textSlider";
import ProductComp from "./components/productComp/ProductComp";

export const metadata = {
  title: {
    absolute: "Online Clothes shopping: Pakistan"
  }
}


export default function Home() {
  return (
    <div >
      <TextSlider />
      <HomeSecNav />
      <ProductComp />
      <div className='flex items-center justify-center my-8'>
        <button className='py-3 px-11 bg-black text-white'>Load More</button>
      </div>
    </div>
  );
}
