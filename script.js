let voto1 = 0
let voto2 = 0

function Votar() {

    const votacao = parseInt(prompt("Informe o número do seu voto"))
    
    if (votacao === 1) {
        voto1++
        document.getElementById("c1").textContent = "Candidato 1:" + " "+"teve" + " "+ voto1 +" "+"voto(s)"
    } else if (votacao === 2){
        voto2++
        document.getElementById("c2").textContent = "Candidato 2:" +" " +"teve" + " "+ voto2 +" "+"voto(s)"

    } else{
        alert("Dados inválidos")
    }

}



function Encerrar() {
    if (voto1>voto2) {
        let vencedor = "Candidato 1 José"
        document.getElementById("vence").textContent = "O vencedor foi:"+ " "+ vencedor

    } else if (voto2 > voto1) {
        let vencedor = "Candidato 2 João"
        document.getElementById("vence").textContent = "O vencedor foi:"+ " "+ vencedor
    }else{
        let empate = "Empate"
        document.getElementById("vence").textContent = empate

    }

}