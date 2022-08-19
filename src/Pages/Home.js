import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { productInfo } from "../products"
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';
import { useNavigate } from "react-router-dom";

function Home() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            const products = await getDocs(collection(fireDB, "products"));
            const productsArray = [];
            products.forEach((doc) => {
                const obj = {
                    id: doc.id,
                    ...doc.data()
                }
                productsArray.push(obj);
            });
            setProducts(productsArray);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    {products.map((product) => {
                        return <div className="col-md-4 products position-relative">
                            <div className="m-2 p-1">
                                <div className="product-content">
                                    <p>{product.name}</p>
                                    <div className="text-center">
                                        <img src={product.imageURL} alt="" className="product-Img"></img>
                                    </div>
                                </div>
                                <div className="product-action">
                                    <h2>${product.price}</h2>
                                    <div className="d-flex">
                                        <button>Add to Cart</button>
                                        <button onClick={()=> {navigate(`/productinfo/${product.id}`)}}>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Home

