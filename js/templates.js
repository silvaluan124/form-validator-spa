const Templates = {
    home: () => `
        <div class="card">
            <h2>Bem-vindo ao nosso sistema!</h2>
            <p>Por favor confirme sua identidade ou faça cadastro na página de formulário.</p>
        </div>
    `,

    form: () => `
        <div class="container-centralizador">
            <div class="cardFormulario">
                <h2 class="cadastro">Formulário de Cadastro</h2>
                <form id="formCadastro">
                    <div class="nome">
                        <label>Nome:</label>
                        <input type="text" id="nome"><br>
                        <span id="erroNome" class="error"></span>
                    </div>

                    <br><br>
                    <div class="email">
                        <label>Email:</label>
                        <input type="email" id="email"><br>
                        <span id="erroEmail" class="error"></span>
                    </div>
                    <br><br>
                    <button type="submit" class="enviar">Enviar</button>
                </form>
            </div>
        </div>
    `
};

