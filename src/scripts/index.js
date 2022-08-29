import { ApiRequests } from "./request.js";
class Login {
    static renderLogin() {
        const token = localStorage.getItem("@kenzieBlog:token");
        if (token) {
            window.location.assign("src/pages/mainpage.html");
        }
        const emailInput = document.querySelector("#emailLogin");
        const passwordInput = document.querySelector("#senhaLogin");
        const loginButton = document.querySelector("#btnLogin");
        loginButton.addEventListener("click", async (e) => {
            e.preventDefault();
            const body = {
                email: emailInput.value,
                password: passwordInput.value
            };
            const response = await ApiRequests.login(body);
            if (response.error) {
                alert(response.error);
            }
        });
    }
}
class Register {
    static renderRegister() {
        const nomeInput = document.querySelector("#nomeCadastro");
        const emailInput = document.querySelector("#emailCadastro");
        const fotoInput = document.querySelector("#foto");
        const passwordInput = document.querySelector("#senhaCadastro");
        const registerButton = document.querySelector("#btnCadastro");
        registerButton.addEventListener("click", async (e) => {
            e.preventDefault();
            const body = {
                username: nomeInput.value,
                email: emailInput.value,
                avatarUrl: fotoInput.value,
                password: passwordInput.value
            };
            const response = await ApiRequests.register(body);
            if (response.error) {
                alert(response.error);
            }
        });
    }
}
Login.renderLogin();
Register.renderRegister();

        

