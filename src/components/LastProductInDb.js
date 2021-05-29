
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function LastProductInDb(){

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios({
            url: 'http://localhost:3030/api/products',
            method: 'GET'
          }).then((result) => {
          
            console.log("result.data")  
            console.log(result.data)  
            setProduct(result.data.productos[0])
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
   
        } else if( product != null ){
            console.log("Product");
            console.log(product);

        return (
            <React.Fragment>

                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={product.img1} alt={product.name}  />
                            </div>
                            <p>Nombre: {product.name}</p>
                            <p>Descripción: {product.description}</p>
                            <Link className="btn btn-danger" target="_blank" rel="nofollow" to={"productos/"+product.id} > Ver detalle</Link>
                        </div>
                    </div>
                </div>
        
            </React.Fragment>

        );
        }



}

export default LastProductInDb;
