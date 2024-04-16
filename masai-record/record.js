// fill in javascript code here

let form = document.querySelector("form")

let departSearch = document.getElementById("depart-search")
let departBtn = document.getElementById("depart-btn")

let name = document.getElementById("name")

let employeId = document.getElementById("employeeID")

let department = document.getElementById("department")

let experience = document.getElementById("exp")

let email = document.getElementById("email")

let mobile = document.getElementById("mbl")

let tbody = document.querySelector('tbody')

let data = []

function savedata() {
    localStorage.setItem("data", JSON.stringify(data))
}

function loadData() {
    let storeValue = JSON.parse(localStorage.getItem("data"))
    if (storeValue) {
        data = storeValue
    }
    showData(data)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (name.value == "" || employeId.value == "" || department.value == "" || experience.value == "" || email.value == "" || mobile.value == "") {
        alert("Enter all the input!")
    } else {

        let obj = {
            name: name.value,
            employeId: employeId.value,
            department: department.value,
            experience: experience.value,
            email: email.value,
            mobile: mobile.value,
        }
        data.push(obj)
        savedata()
        showData(data)
        emptyInput()

    }

})

function showData(arr) {
    tbody.innerHTML = ""
    arr.forEach(function (ele, i) {
        let tr = document.createElement('tr')

        // let td1=document.createElement("td")
        // td1.innerHTML=`${i+1}`

        let td2 = document.createElement("td")
        td2.innerHTML = ele.name

        let td3 = document.createElement("td")
        td3.innerHTML = ele.employeId

        let td4 = document.createElement("td")
        td4.innerHTML = ele.department

        let td5 = document.createElement("td")
        td5.innerHTML = ele.experience

        let td6 = document.createElement("td")
        td6.innerHTML = ele.email

        let td7 = document.createElement("td")
        td7.innerHTML = ele.mobile

        let role = document.createElement("td")
        role.innerText = ele.experience

        let td8 = document.createElement("td")
        let btn = document.createElement("button")
        btn.innerHTML = "Delete"

        btn.addEventListener("click", function () {
            handleDelete(i)
        })

        td8.append(btn)
        tr.append(td2, td3, td4, td5, td6, td7, role, td8)
        tbody.append(tr)

        if (role.innerText > 5) {
            role.innerText = "senior"
        } else if (role.innerText >= 2 && role.innerText <= 5) {
            role.innerText = "Junior"
        } else if (role.innerText <= 1 || role.innerText == 1) {
            role.innerText = "Fresher"
        }

    })
}

function handleDelete(index) {
    data.splice(index, 1)
    savedata()
    showData(data)

}

function searchData() {
    let value = departSearch.value.toLowerCase();
    let filteredData = data.filter((item) => {
        return item.department.toLowerCase().includes(value); // Check if the department includes the search value
    });
    
    if(filteredData.length==0){
        alert("No Details founds")
    }
    showData(filteredData);
}

departBtn.addEventListener("click", searchData)

loadData()
