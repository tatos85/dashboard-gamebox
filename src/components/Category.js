import React from 'react';
import ChildCategories  from './ChildCategories';

function Category(props){
    // console.log("props ");
    // console.log(props);
 
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.name} - {props.products} productos   
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Category;