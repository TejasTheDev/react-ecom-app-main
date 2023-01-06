import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useCart } from "../../context/cart-context";
import LandingPage from "../../components/LandingPage/LandingPage";
import Category from "../../components/Category/Category";

export const Home = () => {

    const { cart } = useCart();

    console.log(cart);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        //IIFE
        (async () => {
            try{
                const { data: { crops } } = await axios.get("data.json");
                setProducts(crops);
            }catch(error){
                console.log(error)
            }
        })()
    }, [])
    return (
        <Fragment>
            <Navbar />
            <LandingPage/>
            <Category/>
            <main className="main d-flex gap wrap">
            {
                products.map(product => <ProductCard key={product.id} product={product}/>)
            }
            </main>
        </Fragment>
        

    )
}