import { Game } from "./components/game.js";
const menuEl = document.getElementById('menu');
const playBtn = document.querySelector('.menu__start-btn');


playBtn.addEventListener('click',()=>startGame());


async function startGame(){
    menuEl.style.opacity = 0;
    setTimeout(()=>{
        menuEl.style.display = 'none';
        const game = new Game(randomWord());
    },800);
    

}
function randomWord(){
    let words = ['parrot','cooker','captain','lemon','cat','bus','slap','swap','pool','kids','letter','container','mouse','street','this','object','code','script','apple','pineapple','loser','winner','happy','smooth','tea','pot','teapot','honey','worker','build','brick'];
    let id = Math.floor(Math.random()*(words.length+1));
    return words[id];
}