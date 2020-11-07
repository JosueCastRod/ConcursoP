function user(){
    var e = document.getElementById("tipoUsuario");
    var strUser = e.value;
    //alert(strUser);
    switch(strUser){
        case "1":
            location.href = "../Alumnos/registroAlumnos.html"
          break;  

        case "2":
                location.href ="../Docentes/registroDocente.html"
        break;

        case"3":
                location.href = "../Staff/registroStaff.html"
        break;

      
    }

}