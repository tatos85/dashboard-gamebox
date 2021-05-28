import React from 'react';

function ShoppingCart(props){
    // console.log("props ");
    // console.log(props);
 
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                    <p>Items: {props.itemsQuantity}</p>
                    <p>Total: $ {new Intl.NumberFormat("es-CO").format(props.totalPrice) }</p>
                    <p>Fecha: {new Date(props.date).toLocaleDateString()}</p>
                    <p>Estado: {props.statusShoppingCart.status}</p>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ShoppingCart;