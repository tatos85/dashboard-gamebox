import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function MostProductsSelled(){

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


	useEffect(() => {
		const fetchProducts = async() => {
		  setIsLoaded(false);
		  const res = await axios.get('http://localhost:3030/api/shopping-cart/productsQuantity?status=3&limit=8');
		  setProducts(res.data);
		  setIsLoaded(true);
		};

		fetchProducts();
	  
	  }, [])

	if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded && products.length ===0) {
        return <div>Loading...</div>;
      } else {
        return (
			<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h2>Productos más vendidos!</h2>
						</div>
					
						{
						  	products.length > 0 && products.map((product, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={product.img1}
														alt={product.name} 
														style={{ width: '90%', height: '200px', objectFit: 'cover' }} 
													/>
												</div>
												<p>Cantidad vendida:  {product.total} </p>
												<p>Precio: $ {product.price} </p>
												<p>{product.parentCategory} - {product.category} </p>
												<Link className="btn btn-danger" target="_blank" rel="nofollow" to={"/productos/detalle/"+product.id} > Ver detalle</Link>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{  products.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
			
			
		</div>
        );
      }



}

export default MostProductsSelled;
