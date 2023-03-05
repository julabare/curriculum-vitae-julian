function myFunction() {
    alert("Gracias su consulta ha sido enviada con exito, se respondera a la brevedad!");
}
 function openReferencias(evt, persoName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(persoName).style.display = "block";
    evt.currentTarget.className += " active";
}