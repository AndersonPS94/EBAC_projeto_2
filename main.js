const form = document.getElementById('form-agenda');
let linhas ='';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeContato = document.getElementById('contatos');
    const numTelefone = document.getElementById('telefone');

    let linha ='<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numTelefone.value}</td>`;
    linha +='<tr>';
    linhas += linha;

    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
});
