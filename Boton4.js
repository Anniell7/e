function iniciar ()
{
    var otraFecha= new Date();
    otraFecha.setDate(15); 
    otraFecha.setMonth(1);
    otraFecha.setFullYear(2013);
    document.getElementById("metodosSet").innerHTML = 
        "<p>Fecha de hoy hace 10 años: " + otraFecha + "</p>";
}
window.addEventListener("load", iniciar, false);