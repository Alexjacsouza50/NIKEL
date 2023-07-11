const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkedlogged();

//LOGAR NO SITEMA
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checksession = document.getElementById("session-checked").checked;

    const account = getAccount(email);
    
    if(!account) {
       alert("Opps! Verifique o usuário ou a senha.");
       return;
    }

      if(account) {
      if(account.password !== password) {
        alert("Opps! Verifique o usuário ou a senha.");
       return;
    }

    saveSession(email, checkSession);


    window.location.href = home.html;
   }
});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault;

   const email = document.getElementById("email-create-input").value;
   const password = document.getElementById("password-create-input").value;
   
   if(email.lengh<5) {
     alert("Preencha o campo com um email válido");
     return;
   }

   if(password.lengh<4) {
    alert("Preecha a senha com no mínimo 4 digítos");
   }


saveAccount({
    login:  email,
    password: password,
    transactions: []
});

   myModel.hide();

   alert("Conta criada com sucesso!");
});

function checkedlogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href.html = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
    if(saveSession) {
        localStorage.setItem("session, data");
    }

    sessionStorage.setItem("logged, data");
}

function getAccount(key) {
    const account = localStorage.getItem("key");

    if(account) {
        return JSON.parse(account);
    }

    return"";
}

