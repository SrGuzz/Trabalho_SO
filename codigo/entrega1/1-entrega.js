var nProcessos2;

document.getElementById('btnGerar').addEventListener('click', function() {
    let divProcessos = document.getElementById('processos');
    const nProcessos = document.getElementById('nProcessos').value;
    nProcessos2 = nProcessos;
    console.log(nProcessos);
    if(nProcessos <= 0 ){
        document.getElementById('erronProcessos').innerText = 'Valor inválido';
        return;
    }
    else{
        document.getElementById('erronProcessos').innerText = '';
    } 

    if(document.getElementById('quantum').value <= 0){
        document.getElementById('erroQuantum').innerText = 'Valor inválido';
        return;
    }
    else{
        document.getElementById('erroQuantum').innerText = '';
    }

    divProcessos.innerHTML = '<h4 class="mt-4 mb-3 text-center">Tempo de Surto</h4>';
    for(let i = 0; i < nProcessos; i++){
        divProcessos.innerHTML += `
            <div class="input-group mb-3">
                <span class="input-group-text text-white">P${i+1}</span>
                <input type="number" class="form-control" aria-label="processo" id="nProcesso${i}">
            </div>
            <p id="erronProcesso${i}" class="small text-danger"></p>
        `;
    }
    divProcessos.innerHTML += `
        <div>
            <button class="btn" id="btnCalcular" onclick="calcula()">Calcular</button>
        </div>
    `;
});

function calcula(){
    var quantum = parseInt(document.getElementById('quantum').value);
    var quantum = parseInt(document.getElementById('quantum').value);
    let entrou = false;
    
    // Validação dos processos
    for (let i = 0; i < nProcessos2; i++) {
        if (document.getElementById(`nProcesso${i}`).value <= 0) {
            document.getElementById(`erronProcesso${i}`).innerText = 'Valor inválido';
            entrou = true;
        } else {
            document.getElementById(`erronProcesso${i}`).innerText = '';
        }
    }
    
    if (entrou) {
        return;
    }
    
    let processos = [];
    for (let i = 0; i < nProcessos2; i++) {
        let surtoi = parseInt(document.getElementById(`nProcesso${i}`).value);
        processos.push({
            surto: surtoi,
            nome: `P${i + 1}`
        });
    }
    
    let resultado = document.getElementById('resultado');
    let novoSurto = 0; // Tempo total até o momento
    let surtin = 0;    // Armazena o tempo anterior para exibição
    
    // Loop principal
    while (processos.length > 0) {
        for (let i = 0; i < processos.length; i++) {
    
            // Exibir o processo e o tempo de início
            resultado.innerHTML += `
                <div>
                    <p class="p-2 border border-white">${processos[i].nome}</p>
                    <p>${novoSurto}</p>
                </div>
            `;
    
            // Atualizar o tempo acumulado baseado no quantum ou no tempo restante do processo
            surtin = novoSurto; // Tempo anterior para exibição
            if (processos[i].surto >= quantum) {
                novoSurto += quantum;
            } else {
                novoSurto += processos[i].surto;
            }
    
            // Subtrair o quantum do processo
            processos[i].surto -= quantum;
    
            // Se o processo terminou (surto <= 0), removê-lo
            if (processos[i].surto <= 0) {
                processos.splice(i, 1);
                i--; // Ajusta o índice após a remoção
            }
        }
    }
    
    // Exibir o total final após todos os processos terem sido concluídos
    resultado.innerHTML += `
        <div>
            <p class="p-2"></p>
            <p class="total">${novoSurto}</p>
        </div>
    `;    
}