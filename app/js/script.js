var horas = 0;
var minutos = 0;
var segundos = 0;
var estado = "stop"; //play, pause, stop

function Play(){
	estado = "play";
}

function Stop(){
	estado = "stop";
	horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById("horas").innerHTML = "00";
    document.getElementById("minutos").innerHTML = "00";
    document.getElementById("segundos").innerHTML = "00";
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
    	   	
    	if(segundos == 60){
    		segundos = 0; 
    		minutos++;     
    		document.getElementById("minutos").innerHTML = "" + minutos;
    		document.getElementById("segundos").innerHTML = "0" + segundos;       
    	}

    	if(minutos == 60){   		
    		minutos = 0;
    		horas++;  
    		document.getElementById("horas").innerHTML = "" + horas;      
    		document.getElementById("minutos").innerHTML = "0" + minutos;     
    	}
    	
    	if(segundos > 9){
            document.getElementById("segundos").innerHTML = "" + segundos;
    	}else{
             document.getElementById("segundos").innerHTML = "0" + segundos;
    	}

    	if(minutos > 9){
            document.getElementById("minutos").innerHTML = "" + minutos;
    	}else{
            document.getElementById("minutos").innerHTML = "0" + minutos;
    	}

    	if(horas > 9){
            document.getElementById("horas").innerHTML = "" + horas;
    	}else{
    		document.getElementById("horas").innerHTML = "0" + horas;
    	}

    	

    	segundos++;

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

setInterval(ExecutaTempo,150);