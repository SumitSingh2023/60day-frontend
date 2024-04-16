let form = document.querySelector("form")

let data;
function loadData() {
    let savedData = JSON.parse(localStorage.getItem("data"))
    if (savedData) {
        data = savedData
    }

}


function handleSubmit(event) {
    event.preventDefault()
    let target = event.target
    let name = target[0].value
    let password = target[1].value

    let narr = data.filter((ele, i) => {

        return (ele.name === name) && (ele.password === password)
    })
    
    console.log(narr)
    let finder=narr.filter((ele,i)=>{
        return (narr[i].role=="HR")
    })
     console.log(finder)
    if(finder =="HR"){
        alert("login sucessfully on Hr page")
        window.location.href="../index.html"
    }else{
        alert("login sucessfully on User page")
        window.location.href="../index.html"
        
    }
    // if(narr.length>0 && narr[0].role=="HR"){
    //     alert("login sucessfully")
    //     // window.location.href="../index.html"
    // }else if(name){

    // }
}

form.addEventListener("submit", function (event) {
    handleSubmit(event)
})
loadData()