const menuEl = document.getElementById('menu');
const playBtn = document.querySelector('.menu__start-btn');

const gameEl = document.getElementById('game');

const inputs = document.querySelectorAll('.code-input');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
  input.addEventListener('keydown',(e)=>{
    if(e.key === 'Backspace' && input.value === '' && index>0){
        inputs[index - 1].focus();
    }
  })
});
inputs[inputs.length-1].addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        makeWordRight(inputs);
    }
})



playBtn.addEventListener('click',()=>startGame("snake"));


async function startGame(word){
    menuEl.style.opacity = 0;
    setTimeout(()=>{
        menuEl.style.display = 'none';
        gameEl.style.display = 'flex';
        gameEl.style.transform = 'translateY(0px)';
    },800);
    

}
function makeWordRight(inputs){
    inputs.forEach((el, index) => {
         setTimeout(() => {
             el.classList.toggle("code-input-right"); 
            }, index * 500); 
        });
}