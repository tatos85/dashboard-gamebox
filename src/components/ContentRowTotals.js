import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsInDB = {
    title: 'Productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-dollar-sign'
}

/* <!-- Total awards --> */

let totalUsers = {
    title:'Usuarios', 
    color:'success', 
    cuantity: '79',
    icon:'fa-users'
}

/* <!-- Actors quantity --> */

let categories = {
    title:'Categorias' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-cubes'
}

let cartProps = [productsInDB, totalUsers, categories];

function ContentRowTotals(){
    return (
    
        <div className="row">
            
            {cartProps.map( (panel, i) => {

                return <SmallCard {...panel} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowTotals;