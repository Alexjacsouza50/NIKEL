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
     alert("Lançamento adicionado com sucesso");
  
  
  });

  function logout() {
    const transaction = data.transactions;
    const transactionsHtml= ``;

    if(transactions.lenght) {
        transactions.forEach((item) => {

            let type ="entrada";

            if(item.type =="2") {
                type = "Saída"
            }
        })
    }
  }