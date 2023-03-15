import Header from '../../ui/components/Header/Header.js';
// import "../../ui/styles/Cadastro.css";

function Cadastro() {
	return (
		<div>
			<div>
				<Header></Header>
			</div>
			<div className="container">
                <div className="cadastro">
                    <h1>Cadastro de Cliente </h1>
                </div>
				<div className="caixa"></div>
				<div className="card-login">
					<div id="login">
						<form className="form">
							<div className="field" style={{ color: "black" }}>
								<label htmlFor="usuario">Nome</label>
								<input type="usuario" name="usuario" id="usuario" />
							</div>
							<div className="field" style={{ color: "black" }}>
								<label htmlFor="password">Telefone</label>
								<input type="telefone" name="telefone" id="password" />
							</div>

							<div className="actions">
								<button type="submit" id="button">
									Salvar
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="caixa"></div>
			</div>
		</div>
	);
}

export default Cadastro;
