const png = document.querySelectorAll('.png')


let pass = -1400
let contador = 0
function passe(){
    contador += pass
    png.forEach((e)=>{
        if(contador >= pass){
            e.style.transform  = `translateX(${contador}px)`
           
        }else{
            e.style.transform = `translateX(0px)`
            contador = 0
        }
    })
}

setInterval(passe,6000) 