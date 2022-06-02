// function alterarBackgroundPrimeiroPost(){
//     let posts = document.getElementsByClassName('post');

//     let primeiroPost = posts[0]

//     primeiroPost.style.backgroundColor = 'red'
// }

// function aumentarFonteSegundoPost(){
//     let textoPosts = document.getElementsByClassName('texto-post')

//     let segundoTextoPosts = textoPosts[1].classList

//     textoPosts[1].classList.add('fonte-grande')

// }

function adicionarHora(){

    let horasAtuais = document.getElementById('horario-atual')

    let horas = horasAtuais.value

    let resultado = document.getElementById('hora-do-dia')

    if(horas >= 0 && horas <= 12){
        resultado.innerHTML = `São ${horas} horas, estamos pela manhã!`
        resultado.style.backgroundColor = 'orangered'
    }else if(horas >= 12 && horas < 18){
        resultado.innerHTML = `São ${horas} horas, estamos pela tarde!`
        resultado.style.backgroundColor = 'blue'
    }else{
        resultado.innerHTML = `São ${horas} horas, estamos pela noite!`
        resultado.style.backgroundColor = 'gray'
    }
}