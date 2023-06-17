import React from 'react';

type Props = {
  tema: string;
};

const FormularioCadastroCliente: React.FC<Props> = ({ tema }) => {
  let estiloBotao = `btn waves-effect waves-light ${tema}`;

  return (
    <div className="container">
      <div className="input-field">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">Nome</label>
              </div>
              <div className="input-field col s12">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Sobrenome</label>
              </div>
              <div className="input-field col s12">
                <input id="genero" type="text" className="validate" />
                <label htmlFor="genero">Gênero</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="telefone" type="text" className="validate" />
                <label htmlFor="telefone">Telefone</label>
              </div>
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">E-mail</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button className={estiloBotao} type="submit" name="action">
                  Cadastrar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioCadastroCliente;
