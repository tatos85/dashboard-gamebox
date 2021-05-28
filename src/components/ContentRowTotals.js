
import SmallCard from './SmallCard';
import React, { useState, useEffect} from 'react';
import Category  from './Category';
import axios from 'axios';
import _ from "lodash";







function ContentRowTotals(){
   
    const [totals, setTotals] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

   
    let catHijas = 0;

    useEffect(() => {
        axios({
            url: 'http://localhost:3030/api/totals',
            method: 'GET'
          }).then((result) => {
          
            setTotals(result.data)
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
     } else if(totals != null ){
        
        console.log("totals");

        console.log(totals);

        let productsInDB = {
            title: 'Productos',
            color: 'primary', 
            cuantity: totals.products,
            icon: 'fa-dollar-sign'
        }
        
        
        let totalUsers = {
            title:'Usuarios', 
            color:'success', 
            cuantity: totals.users,
            icon:'fa-users'
        }
        
        
        let baseCategories = {
            title:'Categorias Base' ,
            color:'warning',
            cuantity:totals.baseCategories,
            icon:'fa-cubes'
        }
        
        let childCategories = {
            title:'Categorias Hijas' ,
            color:'warning',
            cuantity:totals.childCategories,
            icon:'fa-cubes'
        }
        

        let cartProps = [productsInDB, totalUsers, baseCategories, childCategories];


        return (
            <React.Fragment>
        
            <div className="row">
            
                {cartProps.map( (panel, i) => {

                    return <SmallCard {...panel} key={i}/>
                
                })}

              </div>
            </React.Fragment>

        );
      }

    
 
}

export default ContentRowTotals;