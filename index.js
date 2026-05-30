// Selecionando elementos
let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");
let clearAllBtn = document.getElementById("clearAll");

// Contador
let count = 0;

// Função atualizar contador
function updateCount() {
  taskCount.innerText = count;
}

// Adicionar música/álbum
addBtn.addEventListener("click", function() {

  // Validando input vazio
  if(input.value.trim() === "") {
    alert("Por favor, digite o nome de uma música ou álbum!");
    return;
  }

  // Criando o item da lista (li)
  let li = document.createElement("li");

  // Texto da música ou álbum
  let span = document.createElement("span");
  span.innerText = input.value;
  // Dica visual ao passar o mouse para indicar que é clicável
  span.title = "Clique para marcar/desmarcar como escutado"; 

  // REQUISITO: Marcar como escutado ao clicar no texto
  span.addEventListener("click", function() {
    span.classList.toggle("escutado");
  });

  // Botão remover
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remover";
  removeBtn.classList.add("remove-btn");

  // Removendo item da lista
  removeBtn.addEventListener("click", function() {
    li.remove();
    count--;
    updateCount();
  });

  // Adicionando elementos ao container do item
  li.appendChild(span);
  li.appendChild(removeBtn);

  // Adicionando o item na lista principal
  taskList.appendChild(li);

  // Atualizando contador global
  count++;
  updateCount();

  // Limpando o campo de texto e retornando o foco a ele
  input.value = "";
  input.focus();
});

// Limpar toda a lista
clearAllBtn.addEventListener("click", function() {
  taskList.innerHTML = "";
  count = 0;
  updateCount();
});