import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { getDoc, doc } from "firebase/firestore";
import fireDB from '../fireConfig';
import { useParams } from "react-router-dom";

function ProductInfo() {

    const [product, setProduct] = useState([]);
    const params = useParams();
    
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            const product = await getDoc(
                doc(fireDB, "products", params.productid));
            console.log(product.data());    
            setProduct(product.data());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            {product && (<div>
                <p><b>{product.name}</b></p>
                <img src={product.imageURL} alt="" className="product-info-Img"></img>
                <hr />
                <p>{product.description}</p>
                <p><b>${product.price}</b></p>
                <div className="d-flex justify-content-end mt-3">
                    <button>Add to cart</button>
                </div>
            </div>)}
        </Layout>
    )
}

export default ProductInfo

