import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ProductsRow from './ProductsRow';
import ProductListPagination from './ProductListPagination';






function ProductsTable (){

    const [products, setProducts] = useState([]);
    const [totals, setTotals] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    useEffect(() => {
      const fetchProducts = async() => {
        setIsLoaded(false);
        const res = await axios.get('http://localhost:3030/api/products');
        setProducts(res.data.productos);
        setIsLoaded(true);
      };

      const fetchTotals = async() => {
        setIsLoaded(false);
        const res = await axios.get('http://localhost:3030/api/totals');
        setTotals(res.data);
        setIsLoaded(true);
      };
      fetchTotals();
      fetchProducts();
    
    }, [])


    useEffect(() => {
        const fetchProducts = async() => {
          setIsLoaded(false);
          const res = await axios.get('http://localhost:3030/api/products?page='+currentPage);
          setProducts(res.data.productos);
          setIsLoaded(true);
        };
  

        fetchProducts();
      
      }, [currentPage])

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                {/* <th>Descripción</th> */}
                                <th>Precio</th>
                                <th>Categoría</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                {/* <th>Descripción</th> */}
                                <th>Precio</th>
                                <th>Categoría</th>
                                <th>Detalle</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ProductsRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
                <ProductListPagination
                    postsPerPage={productsPerPage}
                    totalPosts={totals.products}
                    paginate={paginate}
                />
            </div>

        </div>

    )
}

export default ProductsTable;