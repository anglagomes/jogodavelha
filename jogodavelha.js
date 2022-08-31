const celulas = document.querySelectorAll(".celula");
let checarTurno = true;
let jogador_x = "X";
let jogador_o = "O";
const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")) {
        jogar(event.target.id)
    }
});

function jogar(id){
    const celula = document.getElementById(id);
    turno = checarTurno ? jogador_x : jogador_o;
    celula.textContent = turno;
    celula.classList.add(turno);
    checarVencedor(turno);
}

function checarVencedor (turno){
    const vencedor = combinacoes.some((comb) =>{
        return comb.every((index) => {
            return celulas[index].classList.contains(turno);
        })
    });

    console.log("vencedor ", vencedor)
    if (vencedor){
        encerrarJogo(turno);
    } else if (checarEmpate()){
        encerrarJogo();
    } else {
        checarTurno = !checarTurno;
    }
}

function checarEmpate()  {
    let x = 0;
    let o = 0;

    celulas.forEach(function(celula) {
        if (celula.classList.contains(jogador_x)){
            x++;
        }
        if (celula.classList.contains(jogador_o)){
            o++;
        }
    } )
    return x + o === 9;
}


function encerrarJogo(vencedor = null){
    if (vencedor){
        const confirmModal = confirm('Parabéns, o jogador ' + vencedor + ' ganhou ' + 'Deseja jogar novamente?');
        if(confirmModal === true){ reiniciar()
        }
    } else {
        const confirmModal = confirm('Deu empate ' + 'Deseja jogar novamente?');
        if(confirmModal === true) { reiniciar()

        }
    }
}

function reiniciar () {

    for (x = 0; x <= 8; x++) {
        celulas.celula.opt[x].value = '';
        celulas.celula.opt[x].className = '';
    }
    celulas.celula.contains.value = '';
    document.celula.contains.value = '';
}