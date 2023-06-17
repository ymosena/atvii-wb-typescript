import { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type Props = {
  tema: string;
  botoes: string[];
  seletorView: (novaTela: string, evento: React.MouseEvent) => void;
};

const BarraNavegacao: React.FC<Props> = ({ tema, botoes, seletorView }) => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      let elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }, []);

  const gerarListaBotoes = () => {
    if (botoes.length <= 0) {
      return null;
    } else {
      return botoes.map((valor) => (
        <li key={valor}>
          <a onClick={(e) => seletorView(valor, e)}>{valor}</a>
        </li>
      ));
    }
  };

  let estilo = `${tema}`;

  return (
    <>
      <nav className={estilo}>
        <div className="nav-wrapper">
          <a className="brand-logo">
            WB<i className="material-icons">face</i>
          </a>
          <a data-target="mobile-menu" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {gerarListaBotoes()}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-menu">
        {gerarListaBotoes()}
      </ul>
    </>
  );
};

export default BarraNavegacao;
