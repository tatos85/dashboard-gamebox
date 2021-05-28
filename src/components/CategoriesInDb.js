import React, { useState, useEffect} from 'react';
import Category  from './Category';
import axios from 'axios';
import _ from "lodash";


function CategoriesInDb(){
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
        axios({
            url: 'http://localhost:3030/api/categories',
            method: 'GET'
          }).then((result) => {
          
           // console.log(result.data)  
            setCategories(result.data)
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
      } else if (!isLoaded ) {
        return <div>Loading...</div>;
    //   } else if(categories.length > 0  && childCategories.length > 0  && grouped.length > 0 ){
     } else if( categories.length > 0 ){
          console.log("Generos");
          console.log(categories);

        return (
            <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">Categorías base</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                categories.map((cat,index)=>{
                                        return  <Category  {...categories} name={cat.name}  products={cat.products}  key={index} />
                                      })
                            }
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>

        );
      }



}
export default CategoriesInDb;