
import React from 'react';

const Menu = () => {
    return(
        <div className="container">
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ArqueiroVerde</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="bi bi-justify text-white"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Produtos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/entrada">Entrada</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/saida">Saida</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
        
  };

export default Menu;