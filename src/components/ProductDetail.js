import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ProductRawInfo  from './ProductRawInfo';
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";

function ProductDetail(props){
    let { id } = useParams();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchProduct = async() => {
          setIsLoaded(false);
          const res = await axios.get('http://localhost:3030/api/products/'+id);
          setProduct(res.data);
          setIsLoaded(true);
        };
  

        fetchProduct();
      
      }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded ) {
            return <div>Loading...</div>;
   
        } else if( product != null ){
            console.log("product");
            console.log(product);



            if(product.rawInfoObj !== null) 
            {
                return (
                    <React.Fragment>
        
                        <div className="col-lg-10 mb-4">
                        <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                                </div>
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-dark  shadow">
                                            <div className="card-body">

                                         <h5 className="m-0 font-weight-bold text-gray-800">Imagen 1</h5>
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={product.img1} />
                                   
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-dark  shadow">
                                            <div className="card-body">

                                            <h5 className="m-0 font-weight-bold text-gray-800">Imagen 2</h5>
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={product.img2} />
                                   
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                  
                                  <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-dark  shadow">
                                            <div className="card-body">

                                            <p> Descripcion:  {product.description}</p>
                                            <p> Categoria: {product.categories.parentCategory.name} - {product.categories.name}</p>
                                            <p> Precio: $ {new Intl.NumberFormat("es-CO").format(product.price) }</p>
                                   
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <div className="card text-white bg-dark  shadow">
                                            <div className="card-body">

                                            
                                            <p> Stock:  {product.stock}</p>
                                            <p> Es nuevo:  {product.isNew}</p>
                                            <p> Edicion:  {product.edition}</p>
                                        
                                            </div>
                                        </div>
                                    </div>
                                  </div>

                


                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-gray-800">Info api raw</h6>
                                        </div>
                                        <div className="card-body">
                                            
                                               <ProductRawInfo rawInfo={product.rawInfoObj}   />

                                            
                                        </div>
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
                                    <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                         <h5 className="m-0 font-weight-bold text-gray-800">Imagen 1</h5>
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={product.img1} />
                                    </div>
                                    <p> {product.description}</p>
                                    <p> {product.categories.parentCategory.name} - {product.categories.name}</p>
                                    <p> Precio: $ {new Intl.NumberFormat("es-CO").format(product.price) }</p>
                                    <p> Stock:  {product.stock}</p>
                                    <p> Es nuevo:  {product.isNew}</p>
                                    <p> Edicion:  {product.edition}</p>
                                </div>
                            </div>
                        </div>
                
                    </React.Fragment>
        
                );
            }


        }



}

export default ProductDetail;
