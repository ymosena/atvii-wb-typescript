import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProdutos";
import ListaServicos from "./listaServicos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    // document.addEventListener('', function() {
    //     var elems = document.querySelectorAll('select');
    //     var instances = M.FormSelect.init(elems, options);
    //   });

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="red lighten-2" botoes={['Clientes', 'Produtos', 'Serviços']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="teal darken-3" />
                </>
            )
        } 
        else if (this.state.tela === 'Produtos'){
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="teal darken-3" />
                </>
            )
        }
        else {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="teal darken-3" />
                </>
            )
        }

    }
}