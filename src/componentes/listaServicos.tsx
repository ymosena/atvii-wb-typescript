import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ListaServicos extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="container">
                <h4>Lista Serviços</h4>
                <div className="row">
                    <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3"><a onClick={(e) => this.props.seletorView('SMaisConsumidoG', e)}>Mais Consumidos Geral</a></li>
                        <li className="tab col s3"><a onClick={(e) => this.props.seletorView('SMaisConsumidoGe', e)}>Mais Consumidos Gênero</a></li>
                    </ul>
                    </div>
                </div>
                <div className="card-panel red lighten-5">
                <table className="white">
                    <thead>
                    <tr>
                        <th>Serviço</th>
                        <th>Valor</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Corte de cabelo</td>
                        <td>R$100,00</td>
                    </tr>
                    <tr>
                        <td>Escova</td>
                        <td>R$70,00</td>
                    </tr>
                    <tr>
                        <td>Manicure</td>
                        <td>R$25,00</td>
                    </tr>
                    <tr>
                        <td>Pedicure</td>
                        <td>R$25,00</td>
                    </tr>
                    </tbody>
                </table>
                <a onClick={(e) => this.props.seletorView('FormularioServico', e)} className="btn-floating btn-large right waves-effect waves-light red lighten-1 "><i className="material-icons">add</i></a> 
                </div>
            </div>
        )
    }
}