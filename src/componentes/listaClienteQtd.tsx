import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type Props = {
  tema: string;
  seletorView: Function;
};

export default class ListaClienteQtd extends Component<Props> {
  render() {
    const { tema, seletorView } = this.props;

    return (
      <div className="container">
        <a onClick={(e) => this.props.seletorView('FormularioCliente', e)} className="btn-floating btn-large right waves-effect waves-light red lighten-1 "><i className="material-icons">add</i></a> 
                <h4>Lista Clientes</h4>
                <div className="row">
                    <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3"><a onClick={(e) => this.props.seletorView('MaiorConsumoQtd', e)}>Maior Consumo Qtd</a></li>
                        <li className="tab col s3"><a onClick={(e) => this.props.seletorView('MaiorConsumoValor', e)}>Maior Consumo Valor</a></li>
                        <li className="tab col s3"><a onClick={(e) => this.props.seletorView('MaiorConsumoGenero', e)}>Maior Consumo Gênero</a></li>
                        <li className="tab col s3"><a onClick={(e) => this.props.seletorView('MenorConsumo', e)}>Menor Consumo</a></li>
                    </ul>
                    </div>
                </div>
        <div className="card-panel red lighten-5">
          <ul className="collection">
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">Yasmin Mosena</span>
              <p>CPF: 626.220.090-89 </p>
            </li>
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">João Souza</span>
              <p>CPF: 894.427.150-03 </p>
            </li>
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">Maria Silva</span>
              <p>CPF: 446.094.890-74 </p>
            </li>
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">Gabriel Gonçalves</span>
              <p>CPF: 875.015.290-43 </p>
            </li>
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">Ana Faria</span>
              <p>CPF: 304.255.180-60 </p>
            </li>
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">Laura Lima</span>
              <p>CPF: 747.993.860-85 </p>
            </li>
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">Flavia Santos</span>
              <p>CPF: 747.993.860-85 </p>
            </li>
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">Henrique Tomas</span>
              <p>CPF: 747.993.860-85 </p>
            </li>
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">Beatriz Fonseca</span>
              <p>CPF: 747.993.860-85 </p>
            </li>
            <li className="collection-item avatar ">
              <i className="material-icons circle  red lighten-1">person</i>
              <span className="title">Miguel Soares</span>
              <p>CPF: 747.993.860-85 </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
