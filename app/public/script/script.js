// Controle de envio de formulário
const form = document.querySelector("form");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const expectedCount = 8;

form.addEventListener("submit", function (event) {
  let checkedCount = 0;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });
  if (checkedCount !== expectedCount) {
    alert(`Selecione exatamente ${expectedCount} alunos.`);
    event.preventDefault();
  }
});

// Adicionando evento a li
const lis = document.querySelectorAll("li");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    li.classList.toggle("focused");
  });
});
