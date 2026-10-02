function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function validarNome(nome) {
  return nome.length >= 3;
}
function validarSenha(senha) {
  return senha.length >= 6 && /\d/.test(senha);
}
function validarCPF(cpf) {
  return cpf.length >= 11; // simplificado
}
function mostrarMensagem(msg, cor) {
  const el = document.getElementById("mensagem");
  el.textContent = msg;
  el.style.color = cor;
}
function cadastrar() {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const cpf = document.getElementById("cpf");
  const senha = document.getElementById("senha");
  const confirmar = document.getElementById("confirmar");
  let valido = true;
  document.querySelectorAll("input").forEach((i) => {
    i.classList.remove("erro", "sucesso");
  });
  if (!validarNome(nome.value)) {
    nome.classList.add("erro");
    valido = false;
  } else nome.classList.add("sucesso");
  if (!validarEmail(email.value)) {
    email.classList.add("erro");
    valido = false;
  } else email.classList.add("sucesso");
  if (!validarCPF(cpf.value)) {
    cpf.classList.add("erro");
    valido = false;
  } else cpf.classList.add("sucesso");
  if (!validarSenha(senha.value)) {
    senha.classList.add("erro");
    valido = false;
  } else senha.classList.add("sucesso");

  if (senha.value !== confirmar.value) {
    confirmar.classList.add("erro");
    valido = false;
  } else confirmar.classList.add("sucesso");
  if (!valido) {
    mostrarMensagem("❌ Verifique os campos obrigatórios!", "red");
    return;
  }
  const aluno = {
    nome: nome.value,
    email: email.value,
    cpf: cpf.value,
  };
  localStorage.setItem("alunoEnfermagem", JSON.stringify(aluno));
  mostrarMensagem("✅ Cadastro realizado com sucesso!", "green");
}
/* Testes automatizados */
console.assert(validarEmail("teste@gmail.com") === true);
console.assert(validarEmail("teste@") === false);
console.assert(validarNome("Maria") === true);
console.assert(validarNome("Jo") === false);
console.assert(validarSenha("123456") === true);
console.assert(validarSenha("abc") === false);
console.log("✅ Testes OK!");
