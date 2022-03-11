let button = document.querySelector("button")

button.onclick = () => {

    const firstB = parseFloat(document.querySelector("#first-bimester").value)
    const secondB = parseFloat(document.querySelector("#second-bimester").value)
    const thirdB = parseFloat(document.querySelector("#third-bimester").value)
    const fourthB = parseFloat(document.querySelector("#fourth-bimester").value)

    const enviar = ((firstB + secondB + thirdB + fourthB) / 4).toFixed(1)

    const displayR = document.querySelector("#display-result")
    // .innerHTML=`${enviar}`

    if (enviar >= 5.0) {
        displayR.innerHTML=`Aprovado! seus pontos => ${enviar}`    
    } else if (enviar < 5.0) {
        displayR.innerHTML=`Desaprovado! seus pontos => ${enviar}`    
        
    } else {
        displayR.innerHTML="preencha corretamente os Bimestres!"
    }

}

