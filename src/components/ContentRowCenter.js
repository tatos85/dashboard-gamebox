import React from 'react';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />

            
            {/*<!-- Last User in DB -->*/}
            <LastUserInDb />


            {/*<!-- Genres in DB -->*/}
            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;