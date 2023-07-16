
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../store/product/actions";
import { addItem } from "../store/checkout/slice";
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);

  const fetchProduct = async (productId) => {
    await dispatch(getDetail(productId));
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);
  console.log("entity", entity);
  return (
    <section className="w-[60%] text-gray-700 body-font overflow-hidden bg-white">
      <div onClick={() => navigate("/")}>
        <button type="button" class=" text-black rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 py-3" >
          <div class="flex flex-row align-middle">
            <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
            </svg>
            <p class="ml-2 text-black" >Prev</p>
          </div>
        </button>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={entity.image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{entity.title}</h1>

            <p className="leading-relaxed">{entity.description}</p>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${entity.price}</span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded "
                onClick={() => dispatch(addItem(entity))}>+Keranjang</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
