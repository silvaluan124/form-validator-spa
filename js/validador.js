const Validator = {
    validateForm() {
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const erroNome = document.getElementById("erroNome");
        const erroEmail = document.getElementById("erroEmail");

        let ok = true;

        if (nome.value.trim().length < 3) {
            erroNome.textContent = "O nome deve ter ao menos 3 caracteres";
            ok = false;
        } else {
            erroNome.textContent = "";
        }
        if (!email.value.includes("@") || !email.value.includes(".")) {
            erroEmail.textContent = "Email inválido";
            ok = false;
        } else {
            erroEmail.textContent = "";
        }
        
        return ok;
    }
};