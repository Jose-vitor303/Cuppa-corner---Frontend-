import React from "react";
import "./List.css"

const List = ()=>{

    return(
        <section className="content">
            <div className="content-personal">
                <h1>José Vitor</h1>
                <span>jvitorfacanha@Outlook.com</span>
            </div>
            <div className="content-information content-flex">
                <h2>Cart</h2>
                <span>Order #3243</span>
            </div>
            <div className="content-delivery content-flex">
                <button>Delivery</button>
                <button>Dine in</button>
                <button>Take away</button>
            </div>
            <div className="content-products content-flex content-products-column">
                <div className="vasco">
                    <img alt=""></img>
                    <h1>Test</h1>
                </div>

                <div className="content-description">
                    <div style={{marginBottom : "2rem"}}>
                        <h4>Cappuccino</h4>
                        <span>Small</span>
                    </div>
                    <div>
                        <span>$ 4.98</span>
                        <span>Amount</span>
                    </div>
                </div>
            </div>
            <div className="content-values">

                <div className="content-prices content-flex">
                    <p>Items</p>
                    <span>$20.92</span>
                </div>

                <div className="content-prices content-flex">
                    <p>Discounts</p>
                    <span>-$3.00</span>
                </div>

                <div className="content-prices content-flex">
                    <p>Total</p>
                    <span style={{color : "#FFA16C"}}>$17.92</span>
                </div>

                <button className="content-button">Place an order</button>
            </div>
        </section>
    )

}

export default List;
