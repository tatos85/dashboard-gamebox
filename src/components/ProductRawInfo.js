import React from 'react';

function ProductRawInfo(props){
    console.log("props ");
    console.log(props);
    function createMarkup() {
        return {__html: props.rawInfo.synopsis};
      }
    return(
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12 mb-4">
                    <div className="card text-white bg-dark  shadow">
                        <div className="card-body">
                        <div dangerouslySetInnerHTML={createMarkup()} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="card text-white bg-dark  shadow">
                        <div className="card-body">
                         <ul>
                            <li> Fecha de lanzamiento:  { new Date(props.rawInfo.launchDate).toLocaleDateString()}</li>
                            <li> Metacritic:  {props.rawInfo.metacritic}</li>
                            <li> Metacritic Url:  {props.rawInfo.metacriticUrl}</li>
                            <li> Rating:  {props.rawInfo.rating}</li>
                            <li> Edad:  {props.rawInfo.recommendedAge}</li>
                         </ul>   
 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="card text-white bg-dark  shadow">
                        <div className="card-body">
                        <ul>
                            <li> Desarrollador:  {props.rawInfo.developer}</li>
                            <li> Metacritic:  {props.rawInfo.genres}</li>
                            <li> Platformas:  {props.rawInfo.platforms}</li>
                         </ul>   
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="card text-white bg-dark  shadow">
                        <div className="card-body">
                         <p> Tags:  {props.rawInfo.tags}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductRawInfo;