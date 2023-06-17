import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
  tema: string;
  seletorView: Function;
};

const ListaProduto = ({ tema, seletorView }: Props) => {
  let estilo = `collection-item active ${tema}`;

  return (
    <div className="container">
      <h4>Lista Produtos</h4>
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3">
              <a onClick={(e) => seletorView('PMaisConsumidoG', e)}>Mais Consumidos Geral</a>
            </li>
            <li className="tab col s3">
              <a onClick={(e) => seletorView('PMaisConsumidoGe', e)}>Mais Consumidos Gênero</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-panel red lighten-5">
        <ul className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle red lighten-1">color_lens</i>
            <span className="title">Sombra</span>
            <p>R$60,00</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle red lighten-1">spa</i>
            <span className="title">Creme</span>
            <p>R$50,00</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle red lighten-1">brush</i>
            <span className="title">Batom</span>
            <p>R$30,00</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle red lighten-1">invert_colors</i>
            <span className="title">Shampoo</span>
            <p>R$30,00</p>
          </li>
        </ul>
        <a
          onClick={(e) => seletorView('FormularioProduto', e)}
          className="btn-floating btn-large right waves-effect waves-light red lighten-1"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export default ListaProduto;
