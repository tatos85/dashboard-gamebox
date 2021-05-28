import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function UserDetail(props){
    let { id } = useParams();
    console.log(props)
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios({
            url: 'http://localhost:3030/api/users/'+id,
            method: 'GET'
          }).then((result) => {
          
            console.log("result.data")  
            console.log(result.data)  
            setUser(result.data)
            setIsLoaded(true); 

          }
                
          
            ).catch((error) => {
                console.log(error);
                setIsLoaded(true);   
                setError(error);
            } )

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded ) {
            return <div>Loading...</div>;
   
        } else if( user != null ){
            console.log("User");
            console.log(user);

            if(user.shoppingCarUser !== null)
            {
                return (
                    <React.Fragment>
        
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800">{user.firstName} {user.lastName}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={user.avatar} />
                                    </div>
                                    <p>Email: {user.email}</p>
                                    
                                        <div>
                                            <h5 className="m-0 font-weight-bold text-gray-800">Carrito de compras</h5>
                                            <p>Items: {user.shoppingCarUser.itemsQuantity}</p>
                                            <p>Total: {user.shoppingCarUser.totalPrice}</p>
                                            <p>Fecha: {user.shoppingCarUser.date}</p>
                                            <p>Estado: {user.shoppingCarUser.statusShoppingCart.status}</p>
        
                                        </div>
    
                                </div>
                            </div>
                        </div>
                
                    </React.Fragment>
        
                );

            }else{

                return (
                    <React.Fragment>
        
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800">{user.firstName} {user.lastName}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={user.avatar} />
                                    </div>
                                    <p>Email: {user.email}</p>
                                    
                                </div>
                            </div>
                        </div>
                
                    </React.Fragment>
        
                );
            }


        }



}

export default UserDetail;
