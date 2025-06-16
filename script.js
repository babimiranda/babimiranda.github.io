// ========== Formulário ==========
const form = document.getElementById('formContato');
const statusMensagem = document.getElementById('statusMensagem');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome === '' || email === '' || mensagem === '') {
    statusMensagem.textContent = 'Por favor, preencha todos os campos!';
    statusMensagem.style.color = 'red';
    return;
  }

  statusMensagem.textContent = `Obrigada pelo contato, ${nome}! Em breve te respondo.`;
  statusMensagem.style.color = 'green';
  form.reset();
});

// ========== Lógicas de Programação ==========

// 1. If/Else
function saudacao(hora) {
  if (hora < 12) return 'Bom dia!';
  else if (hora < 18) return 'Boa tarde!';
  else return 'Boa noite!';
}
console.log(saudacao(10));

// 2. For
for (let i = 1; i <= 5; i++) {
  console.log(`Contando: ${i}`);
}

// 3. While
let contador = 0;
while (contador < 3) {
  console.log(`While: ${contador}`);
  contador++;
}

// 4. Array + forEach
const estilosMusicais = ['samba', 'mpb', 'pop', 'forró'];
estilosMusicais.forEach((estilo, index) => {
  console.log(`Estilo ${index + 1}: ${estilo}`);
});

// 5. Função soma
function somar(a, b) {
  return a + b;
}
console.log('Soma:', somar(5, 7));

// 6. Função retorna objeto
function criarContato(nome, email) {
  return {
    nome,
    email,
    criadoEm: new Date()
  };
}
console.log(criarContato('Babi', 'babi@email.com'));

// 7. Arrow function
const multiplicar = (x, y) => x * y;
console.log('Multiplicação:', multiplicar(3, 4));

// 8. Switch
function classificarNota(nota) {
  switch (true) {
    case nota >= 9: return 'Excelente';
    case nota >= 7: return 'Bom';
    case nota >= 5: return 'Regular';
    default: return 'Precisa melhorar';
  }
}
console.log(classificarNota(8));

// 9. Objeto com método
const cantora = {
  nome: 'Bárbara',
  estilo: 'Eclética',
  cantar() {
    return `${this.nome} está cantando ${this.estilo}`;
  }
};
console.log(cantora.cantar());
