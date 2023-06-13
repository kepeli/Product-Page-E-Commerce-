import { BsCart2 } from "react-icons/bs";
import Cart from "./cart";
import { useState } from "react";
export default function Navbar({ addCart, orderCount }) {
    const [showCart, setShowCart] = useState(false)    

    // console.log(arr.length);

    // function itemCart() {


    // }
    function cartHandler() {
        setShowCart(!showCart)
    }


    return (
        <>
            <div className="externalBar">
                <div className="internalBar">
                    <div className="menuOptions">
                        <h3 className="options logoName">
                            KEPELI
                        </h3>
                        <p className="options">Collections</p>
                        <p className="options">Men</p>
                        <p className="options">Women</p>
                        <p className="options">About</p>
                        <p className="options">Contact</p>
                    </div>
                    <div className="rightMenuOptions">
                        <div className="cart">
                            <div className="cartOptions" onClick={cartHandler}>
                                <p><BsCart2 /></p>
                                {orderCount == 0 ? null : <p className="orderCount">{orderCount}</p>}
                            </div>
                            
                        </div>
                        <div className="clientImage">
                            <img className="profileImage" src="../images/image-avatar.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>




            {showCart && <Cart count={addCart} orderCount={orderCount} />}
        </>
    )
}