import AddToCart from "../component/AddToCart";
import chat from '../assests/Icon/chat-bubble.png';
import like from '../assests/Icon/like.png'
import Productlist from "../component/Productlist";
import anotherProduct from '../json/women_bottom.json';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setProductDetail } from "../actions/productAction";
import { getProductById } from "../api/productAPI";
import { addToCart } from "../actions/productAction";

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { product_id } = useParams();
    const [product, setProduct] = useState();
    const {cartItems} = useSelector((state)=> {
        console.log(state.product);
        return state.product
    });
    

    useEffect(async () => {
        if (product_id) {
            const resp = await getProductById(product_id);
            setProduct(resp.product);
        }
    }, [])

    const handleAddToCart = () => {
        dispatch(addToCart(product));

    }


    return (

        <>
            {product ?
                <>
                    <div className="productdetail_container">
                        <div className="productdetail_img">
                            <img alt="" className="productdetail_img_img" src={product.image} />
                        </div>
                        <div className="productdetail_detail">
                            <div className="productdetail_detail_detail">
                                <div className="productdetail_seller">
                                    <img className="productdetail_sellericon" src={product.owner.image} alt="" />
                                    <div className="productdetail_sellername">{product.owner.username}</div>
                                </div>
                                <div className="productdetail_title">{product.name}</div>
                                <div className="productdetail_price">NT {product.price}</div>
                                <div className="productdetail_button">
                                    <img className="productdetail_icon" src={like} alt="" />
                                    <img className="productdetail_icon" src={chat} alt="" />
                                </div>

                                <button className="addCart-button" onClick={handleAddToCart} >
                                    <span>???????????????</span>
                                </button>

                                <div className="productdetail_information">
                                    <div className="productdetail_item">??????</div>
                                    <div className="productdetail_answer">M</div>
                                </div>
                                <div className="productdetail_information">
                                    <div className="productdetail_item">??????</div>
                                    <div className="productdetail_answer">???</div>
                                </div>
                                <div className="productdetail_information">
                                    <div className="productdetail_item">??????</div>
                                    <div className="productdetail_answer">{product.description}</div>
                                </div>
                                <div className="productdetail_information">
                                    <div className="productdetail_item">??????</div>
                                    <div className="productdetail_answer">??????</div>
                                </div>
                                <div className="productdetail_information">
                                    <div className="productdetail_item">??????</div>
                                    <div className="productdetail_answer">?????????</div>
                                </div>



                            </div>
                        </div>

                    </div>
                    <Productlist products={anotherProduct} text="??????????????????" />
                </>
                : null
            }
        </>
    )

}