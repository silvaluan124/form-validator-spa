const Router = {
    navigate(route) {
        const app = document.getElementById("app");
        
        if (route === "home") {
            app.innerHTML = Templates.home();
        }

        if (route === "form") {
            app.innerHTML = Templates.form();
            const form = document.getElementById("formCadastro");
            form.addEventListener("submit", (e) => {
                e.preventDefault();
        
                if (Validator.validateForm()) {
                    alert("Formulário enviado com sucesso!");
                }
            });
        }
    }
};