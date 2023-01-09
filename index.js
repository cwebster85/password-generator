const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password1")
let passwordTwoEl = document.getElementById("password2")

function passwordGenerator() {
    
    function randomNumber() {
        let rand = Math.floor(Math.random() * characters.length)
        return rand
    }
    
    let password1 = ""
    let password2 = ""
    
    for(let i=0;i<characters.length;i++) {
        password1+=characters[randomNumber()]
        password2+=characters[randomNumber()]
        if(password1.length>15 && password2.length>15) {
            passwordOneEl.textContent=password1
            passwordTwoEl.textContent=password2
            break;
        }
    }
}

passwordGenerator()


