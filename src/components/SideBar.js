import React from 'react';
import logo from '../assets/images/Logo.svg';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';
import UserDetail from './UserDetail'
// import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import ProductDetail from './ProductDetail';
import ProductsTable from './ProductsTable';
import LastUserInDb from './LastUserInDb';

import {Link, Route, Switch} from 'react-router-dom';
import LastProductsBuyed from './LastProductsBuyed';
import MostProductsSelled from './MostProductsSelled'

function SideBar(){
    return(
        <React.Fragment>
      
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

              
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logo} alt="Gamebox"/>
                    </div>
                </a>

              
                <hr className="sidebar-divider my-0"/>

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Gamebox</span></Link>
                </li>

     
                <hr className="sidebar-divider"/>

 
                <div className="sidebar-heading">Actions</div>

              
                
                <li className="nav-item">
                <Link className="nav-link" to="/productos/mas-vendidos">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos más vendidos</span>
                </Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/productos/ultimos-vendidos">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Ultimos productos vendidos</span>
                </Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/productos">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Listado productos</span>
                </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/categorias">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Categorías</span></Link>
                </li>
               
                <li className="nav-item">
                    <Link className="nav-link" to="/ultimoProducto">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto creado</span></Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/ultimoUsuario">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último usuario creado</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/categorias">
                    <CategoriesInDb />
                </Route>
                <Route path="/ultimoProducto">
                    <LastProductInDb />
                </Route>
                <Route path="/ultimoUsuario">
                    <LastUserInDb />
                </Route>
                <Route path="/usuarios/:id">
                    <UserDetail />
                </Route>
                <Route exact path="/productos">
                    <ProductsTable />
                </Route>
                <Route path="/productos/detalle/:id">
                    <ProductDetail />
                </Route>
                <Route path="/productos/ultimos-vendidos">
                    <LastProductsBuyed />
                </Route>
                <Route path="/productos/mas-vendidos">
                    <MostProductsSelled />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route path="/productos">
                    <ProductsTable />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;