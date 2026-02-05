

export class Game{
    constructor(word){
        this.gameEl = document.getElementById('game');
        this.gameEl.style.display = 'flex';
        this.gameEl.style.transform = 'translateY(0px)';
        this.word = word;
        this.len = word.length;
        this.lines = [];
        for(let i=0;i<5;i++){
            this.lines[i] = this.CreateLine();
        }


        this.activeLine = this.lines[0];
        this.SetActiveLine(0);
    }   
makeWordRight(){
    this.activeLine.forEach((el, index) => {
         setTimeout(() => {
             el.classList.toggle("code-input-"+this.check(el.value,index)); 
            }, index * 500); 
        });
}
CreateLine(){
    const box = document.createElement('div');
    this.gameEl.lastElementChild.appendChild(box);
    box.classList.add('code-container');
    let line = [];
    for(let i = 0;i<this.len;i++){
       line[i] = document.createElement('input');
       box.appendChild(line[i]);
       line[i].classList.add('code-input');
       line[i].setAttribute('type','text');
       line[i].setAttribute('maxlength','1');
       line[i].disabled = true;
    }
    return line;
}
SetActiveLine(id){
    this.activeLine.forEach((input, index) => {
        input.addEventListener('input', () => {
        if (input.value.length === 1 && index < this.activeLine.length - 1) {
            this.activeLine[index + 1].focus();
            }
            });
        input.addEventListener('keydown',(e)=>{
        if(e.key === 'Backspace' && input.value === '' && index>0){
            this.activeLine[index - 1].focus();
            }
            })
        input.disabled = false;
        input.classList.add('code-input-active');
            });
    this.activeLine[this.activeLine.length - 1].addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        this.makeWordRight();
        if(id<4){
            for(let i=0;i<this.len;i++){
                this.activeLine[i].classList.toggle('code-input-active');
                this.activeLine[i].disabled = true;
            }
            this.activeLine = this.lines[id+1];
            this.SetActiveLine(id+1);
        }
        if(id === 4){
            //Endgame;
            for(let i=0;i<this.len;i++){
                this.activeLine[i].classList.toggle('code-input-active');
                this.activeLine[i].disabled = true;
            }
        }
    }
    })
this.activeLine[0].focus();


    }
check(letter,id){
    if(letter.toLowerCase()===this.word[id].toLowerCase()){
        return "right";
    }
    
    else{
            if(
        this.word.includes(letter.toLowerCase())
    ){
        return "near";
    }
        return "wrong"
    }
}
}