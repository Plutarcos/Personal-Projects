var inputElement = document.getElementById('resposta');
var numero = 1;

function checkAnswer1(){
    var answer = 'Atibaia'
    if(inputElement.value == answer){
        alert('Vamos mais um só para testar suas capacidades');
        window.location.href = "Journal.html";
    }else{
        alert('Resposta incorreta. Se esforce mais um pouco...');
    }
    
}
function checkAnswer2(){
    var answer = 'Sherlock Holmes'

    switch(inputElement.value){

        case answer:
            alert('Acho que agora podemos dificultar um pouco mais');
            window.location.href = "semRetorno.html";
            break;

        case 'Sherlock':
            alert('Está faltando algo... não?');
            break;
        case 'Sherrinford':
            alert('Talvez precise pesquisar um pouco mais');
            break;
        case 'Elementar':
            alert('Não acha que isso seria facil demais?');
            break;
        case 'ELEMENTAR':
            alert('Não acha que isso seria facil demais?');
            break;
        case 'Sophia está viva':
            alert('Disso nós ja sabemos ;D');
            break;
        default:
            alert('Resposta incorreta. Se esforce mais um pouco...');
    }    
}

function checkAnswer3(){
    var answer = '988282635';
    switch(inputElement.value){

        case answer:
            window.location.href = 'lostCall.html'
            break;
        case 'Celular':
            alert('Talvez ligando para o numero ela atenda');
            break;
        default:
            alert('Resposta incorreta. Se esforce mais um pouco...');
            break;
    }
}

function checkAnswer4(){
        var answer = 'Raquel';
        switch(inputElement.value){
    
            case answer:
                window.location.href = 'melhoresamigas.html';
                break;
            case 'Parque':
                alert('O Ultimo lugar em que foi vista...');
                break;
            default:
                alert('Resposta incorreta. Se esforce mais um pouco...');
                break;
        
    }
}

function checkAnswer5(){
    var answer = 'Traição';

    switch(inputElement.value){
        
        case answer:
            window.location.href = 'morte.html';
            break;
        case 'Sherlock Holmes':
            alert('De novo? Acho que não ;D');
            break;
        case 'Termino':
            alert('Tem algo a mais por aqui');
            break;
        case 'Término':
            alert('Tem algo a mais por aqui');
            break;

        default:
            alert('Resposta incorreta. Se esforce mais um pouco...');
            break;


    }
}



function checkAnswer6(){
    var answer = 'Arrependimento';
    switch(inputElement.value){

        case answer:
            alert('AQUI É O ULTIMO, DPS FAÇO MAIS');
            break;
        case 'Nada':
            if(numero < 3){
            alert('https://drive.google.com/file/d/1-u07Js8fBvGaOMFBmjHKBKG5cf6fsV63/view?usp=sharing');
            numero += 1;
            }else{
                confirm('Favor contatar o administrador MRCS1884@gmail.com')
                    numero = 1;   
            }
            break;
        case '2431':
            if(numero < 3){
            alert('Numeros aleatorios? |' + numero + '|');
            numero += 1;
            }else{
                confirm('Favor contatar o administrador MRCS1884@gmail.com')
                    numero = 1;   
            }
            break;
        default:
            if(numero < 3){
                alert('Resposta incorreta. Se esforce mais um pouco... |' + numero + '|');
                numero += 1;
            }else{
                confirm('Favor contatar o administrador MRCS1884@gmail.com')
                    numero = 1;   
            }
            break;

    }
    
}

/* PADRÃO

    function checkAnswerX(){
    var answer = 'RESPOSTA'
    
    switch(inputElement.value){

        case answer:
            alert('pica');
            break;
        default:
            alert('Resposta incorreta. Se esforce mais um pouco...');
            break;

    }
    
}
    
}*/

