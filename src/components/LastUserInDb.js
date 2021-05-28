import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';

function LastUserInDb(){

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios({
            url: 'http://localhost:3030/api/users',
            method: 'GET'
          }).then((result) => {
          
            console.log("result.data")  
            console.log(result.data)  
            setUser(result.data.users[0])
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



        return (
            <React.Fragment>

                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Último usuario creado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={user.avatar} />
                            </div>
                            <p>Nombre: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <Link className="btn btn-danger" target="_blank" rel="nofollow" to={"usuarios/"+user.id} > Ver detalle</Link>
                            {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle</a> */}
                        </div>
                    </div>
                </div>
        
            </React.Fragment>

        );
        }



}

export default LastUserInDb;
