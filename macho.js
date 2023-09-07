var macho = document.getElementById("macho")
var val = 0;
var btn = document.getElementById("btn")
var p_cont = document.getElementById("sexo")

btn.addEventListener("click", (evt) =>{

    var radios = document.querySelectorAll("input[type=radio]")
    radios.forEach(radioAtual=>{        
    if(radioAtual.checked == true)
    {   
        var converter = Number(radioAtual.value)
        val += converter
    }
})
    if(val >= 1 && val < 10){
        p_cont.innerHTML = "Criatura Ancestral"
        macho.setAttribute("class", "ancestral")
    }

    else if( val >= 10 && val < 16)
    {
        p_cont.innerHTML = "Lendario"
        macho.setAttribute("class", "lendario")
    }

    else if( val >= 16 && val < 21)
    {
        p_cont.innerHTML = "Homem moderno"
        macho.setAttribute("class", "homem_moderno")
    }

    else if(val >= 21 && val < 24)
    {
        p_cont.innerHTML = "Tendencias Gays"
        macho.setAttribute("class", "tendencias_gays")
    }

    else if(val >= 24 && val < 100)
    {
        p_cont.innerHTML = "Perdidamente Gay"
        macho.setAttribute("class", "bezerro")
    }

})
