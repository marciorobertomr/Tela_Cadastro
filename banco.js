let tabelaCorpo = document.getElementById('tabela-corpo')

let registroAluno = []
let bancoAlunos = [];
let banco = '';

for(let i = 0; i < localStorage.length; i++) {
    let aluno = localStorage[i].split(';');
    
    registroAluno = {
        nome: aluno[0],
        sobrenome: aluno[1],
        area: aluno[2],
        dataNascimentoInvertida: aluno[3]
    }

    bancoAlunos.push(registroAluno);
}

for(let i = 0; i < bancoAlunos.length; i++) {
    banco += `
    <tr>
        <td>${bancoAlunos[i].nome}</td>
        <td>${bancoAlunos[i].sobrenome}</td>
        <td>${bancoAlunos[i].area}</td>
        <td>${bancoAlunos[i].dataNascimentoInvertida}</td>
    </tr>`
}

tabelaCorpo.innerHTML = banco;