function iniciar ()
{
    var fecha=new Date();
    var actual= new Date();
	var laProximaSemana=new Date(fecha.getTime() + (24*60*60*1000)*7);
    document.getElementById("laproximasemana").innerHTML= 
        "<p>La Fecha de hoy dentro de una semana es: " + +laProximaSemana.getDate()+"/"+laProximaSemana.getMonth()+"/"+laProximaSemana.getFullYear() + "</p>";
    document.getElementById("metodosGet").innerHTML= 
        "<p> La hora dentro de una semana sería: " +":" + actual.getHours() + ":" + actual.getMinutes() + ":" + actual.getSeconds() + "</p>";
}
window.addEventListener("load", iniciar, false);