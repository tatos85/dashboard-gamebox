import React from 'react';
import {Link} from 'react-router-dom';

function ProductsRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>$ {new Intl.NumberFormat("es-CO").format(props.price) }</td>
                    <td>{props.categories.name}</td>
                    <td> <Link className="btn btn-danger" target="_blank" rel="nofollow" to={"/productos/detalle/"+props.id} > Ver detalle</Link></td>
                </tr>
            )
    }
    
        

export default ProductsRow;