import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProdutos";
import ListaServicos from "./listaServicos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaClienteMenorConsumo from "./listaClienteMenor";
import ListaClienteQtd from "./listaClienteQtd";
import ListaClienteValor from "./listaClienteValor";
import ListaClienteGenero from "./listaClienteGenero";
import ListaProdutoGeral from "./listaProdutosGeral";
import ListaProdutoGenero from "./listaProdutosGenero";
import ListaServicosGenero from "./listaServicosGenero";
import ListaServicosGeral from "./listaServicosGeral";

const Roteador = () => {
  const [tela, setTela] = useState('Clientes');

  const selecionarView = (novaTela: string, evento: React.MouseEvent) => {
    evento.preventDefault();
    console.log(novaTela);
    setTela(novaTela);
  };

  let barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="red lighten-2"
      botoes={['Clientes', 'Produtos', 'Serviços']}
    />
  );

  if (tela === 'Clientes') {
    return (
      <>
        {barraNavegacao}
        <ListaCliente tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else if (tela === 'Produtos') {
    return (
      <>
        {barraNavegacao}
        <ListaProduto tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else if (tela === 'FormularioCliente') {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroCliente tema="red lighten-2" />
      </>
    );
  } else if (tela === 'FormularioProduto') {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroProduto tema="red lighten-2" />
      </>
    );
  } else if (tela === 'FormularioServico') {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroServico tema="red lighten-2" />
      </>
    );
  } else if (tela === 'MaiorConsumoGenero') {
    return (
      <>
        {barraNavegacao}
        <ListaClienteGenero tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else if (tela === 'MaiorConsumoQtd') {
    return (
      <>
        {barraNavegacao}
        <ListaClienteQtd tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else if (tela === 'MaiorConsumoValor') {
    return (
      <>
        {barraNavegacao}
        <ListaClienteValor tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else if (tela === 'MenorConsumo') {
    return (
      <>
        {barraNavegacao}
        <ListaClienteMenorConsumo tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else if (tela === 'PMaisConsumidoG') {
    return (
      <>
        {barraNavegacao}
        <ListaProdutoGeral tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else if (tela === 'PMaisConsumidoGe') {
    return (
      <>
        {barraNavegacao}
        <ListaProdutoGenero tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else if (tela === 'SMaisConsumidoG') {
    return (
      <>
        {barraNavegacao}
        <ListaServicosGeral tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else if (tela === 'SMaisConsumidoGe') {
    return (
      <>
        {barraNavegacao}
        <ListaServicosGenero tema="red lighten-2" seletorView={selecionarView} />
      </>
    );
  } else {
    return (
      <>
        {barraNavegacao}
        <ListaServicos seletorView={selecionarView} tema="red lighten-2" />
      </>
    );
  }
};

export default Roteador;
