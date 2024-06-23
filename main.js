function cadastrar(event) {
    let nomeInput = document.getElementById('nome');
    let sobrenomeInput = document.getElementById('sobrenome');
    let areaInput = document.getElementById('area');
    let nascimentoInput = document.getElementById('nascimento');

    let nome = nomeInput.value;
    let sobrenome = sobrenomeInput.value;
    let area = areaInput.value;
    let dataNascimento = nascimentoInput.value;
    let dataNascimentoInvertida;

    let partes = dataNascimento.split('-');
    dataNascimentoInvertida = `${partes[2]}-${partes[1]}-${partes[0]}`

    let contador = localStorage.length;
    let aluno = `${nome};${sobrenome};${area};${dataNascimentoInvertida}`;

    event.preventDefault();
    localStorage.setItem(contador, aluno);

    nomeInput.value = '';
    sobrenomeInput.value = '';
    areaInput.value = '';
    nascimentoInput.value = '';
}

let alunoRegistro = document.getElementById('registrar');
alunoRegistro.addEventListener('click', cadastrar);