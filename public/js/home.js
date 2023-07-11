const myModal = new bootstrap.Modal("#transactionModal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

 let data = {
    transaction: []
 };

document.getElementById("button-logout").addEventListener("click, logout");

//ADICIONAR LANÇAMENTO  
document.getElementById("transaction-form").addEventListener("submit", function(e) {
  e.preventDefault

  const value = parseFloat(document.getElementById("vakue-input").value);
  const description = documen.getElementById("description-input").value
  const date = document.getElementById("date-input").value
  const type = document.querySelector('input(name="type-input"):checked').value

  data.transactions.unshift({
    value: value, type: type, description: description, date: date
   }),

   saveData(data)
   event.target.reset();
myModal.hide();

   alert("Lançamento adicionado com sucesso");


});

checklogged();

function checkedlogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(!logged) {
        window.location.href.html = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser) {
       data = JSON.parse(dataUser);
    }

    getcashin();
}

function logout() {
    sessionStorage.removerItem("logged");
    localStorage.removeItem("session");



    window.location.href ="index.html";    
}

function getcashin() {
    const transactions = data.transactions;

   const cashin = transactions.filter(item => item.type =="1");
   
   if(cashin.length) {
    let cashinhtml =``;
    let limit = 0;

    if(cashin.lengh >5) {
        limit = 5;
       } else {
        limite = cashin.length;
       }

       for (let index = 0; index < limit; index++) {
           cashHtml +=`
                              <div class="row">
                                    <div class="col">
                                        R$ 1000.00
                                        <div class="container p-0">
                                          <div class="row">
                                            <div class="col-12 col-md-8">
                                              <p>Aqui vai a Descrição...</p>
                                            </div>
                                            <div class="col-12 col-md-3 d-flex justify-content-end"></div>
                                               12/12/2021
                                          </div>
                                        </div>
                                    </div>  

           `
        
       }

   }

   
   


}

function saveData(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}




