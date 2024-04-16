let form = document.querySelector("form")

function saveData() {
    localStorage.setItem("data", JSON.stringify(data))
}

function loadData() {
    let savedData = JSON.parse(localStorage.getItem("data"))
    if (savedData) {
        data = savedData
    }
}


let data = []
function handleForm(e) {
    e.preventDefault()
    let inputValue = e.target
    let name = inputValue[0].value
    let password = inputValue[1].value
    let role = inputValue[2].value

    let obj = {
        name: name,
        password: password,
        role: role
    }
    data.push(obj)
    saveData()
    alert("Resigtration succesfull")
    window.location.href = "../login/login.html"
}



form.addEventListener("submit", function (event) {
    handleForm(event)
})

loadData()