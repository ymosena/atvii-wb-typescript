import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
  tema: string;
  seletorView: Function;
};

const ListaServicosGenero = ({ tema, seletorView }: Props) => {
  return (
    <div className="container">
      <h4>Lista Serviços</h4>
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3">
              <a onClick={(e) => seletorView('SMaisConsumidoG', e)}>Mais Consumidos Geral</a>
            </li>
            <li className="tab col s3">
              <a onClick={(e) => seletorView('SMaisConsumidoGe', e)}>Mais Consumidos Gênero</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-panel red lighten-5">
        <ul className="collection">
          <li className="collection-header">
            <h5>Feminino</h5>
          </li>
          <li className="collection-item feminino">Escova - R$70,00</li>
          <li className="collection-item feminino">Manicure - R$25,00</li>
          <li className="collection-item feminino">Pedicure - R$25,00</li>
          <li className="collection-header">
            <h5>Masculino</h5>
          </li>
          <li className="collection-item masculino">Corte de cabelo - R$100,00</li>
        </ul>
        <a
          onClick={(e) => seletorView('FormularioServico', e)}
          className="btn-floating btn-large right waves-effect waves-light red lighten-1"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export default ListaServicosGenero;
