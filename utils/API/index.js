const API_randomuser = "https://randomuser.me/api/?results=41";

async function fetchDadosAPI() {
  try {
    const resposta = await fetch(API_randomuser);

    if (!resposta.ok) {
      throw new Error(
        `Erro ao buscar dados: ${resposta.status} - ${resposta.statusText}`,
      );
    }

    const dados = await resposta.json();
    return dados;
  } catch (error) {
    throw new Error(`Erro ao buscar dados: ${error.message}`);
  }
}

export { fetchDadosAPI };
