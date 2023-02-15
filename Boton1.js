function iniciar ()
{
    var actual = new Date ();

    document.getElementById("metodosGet").innerHTML= 
        "<p>Fecha y la hora de hoy: " + actual.toLocaleString() + "</p>";
}
window.addEventListener("load", iniciar, false);