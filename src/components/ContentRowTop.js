import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowTotals from './ContentRowTotals';
import ProductsTable from './ProductsTable';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Gamebox Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowTotals />
					<ProductsTable />
					<ContentRowCenter />

	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

	
}
export default ContentRowTop;