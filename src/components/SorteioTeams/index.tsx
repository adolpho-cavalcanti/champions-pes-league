import { useState } from "react";
import CardAnimation from "../Cardanimation";
import { CardSorteio, TableSorteio, TdSorteio, ThSorteio, TrSorteio } from "../../styles/components/SorteioTeams";

export default function SorteioTeams() {
  const [quantidadeTimes, setQuantidadeTimes] = useState(0);
  const [quantidadeGrupos, setQuantidadeGrupos] = useState(0);
  const [nomesJogadores, setNomesJogadores] = useState([]);
  const [nomesTimes, setNomesTimes] = useState([]);

  const [jogadores, setJogadores] = useState([]);
  const [grupos, setGrupos] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "quantidadeTimes") {
      setQuantidadeTimes(parseInt(value, 10));
    } else if (name === "quantidadeGrupos") {
      setQuantidadeGrupos(parseInt(value, 10));
    } else if (name === "nomesJogadores") {
      setNomesJogadores(value.split(",").map((nome) => nome.trim()));
    } else if (name === "nomesTimes") {
      setNomesTimes(value.split(",").map((nome) => nome.trim()));
    }
  };

  const gerarSorteio = () => {
    // Validar as entradas do usuário
    if (
      isNaN(quantidadeTimes) ||
      isNaN(quantidadeGrupos) ||
      quantidadeTimes <= 0 ||
      quantidadeGrupos <= 0 ||
      nomesJogadores.length === 0 ||
      nomesTimes.length !== quantidadeTimes
    ) {
      console.error("Por favor, insira valores válidos.");
      return;
    }
  
    // Limpar arrays existentes
    let jogadores = [];
    let grupos = [];
  
    // Distribuir times entre jogadores
    for (let i = 0; i < nomesJogadores.length; i++) {
      jogadores.push({ jogador: nomesJogadores[i], times: [] });
    }
  
    let timesDisponiveis = [...nomesTimes];
  
    for (let i = 0; i < quantidadeTimes; i++) {
      const timeIndex = Math.floor(Math.random() * timesDisponiveis.length);
      const time = timesDisponiveis[timeIndex];
  
      const jogadorIndex = i % nomesJogadores.length;
      jogadores[jogadorIndex].times.push(time);
  
      // Remover o time usado para evitar repetição
      timesDisponiveis.splice(timeIndex, 1);
    }
  
    // Formar os grupos
    for (let i = 0; i < quantidadeGrupos; i++) {
      grupos.push([]);
    }
  
    // Adicionar um time de cada jogador a cada grupo
    jogadores.forEach(({ jogador, times }) => {
      for (let i = 0; i < times.length; i++) {
        const grupoIndex = i % quantidadeGrupos;
        grupos[grupoIndex].push({ jogador, time: times[i] });
      }
    });
  
    // Exibir os resultados no console (pode ajustar conforme necessário)
    console.log("Jogadores e seus times:", jogadores);
    console.log("Grupos e seus jogadores:", grupos);

    setJogadores(jogadores);
    setGrupos(grupos);
  };

  return (
    <div style={{width: '100%', padding: '10px'}}>
      <div>
        <h2>Configurações do Sorteio</h2>

        <form>
          <div style={{margin: '10px 0'}}>
            <label>
              Quantidade de Times:
            </label>
            <input
              type="number"
              name="quantidadeTimes"
              value={quantidadeTimes}
              onChange={handleInputChange}
              style={{width: '100%'}}
            />
          </div>

          <div style={{margin: '10px 0'}}>
            <label>
              Quantidade de Grupos:
            </label>
            <input
              type="number"
              name="quantidadeGrupos"
              value={quantidadeGrupos}
              onChange={handleInputChange}
              style={{width: '100%'}}
            />
          </div>

          <div style={{margin: '10px 0'}}>
            <label>
              Nomes dos Jogadores (separados por vírgula):
            </label>
            <input
              type="text"
              name="nomesJogadores"
              value={nomesJogadores.join(",")}
              onChange={handleInputChange}
              style={{width: '100%', height: '40px'}}
            />
          </div>

          <div style={{margin: '10px 0'}}>
            <label>
              Nomes dos Times (separados por vírgula):
            </label>
            <textarea
              name="nomesTimes"
              value={nomesTimes.join(",")}
              onChange={handleInputChange}
              style={{width: '100%', height: '80px'}}
              />
          </div>

          <button
            type="button"
            onClick={gerarSorteio}
          >
            Gerar Sorteio
          </button>
        </form>
      </div>
      <hr style={{
        margin: "30px 0"
      }}></hr>
      <CardSorteio>
        <h3>Jogadores e seus Times</h3>
        <TableSorteio>
          <TrSorteio>
            {jogadores.map(({ jogador, times }, index) => (
              <ThSorteio key={index}>{jogador}</ThSorteio>
            ))}
          </TrSorteio>
          <TrSorteio>
            {jogadores.map(({ jogador, times }, index) => (
              <TdSorteio key={index}>{times.join(' -  ')}</TdSorteio>
            ))}
          </TrSorteio>
        </TableSorteio>
      </CardSorteio>

      <CardSorteio>
        <h3>Grupos</h3>
        <TableSorteio>
            <TrSorteio>
              {grupos.map((grupo, index) => (
                <ThSorteio key={index}>Grupo {index + 1}</ThSorteio>
              ))}
            </TrSorteio>
            {grupos.length > 0 && grupos[0].map(({ jogador, time }, jogadorIndex) => (
              <TrSorteio key={jogadorIndex}>
                {grupos.map((grupo, index) => (
                  <TdSorteio key={index}>{grupo[jogadorIndex].time}</TdSorteio>
                ))}
              </TrSorteio>
            ))}
        </TableSorteio>
      </CardSorteio>
    </div>
  );
}
