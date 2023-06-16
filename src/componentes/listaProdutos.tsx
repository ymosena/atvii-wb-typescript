/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ListaProduto extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <div className="container">
                <h4>Lista Produtos</h4>
                <div className="card-panel red lighten-5">
                    <ul className="collection">
                        <li className="collection-item avatar ">
                        <i className="material-icons circle  red lighten-1">color_lens</i>
                        <span className="title">Sombra</span>
                        <p>R$60,00</p>
                        </li>

                        <li className="collection-item avatar">
                        <i className="material-icons circle  red lighten-1">spa</i>
                        <span className="title">Creme</span>
                        <p>R$50,00</p>
                        </li>

                        <li className="collection-item avatar">
                        <i className="material-icons circle  red lighten-1">brush</i>
                        <span className="title">Batom</span>
                        <p>R$30,00</p>

                        </li>
                        <li className="collection-item avatar">
                        <i className="material-icons circle  red lighten-1">invert_colors</i>
                        <span className="title">Shampoo</span>
                        <p>R$30,00</p>
                        
                        </li>
                    </ul>
                <a onClick={(e) => this.props.seletorView('FormularioProduto', e)} className="btn-floating btn-large right waves-effect waves-light red lighten-1 "><i className="material-icons">add</i></a> 
                </div>
            </div>
        )
    }
}