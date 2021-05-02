var horas = 0;
var minuto = 0;
var segundo = 0;
var estado = "stop"; //play, pause, stop

function Play(){
	estado = "play";
}

function Stop(){
	estado = "stop";
}

function Pause(){
	estado = "pause";
}

function AlmentarHora(){
	
}

function DiminuirHora(){
	
}

function AlmentarMinuto(){

}

function DiminuirMinuto(){
	
}

function AlmentarSegundo(){
	
}

function DiminuirSegundo(){
	
}

function ExecutaTempo(){
    if(estado == "stop"){

    }else if(estado == "pause"){

    }else if(estado == "play"){
    	
    }else{

    }
}

document.getElementById("botao-play").addEventListener("click", Play);
document.getElementById("botao-pause").addEventListener("click", Pause);
document.getElementById("botao-stop").addEventListener("click", Stop);
document.getElementById("h_cima").addEventListener("click", AlmentarHora);
document.getElementById("h_baixo").addEventListener("click", DiminuirHora);
document.getElementById("m_cima").addEventListener("click", AlmentarMinuto);
document.getElementById("m_baixo").addEventListener("click", DiminuirMinuto);
document.getElementById("s_cima").addEventListener("click", AlmentarSegundo);
document.getElementById("s_baixo").addEventListener("click", DiminuirSegundo);

setInterval(ExecutaTempo,1000);