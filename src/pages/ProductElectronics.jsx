import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductElectronics } from "../store/product/actions";
import CardProduct from "../components/cardProduct";

const ProductElectronics = () => {
    const { entities, loading, entity } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchProducts = async () => {
        dispatch(getProductElectronics());
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-10 bg-[#EFF4FA]">
            {loading ? (
                <>
                loading...
                </>
            ) : (
                entities.map((product) => {   
                    return (
                        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-7 px-32 bg-[#EFF4FA]">
                        <div onClick={() => navigate(`/detail/${product.id}`)}>
                        <CardProduct key={product.id} product={product} entity={entity}  />
                         </div>
                        );      
                })

            )}
        </div>
    );
};
export default ProductElectronics