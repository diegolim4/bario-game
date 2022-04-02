const bario = document.querySelector('.bario')
const background = document.querySelector('.background')

let isJumping = false
let isGameOver = false;
let position = 0

function handleKey(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump() 
        }
       
    }
}

function jump(){
    
    isJumping = true

    let upInterval = setInterval(()=>{
        if(position >=200){
        
        clearInterval(upInterval)
        
        //descendo
        let downInterval = setInterval(()=>{
            if (position <= 0){
                
                clearInterval(downInterval)
                isJumping = false        
                }else{
                    position -= 25
                    bario.style.bottom = position + 'px'
                }
            }, 25)
        }
        //subindo
        position += 25  
        bario.style.bottom = position + 'px'
    }, 25)
}

function createcano(){
    const cano = document.createElement('div')

    let canoPosition = 1300
    let randomTime = Math.random() *  6000 
    
    if (isGameOver) return;

    cano.classList.add('cano')
    cano.style.left = '1000px'
    background.appendChild(cano)

    let leftInterval =  setInterval(()=>{
        if(canoPosition < -50 ){
            clearInterval(leftInterval)
            background.removeChild(cano)

        }else if(canoPosition > 0 && canoPosition < 60 && position < 60){
            //gamer over
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="gamer-over" >Vc Perdeu kkkjj</h1>'

        }
        
        else{
            canoPosition -= 10
            cano.style.left = canoPosition + 'px'
        }        
    }, 20)

    setTimeout(createcano, randomTime)

}
createcano()

document.addEventListener('keydown', handleKey)
