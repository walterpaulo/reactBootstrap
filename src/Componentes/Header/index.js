import React, { useState } from 'react';
import { ListaProdutos } from '../../data/ListaProdutos';

const Reader = () => {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState({});
    const [produtos, setProdutos] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess({});
        const errors = { };

        if (nome.trim() === '') {
            errors.nome = 'O campo Nome é obrigatório.';
        }

        if (quantidade.trim() === '') {
            errors.quantidade = 'O campo Quantidade é obrigatório.';
        }

        if (valor.trim() === '') {
            errors.valor = 'O campo Valor é obrigatório.';
        }


        if (Object.keys(errors).length === 0) {
            setSuccess({ 'message': 'Produto cadastrado.' });
            limparCamposFormulorioProduto();
        } else {
            setErrors(errors);
        }
    };

    const limparCamposFormulorioProduto = () => {
        setErrors({});
        setNome('');
        setQuantidade('');
        setValor('');
        setSuccess({})
    }

    return (
        <div className="container mt-5">
            <div className="container-fluid px-4">
                <h1 className="mt-4 mt-2">Estoque</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Controle</li>
                </ol>
            </div>
            <div className="card mb-4">
                <div className="card-header">
                    <svg
                        className="svg-inline--fa fa-table fa-w-16 me-1"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="table"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                    >
                        <path
                            fill="currentColor"
                            d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"
                        ></path>
                    </svg>
                    Produtos
                </div>
                <div className="card-body justify-content-center">
                    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                        <div className="dataTable-top">
                            <div className="dataTable-search">
                                <input
                                    className="dataTable-input"
                                    placeholder="Search..."
                                    type="text"
                                ></input>
                            </div>
                            <div className="dataTable-search">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#produtoModal"
                                    onClick={() => {
                                        limparCamposFormulorioProduto();
                                        setSuccess({});
                                    }}
                                >
                                    Adicionar
                                </button>
                            </div>
                        </div>
                        <div className="dataTable-container">
                            <table id="datatablesSimple" className="dataTable-table">
                                <thead>
                                    <tr>
                                        <th data-sortable="" style={{ width: "19.75%" }}>
                                            <a href="#" className="dataTable-sorter">
                                                Id
                                            </a>
                                        </th>
                                        <th data-sortable="" style={{ width: "29.25%" }}>
                                            <a href="#" className="dataTable-sorter">
                                                Nome
                                            </a>
                                        </th>
                                        <th data-sortable="" style={{ width: "15.3333%" }}>
                                            <a href="#" className="dataTable-sorter">
                                                Qtd
                                            </a>
                                        </th>
                                        <th data-sortable="" style={{ width: "9%" }}>
                                            <a href="#" className="dataTable-sorter">
                                                Valor
                                            </a>
                                        </th>
                                        <th data-sortable="" style={{ width: "9%" }}>
                                            <a href="#" className="dataTable-sorter">
                                                Total
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ListaProdutos.map((produto, i) => (

                                        <tr key={produto.id}>
                                            <td>{produto.id}</td>
                                            <td>{produto.nome}</td>
                                            <td>{produto.quantidade}</td>
                                            <td>R$ {produto.valor}</td>
                                            <td>R$ {produto.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="produtoModal"
                tabIndex="-1"
                aria-labelledby="produtoModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="produtoModalLabel">
                                Novo Produto
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" id="nome" className="form-control" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                                        {errors.nome && <span className="error">{errors.nome}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="quantidade">Quantidade</label>
                                        <input type="number" id="quantidade" name="quantidade" className="form-control" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                                        {errors.quantidade && <span className="error">{errors.quantidade}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="valor">Valor</label>
                                        <input type="number" id="valor" name="valor" className="form-control" value={valor} onChange={(e) => setValor(e.target.value)} />
                                        {errors.valor && <span className="error">{errors.valor}</span>}
                                    </div>
                                    {success.message && <div className="alert alert-success mt-3" role="alert">
                                        {success.message}
                                    </div>}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary" >
                                    Salvar
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reader;
