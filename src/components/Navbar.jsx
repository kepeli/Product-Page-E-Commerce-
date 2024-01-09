// import { useState } from "react";
// import { BsCart2 } from "react-icons/bs";
// import Cart from "./Cart";



// export default function Navbar({ addCart, orderCount }) {
//     const [showCart, setShowCart] = useState(false)    

    
//     const cartHandler =() => {
//         setShowCart(!showCart)

       
//     }


//     return (
//         <div>
//             <div className="externalBar">
//                 <div className="internalBar">
//                     <div className="menuOptions">
//                         <h3 className="options logoName">
//                             KEPELI
//                         </h3>
//                         <p className="options">Collections</p>
//                         <p className="options">Men</p>
//                         <p className="options">Women</p>
//                         <p className="options">About</p>
//                         <p className="options">Contact</p>
//                     </div>
//                     <div className="rightMenuOptions">
//                         <div className="cart">
//                             <div className="cartOptions" onClick={cartHandler}>
//                                 <p><BsCart2 /></p>
//                                 {orderCount == 0 ? null : <p className="orderCount">{orderCount}</p>}
//                             </div>
                            
//                         </div>
//                         <div className="clientImage">
//                             <img className="profileImage" src="../images/image-avatar.png" alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>




//             {showCart && <Cart count={addCart} orderCount={orderCount} />}
//         </div>
//     )
// }

import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import Cart from "./Cart";

export default function Navbar({ addCart, orderCount }) {
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const cartHandler = () => {
    setShowCart(!showCart);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <div className="externalBar">
        <div className="internalBar">
          <div className="menuOptions">
            <h3 className="options logoName">KEPELI</h3>
            <p className="options ex">Collections</p>
            <p className="options ex">Men</p>
            <p className="options ex">Women</p>
            <p className="options ex">About</p>
            <p className="options ex">Contact</p>
          </div>
          <div className="rightMenuOptions">
            <div className="sidebarToggle" onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="cart">
              <div className="cartOptions" onClick={cartHandler}>
                <p>
                  <BsCart2 />
                </p>
                {orderCount === 0 ? null : (
                  <p className="orderCount">{orderCount}</p>
                )}
              </div>
            </div>
            <div className="clientImage">
              <img
                className="profileImage"
                src="../images/image-avatar.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {showSidebar && (
        <div className="sidebar">
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <div className="cartOptions" onClick={cartHandler}>
            <p>
              <BsCart2 />
            </p>
            {orderCount === 0 ? null : (
              <p className="orderCount">{orderCount}</p>
            )}
          </div>
        </div>
      )}

      {showCart && <Cart count={addCart} orderCount={orderCount} />}
    </div>
  );
}
