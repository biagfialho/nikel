const myModal = new bootstrap.Modal("#transactions-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []

};

document.getElementById("button-logout").addEventListener("click", logout);

//ADICIONAR LANÇAMENTO
document.getElementById("transactions-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value).value;
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        value: value, type: type, description: description, date: date
    });

    saveData(data);
    event.target.reset();
    myModal.hide();

    alert("Lançamento adicionado com sucesso!");

});

checkLogged();

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(!logged) {
        window.location.href = "index.html";
        return;
    }

    const datauser = localStorage.getItem(logged);  
    if(datauser) {
        data = JSON.parse(datauser);

    }

    getCashIn();

}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    
    window.location.href = "index.html";
}

function getCashIn() {
    const transactions = data.transactions;

    const CashIn = transactions.filter((item) => item.type === "1");

    console.log(CashIn);
}


function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}


