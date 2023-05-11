import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export default function Product({ _id, name, price, description, picture }) {
  const { setSelectedProducts } = useContext(ProductsContext);

  // add product to cart function
  const addProduct = () => {
    setSelectedProducts((prevState) => [...prevState, _id]);
  };
  return (
    <div id="homePage" className="w-64">
      <div className="bg-blue-100 p-5 rounded-xl">
        <img src={picture} alt="iphone" />
      </div>
      <div className="mt-2">
        <h4 className="font-bold text-lg">{name}</h4>
      </div>
      <p className="text-sm mt-1 leading-4 text-gray-500">{description}</p>
      <div className="flex mt-1">
        <p className="text-xl font-bold grow">R {price.toFixed(2)}</p>
        <button onClick={addProduct} className="text-emerald-500 py-1 px-3">
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
}
