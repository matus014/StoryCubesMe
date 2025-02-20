import React, { useState } from "react";
import { 
  FaSun, FaMoon, FaCloud, FaTree, FaHeart, FaStar, FaFlag, FaGhost, FaRocket 
} from "react-icons/fa";
import { 
  FcAlarmClock, FcBusinessman, FcBusinesswoman, FcBriefcase, FcCloseUpMode, 
  FcDislike, FcGraduationCap 
} from "react-icons/fc";
import { 
  IoAirplane, IoBarbellOutline, IoBicycle, IoBeer, IoBusinessSharp 
} from "react-icons/io5";
import './Game.css';

const icons = [
  FaSun, FaMoon, FaCloud, FaTree, FaHeart, FaStar, FaFlag, FaGhost, FaRocket, 
  FcAlarmClock, FcBusinessman, FcBusinesswoman, FcBriefcase, FcCloseUpMode, 
  FcDislike, FcGraduationCap, IoAirplane, IoBarbellOutline, IoBicycle, IoBeer, IoBusinessSharp
];

export default function StoryCubes() {
  const [dados, setDados] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [numeroDados, setNumeroDados] = useState(9); 
  const rolarDados = () => {
    
    let iconesDisponiveis = [...icons];//copia os dados para alterar a copia

    const novosDados = Array.from({ length: numeroDados }, () => {
      const indiceAleatorio = Math.floor(Math.random() * iconesDisponiveis.length);
      console.log(indiceAleatorio)
      return iconesDisponiveis.splice(indiceAleatorio, 1)[0];
    });

    setDados(novosDados);
    setHistorico(prevHistorico => [...prevHistorico, novosDados]);
  };

  const mudarNumeroDados = (quantidadeDadosSelecionados) => {
    const valor = Math.max(1, Math.min(15, Number(quantidadeDadosSelecionados.target.value)));
    setNumeroDados(valor);
  };

  return (
    <div className="container">
      <div className="container-game">
        <div className="jogo">
          <h1 className="titulo">Story Cubes</h1>
          <div className="mesa-dados">
            {dados.map((Icon, indice) => (
              //mostra os dados na tela 
              <div key={indice} className="Dados">
                <Icon size={60} />
              </div>
            ))} 
          </div>
          <div className="controles">
            <h1>Dados:</h1>
            <input
              id="numeroDados"
              type="number"
              value={numeroDados}
              onChange={mudarNumeroDados} 
              //chama mudarNumeroDados para selecionar a quantidade de dados que irao ser jogados
              min="1"
              max="15"
              className="entrada-num-dados"
            />
            <button className="botao-girar" onClick={rolarDados}>
              Rolar Dados
            </button>
          </div>
        </div>
        <div className="historico">
          <h2>Histórico</h2>
          {historico.map((rodada, indiceRodada) => (
            <div key={indiceRodada} className="rodadaTitulo">
              <p>Rodada {indiceRodada + 1} 🎲</p>
              <div>
                {rodada.map((Icon, indiceIcon) => (
                  <Icon key={indiceIcon} size={40} style={{ margin: "5px" }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}