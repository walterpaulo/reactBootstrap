import React, { Component } from 'react';

class Reader extends Component {
  render() {
    return(
    <main>
        <div className="container-fluid px-4">
            <h1 className="mt-4">Controler</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Controle</li>
            </ol>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                  <svg className="svg-inline--fa fa-table fa-w-16 me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"></path></svg>
                  Produtos
              </div>
              <div className="card-body d-flex justify-content-center">
                  <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                      <div className="dataTable-top">
                        <div className="dataTable-search">
                            <input className="dataTable-input" placeholder="Search..." type="text"></input>
                                <div className="dataTable-container">
                                    <table id="datatablesSimple" className="dataTable-table">
                                        <thead>
                                            <tr>
                                                <th data-sortable="" style={{width: '19.75%'}}><a href="#" className="dataTable-sorter">Id</a></th>
                                                <th data-sortable="" style={{width: '29.25%'}}><a href="#" className="dataTable-sorter">Nome</a></th>
                                                <th data-sortable="" style={{width: '15.3333%'}}><a href="#" className="dataTable-sorter">Qtd</a></th>
                                                <th data-sortable="" style={{width: '9%'}}><a href="#" className="dataTable-sorter">Valor</a></th>
                                                <th data-sortable="" style={{width: '9%'}}><a href="#" className="dataTable-sorter">Total</a></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Teclado</td>
                                                <td>10</td>
                                                <td>R$ 30,00</td>
                                                <td>R$ 300,00</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Mouse</td>
                                                <td>10</td>
                                                <td>R$ 15,00</td>
                                                <td>R$ 150,00</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Lápis</td>
                                                <td>100</td>
                                                <td>R$ 1,00</td>
                                                <td>R$ 100,00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    )
    
  }
}

export default Reader;

