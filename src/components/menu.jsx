import React, {useContext, useState} from 'react';
import { useWindowWidth } from "./window/Window.jsx";
import {Link} from "react-router-dom";
import "./menu.css"
import coffee from "../assets/coffee1.png"
import Header from "./header/Header.jsx";
import List from "../pages/menu/list/List.jsx";
import {TokenContext} from "./token/TokenContext.jsx";


const Menu = ()=>{

    const { token } = useContext(TokenContext)
    const windowWidth = useWindowWidth();
    const minValue = 0;
    const maxValue = 10;
    const [changeText, setChangeText] = useState("Add to car")
    const [changeStyle, setChangeStyle] = useState("box-data-button")
    const [changeLayout, setChangeLayout] = useState("box-menu-list")
    const [overviewPackage, setOverviewPackage] = useState(false)
    const [amount, setAmount] = useState(0)
    const [list, setList] = useState(false)

    console.log(token)

    const changePhrase = ()=>{
        setChangeText("Added to cart");
        setChangeStyle("box-data-button add")
        setOverviewPackage(true)
    }

    const listProducts = ()=>{
        setList(true)
        setChangeLayout("box-menu-list-active")
    }

    const handleSubmit = ()=>{

        fetch("http://localhost:8072/auth/user", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },

        })
            .then(res =>  res.json())
            .then(res => {
                if(res){
                    console.log(res)
                }
            })

        if(windowWidth < 768){
            changePhrase()
        }else {
            listProducts()
        }
    }


    const increment = () => {
        if(amount < maxValue){
            setAmount((prevAmount) => prevAmount + 1);
        }
    };

    const decrement = () => {

        if(amount > minValue){
            setAmount((prevAmount) => prevAmount - 1);
        }
    };


    return (
        <section className="box">
            <Header/>
            <section className={changeLayout}>
                <main className="box-data-information">
                    <section>
                        <ul className="box-header-list">
                            <li>Coffee</li>
                            <li>Food</li>
                            <li>Snack</li>
                            <li>Dessert</li>
                        </ul>
                    </section>
                    <section className="box-data">
                        <section className="box-information">
                            <section className="box-product-image">
                                <div className="box-data-image">
                                    <img className="image" src={coffee} alt="coffee"/>
                                </div>
                                <div className="box-amount">
                                    <button onClick={decrement} disabled={amount === minValue}>-</button>
                                    <span>{amount}</span>
                                    <button onClick={increment}  disabled={amount === maxValue}>+</button>
                                </div>
                            </section>
                            <section className="box-data-details">
                                <div className="box-values">
                                    <h4>Cappuccino</h4>
                                    <span>$ 4.98</span>
                                </div>

                                <p className="box-data-text">The combination of coffee, milk, and palm sugar makes this drink have a delicious</p>
                                <div className="box-data-sizes">
                                    <span>Size</span>
                                    <button className="box-sizes-button">Small</button>
                                    <button className="box-sizes-button">Large</button>
                                </div>
                                <button className={changeStyle} onClick={handleSubmit}>{changeText}</button>
                            </section>
                        </section>
                    </section>
                </main>

                {list && (
                    <section className="footer-desktop">
                        <List/>
                    </section>
                )}
            </section>

            {overviewPackage && (
                <footer className="box-footer">
                    <div className="box-footer-package">
                        <Link to="/package" className="box-footer-button">
                            <span>Icon</span>
                            <span>Ver Sacola</span>
                            <span>R$ 12,30</span>
                        </Link>
                    </div>
                </footer>
            )}
        </section>
    )
}

export default Menu;