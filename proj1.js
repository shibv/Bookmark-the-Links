
let myleads = []
const input = document.getElementById("input-el")

const inputbtn = document.getElementById("input-btn")
let leadsfromlocal = JSON.parse(localStorage.getItem("myleads"))
const ilel = document.getElementById("ul-el")
const deleteall = document.getElementById("deleteall")
//delete
deleteall.addEventListener("dblclick", function () {
     localStorage.clear()
     myleads=[]
      render()

})
if (leadsfromlocal) {
     myleads = leadsfromlocal
     render()
}
// input
inputbtn.addEventListener("click", function () {

     myleads.push(input.value)
     input.value = ""
     localStorage.setItem("myleads", JSON.stringify(myleads))
         render()
})

//render function
function render() {
     let x = ""
     for (let i = 0; i < myleads.length; ++i) {
          x += "<li> <a target = '_blank'    href='#'>" + myleads[i] + "</a></li>"
     }
     ilel.innerHTML = x
}