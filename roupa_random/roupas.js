// 1. Simulando o nosso banco de dados com algumas roupas
const guardaRoupa = [
  { nome: 'Camiseta Básica', tipo: 'parte_cima', clima: 'calor', ocasiao: 'casual' },
  { nome: 'Regata Preta', tipo: 'parte_cima', clima: 'calor', ocasiao: 'casual' },
  { nome: 'Calça Jeans', tipo: 'parte_baixo', clima: 'calor', ocasiao: 'casual' },
  { nome: 'Bermuda Sarja', tipo: 'parte_baixo', clima: 'calor', ocasiao: 'casual' },
  { nome: 'Tênis All Star', tipo: 'calcado', clima: 'calor', ocasiao: 'casual' },
  { nome: 'Casaco de Lã', tipo: 'parte_cima', clima: 'frio', ocasiao: 'trabalho' }
];

// 2. A função que gera o look
function gerarLook(climaDesejado, ocasiaoDesejada) {
  
  // Passo A: Filtrar só as roupas que combinam com o clima e ocasião que o usuário pediu
  const roupasFiltradas = guardaRoupa.filter(peca => 
    peca.clima === climaDesejado && peca.ocasiao === ocasiaoDesejada
  );

  // Passo B: Separar por categorias
  const partesDeCima = roupasFiltradas.filter(peca => peca.tipo === 'parte_cima');
  const partesDeBaixo = roupasFiltradas.filter(peca => peca.tipo === 'parte_baixo');
  const calcados = roupasFiltradas.filter(peca => peca.tipo === 'calcado');

  // Verifica se tem roupa suficiente para montar o look
  if (partesDeCima.length === 0 || partesDeBaixo.length === 0 || calcados.length === 0) {
      return "Ops! Faltam peças cadastradas para montar esse estilo de look.";
  }

  // Função auxiliar para sortear um número aleatório
  const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

  // Passo C: Sorteia uma peça de cada e monta o resultado
  const lookFinal = {
    cima: sortear(partesDeCima).nome,
    baixo: sortear(partesDeBaixo).nome,
    pe: sortear(calcados).nome
  };

  return lookFinal;
}

// 3. Testando o programa! (O usuário apertou o botão "Gerar Look Casual de Calor")
console.log("Seu look de hoje é:");
console.log(gerarLook('calor', 'casual'));