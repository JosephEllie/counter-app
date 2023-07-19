let countEl = document.getElementById("count-el")
let Btn = document.getElementById("increment-btn")
let saveCount = document.getElementById("saveCount")
let saveEl = document.getElementById("save-btn")
let resetEl = document.getElementById("reset-btn")
let count = 0
let saveValue  
const initialValue = saveCount.textContent

function clickBtn(){
    count += 1
 countEl.innerHTML = count
}
function saveBtn(){
    let saveValue = count
    saveCount.textContent += " " + saveValue + " - "
    count = 0
    countEl.textContent = count
}

function reset(){
    saveCount.textContent = initialValue
}
Btn.addEventListener('click',clickBtn)
saveEl.addEventListener("click", saveBtn)
resetEl.addEventListener("click", reset)
