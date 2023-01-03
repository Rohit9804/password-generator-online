const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstpass1= document.getElementById("firstpass")
function hello(){
    firstpass1.textContent = password() + " "
    ans = " "
}

function random(){
    return Math.trunc(Math.random()*32)
}
let ans = ""
function password(){
    for( let i = 0; i<6; i++){
        ans += characters[random()]
    }
    return ans
}
