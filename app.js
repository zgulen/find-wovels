const form = document.querySelector(".form")
const textArea = document.getElementById("text")
const notification = document.querySelector(".notification")
const array =["a","e","ı","i","o","ü","ö","u"]
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let counter = 0
    for (let i = 0; i < array.length; i++) {
            textArea.value.split("").map((e) =>{
                if (e == array[i]){
                    counter++
                }
            })
        }
        notification.textContent = `There are/is ${counter} vowels in "${textArea.value}"`
})