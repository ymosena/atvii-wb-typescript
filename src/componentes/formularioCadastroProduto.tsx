import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="container">
                 <div className="input-field">
                <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="name">Nome do Produto</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="last_name" type="number" className="validate" />
                            <label htmlFor="value">Valor</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            </div>
        )
    }
    
}