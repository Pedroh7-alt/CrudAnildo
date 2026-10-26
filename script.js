const form = document.getElementById('crudForm');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const editIndex = document.getElementById('editIndex');
const btnSalvar = document.getElementById('btnSalvar');
const btnCancelar = document.getElementById('btnCancelar');
const tabelaCorpo = document.getElementById('tabelaCorpo');

// Ler dados do LocalStorage
function getDados() {
  return JSON.parse(localStorage.getItem('usuarios')) || [];
}

// Persistir dados no LocalStorage
function setDados(dados) {
  localStorage.setItem('usuarios', JSON.stringify(dados));
}

// READ: Renderizar a tabela na tela
function renderizarTabela() {
  const usuarios = getDados();
  tabelaCorpo.innerHTML = '';

  usuarios.forEach((usuario, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${usuario.nome}</td>
      <td>${usuario.email}</td>
      <td>
        <button class="btn-editar" onclick="editarUsuario(${index})">Editar</button>
        <button class="btn-excluir" onclick="excluirUsuario(${index})">Excluir</button>
      </td>
    `;
    tabelaCorpo.appendChild(tr);
  });
}

// CREATE e UPDATE: Adicionar novo ou atualizar existente
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuarios = getDados();
  const index = parseInt(editIndex.value);
  const novoUsuario = {
    nome: inputNome.value.trim(),
    email: inputEmail.value.trim()
  };

  if (index === -1) {
    // CREATE
    usuarios.push(novoUsuario);
  } else {
    // UPDATE
    usuarios[index] = novoUsuario;
  }

  setDados(usuarios);
  limparFormulario();
  renderizarTabela();
});

// Carregar dados no formulário para edição
function editarUsuario(index) {
  const usuarios = getDados();
  const usuario = usuarios[index];

  inputNome.value = usuario.nome;
  inputEmail.value = usuario.email;
  editIndex.value = index;

  btnSalvar.textContent = 'Atualizar';
  btnCancelar.style.display = 'inline-block';
}

// DELETE: Remover item do array
function excluirUsuario(index) {
  if (confirm('Deseja realmente excluir este usuário?')) {
    const usuarios = getDados();
    usuarios.splice(index, 1);
    setDados(usuarios);
    renderizarTabela();
  }
}

// Limpar formulário e resetar estado de edição
function limparFormulario() {
  form.reset();
  editIndex.value = '-1';
  btnSalvar.textContent = 'Adicionar';
  btnCancelar.style.display = 'none';
}

btnCancelar.addEventListener('click', limparFormulario);

// Inicialização da lista
renderizarTabela();