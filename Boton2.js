function iniciar ()
{
    var fecha=new Date();
    var actual=new Date();
	var ayer=new Date(fecha.getTime() - 24*60*60*1000);
    document.getElementById("ayer").innerHTML= 
        "<p>La Fecha de ayer es: " + +ayer.getDate()+"/"+ayer.getMonth()+"/"+ayer.getFullYear() + "</p>";
    document.getElementById("metodosGet").innerHTML= 
        "<p> La hora hace 24 horas sería: " +":" + actual.getHours() + ":" + actual.getMinutes() + ":" + actual.getSeconds() + "</p>";
}
window.addEventListener("load", iniciar, false);