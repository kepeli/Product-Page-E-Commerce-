// set an item using key and value
// localStorage.setItem('prod1', "$125 x 4 $500")

import { useContext } from "react"
import StoreContext from "./StoreContext"

// import { useState } from "react"

// get an item using its key
localStorage.getItem('prod1')


export default function Cart() {
    // const [items, setItems] = useState([{number: count, total: 125 * count}])
    const store = useContext(StoreContext)

    console.log(store);

    return (
        <div>
            <div className="cartBox">

                <h4 style={{fontSize:"20px", paddingTop:"10px", paddingLeft:"20px", paddingButtom:"15px"}}>Cart</h4>
                <hr />
                
                {/* <hr /> */}

                {
                    <>
                        { store == ""?
                            <div className="emptyCart">Your cart is empty.</div>:
                        store.map(amount => {
                            return ( 
                            <div>
                                <div className="cartBorder">
                                    <div>
                                        <img src="../images/image-product-1-thumbnail.jpg" alt="" className="cartImage" />
                                    </div>
                                    <div>
                                        <hr className="cartDivider" />
                                        <p className="itemTitle">Fall Limited Edition Sneakers</p>
                                        <p className="itemCost">$125 x {amount} = <span className="totalPrize">${125 * amount}</span></p>
                                    </div>
                                </div>
                            </div> 
                            )})}

                        {/* <p>Fall Limited Edition Sneakers</p>
                    <p>$125 x {count} ${125 * count}</p> */}


                    </>
                }
            </div>
        </div>
    )
}