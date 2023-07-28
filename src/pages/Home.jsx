import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";



const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);



  // fetch Product Data function
  async function fetchProductData() {
    setLoading(true)

    try {
      const respone = await fetch(API_URL);
      const data = await respone.json();
      setItems(data)
    }

    catch {
      console.log("Error has came");
      setItems([]);
    }

    setLoading(false)
  }

  // Effect hook 
  useEffect(() => {
    fetchProductData();

  }, [])



  // space-y-10 space-x-5
  return (
    <div className="flex justify-center items-center max-w-6xl mx-auto mt-20">
      {
        loading ? <Spinner />
          : items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl p-2 mx-auto ">
              {
                items.map((item) => (
                  <ProductCard key={item.id} item={item}  />
                ))}
            </div>
          )
            :
            (<div className="flex justify-center items-center w-screen h-screen ">
              <p className="text-4xl font-semibold">No Data Found...!</p>
            </div>)
      }
    </div>

  );
};

export default Home;
