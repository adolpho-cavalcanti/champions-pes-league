import { useState } from "react";

export default function SorteioTeams() {
  const europa = ["City", "Liverpool", "Bayen"];
  const sulamerica = ["Boca", "River", "Olimpia"];
  const brasil = ["Galo", "Grêmio", "Flamengo"];
  const asia = ["Al Nars", "Inter Miami", "Al Ahli"];

  const [eur, setEur] = useState(europa);
  const [sul, setSul] = useState(sulamerica);
  const [bra, setBra] = useState(brasil);
  const [asi, setAsi] = useState(asia);

  let eSort = europa.sort(() => Math.random() - 0.5);
  let sSort = sulamerica.sort(() => Math.random() - 0.5);
  let bSort = brasil.sort(() => Math.random() - 0.5);
  let aSort = asia.sort(() => Math.random() - 0.5);

  let bau = [];
  let dolph = [];
  let nil = [];

  bau.push(eSort[0]);
  bau.push(sSort[0]);
  bau.push(bSort[0]);
  bau.push(aSort[0]);

  dolph.push(eSort[1]);
  dolph.push(sSort[1]);
  dolph.push(bSort[1]);
  dolph.push(aSort[1]);

  nil.push(eSort[2]);
  nil.push(sSort[2]);
  nil.push(bSort[2]);
  nil.push(aSort[2]);

  console.log("Times do Bau", bau);
  console.log("Times do Dô", dolph);
  console.log("Times do Nil", nil);

  let gA = [];
  let gB = [];
  let gC = [];
  let gD = [];

  gA.push(bau[0]);
  gA.push(dolph[1]);
  gA.push(nil[2]);

  gB.push(bau[1]);
  gB.push(dolph[2]);
  gB.push(nil[3]);

  gC.push(bau[2]);
  gC.push(dolph[3]);
  gC.push(nil[0]);

  gD.push(bau[3]);
  gD.push(dolph[0]);
  gD.push(nil[1]);

  console.log("Grupo A:", gA);
  console.log("Grupo B:", gB);
  console.log("Grupo C:", gC);
  console.log("Grupo D:", gD);

  const [gerarSorteio, setGerarSorteio] = useState(false);

  return (
    <>
      <h2>Times</h2>

      <div style={{ display: "flex", gap: "40px", margin: "30px" }}>
        <div>
          <h4>Europa</h4>
          <ul>
            {eur.map((euro) => (
              <li key={euro[0]}>{euro}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>América do Sul</h4>
          <ul>
            {sul.map((sula) => (
              <li key={sula[0]}>{sula}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Brasil</h4>
          <ul>
            {bra.map((br) => (
              <li key={br[0]}>{br}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Ásia ou USA</h4>
          <ul>
            {asi.map((as) => (
              <li key={as[0]}>{as}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", gap: "40px", margin: "30px" }}>
        {!gerarSorteio ? (
          <button
            style={{
              background: "yellow",
              padding: "20px 40px",
              borderRadius: "5px",
              border: "4px solid",
            }}
            onClick={() => setGerarSorteio(true)}
          >
            <strong>Gerar Sorteio</strong>
          </button>
        ) : (
          <button
            style={{
              background: "orange",
              padding: "20px 40px",
              borderRadius: "5px",
              border: "4px solid",
            }}
            onClick={() => setGerarSorteio(false)}
          >
            <strong>Resetar Sorteio</strong>
          </button>
        )}
      </div>

      {gerarSorteio ? (
        <>
          <div style={{ display: "flex", gap: "40px", margin: "30px" }}>
            <div style={{ margin: "40px 0" }}>
              <span>
                <strong>Times de Bau</strong>
              </span>
              <ul>
                {bau.map((ba) => (
                  <li key={ba[0]}>{ba}</li>
                ))}
              </ul>
            </div>
            <div style={{ margin: "40px 0" }}>
              <span>
                <strong>Times de Dolph</strong>
              </span>
              <ul>
                {dolph.map((dph) => (
                  <li key={dph[0]}>{dph}</li>
                ))}
              </ul>
            </div>
            <div style={{ margin: "40px 0" }}>
              <span>
                <strong>Times de Nil</strong>
              </span>
              <ul>
                {nil.map((ni) => (
                  <li key={ni[0]}>{ni}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: "flex", gap: "40px", margin: "30px" }}>
            <div style={{ margin: "40px 0" }}>
              <span>
                <strong>Grupo A</strong>
              </span>
              <ul>
                {gA.map((euro) => (
                  <li key={euro[0]}>{euro}</li>
                ))}
              </ul>
            </div>
            <div style={{ margin: "40px 0" }}>
              <span>
                <strong>Grupo B</strong>
              </span>
              <ul>
                {gB.map((gb) => (
                  <li key={gb[0]}>{gb}</li>
                ))}
              </ul>
            </div>
            <div style={{ margin: "40px 0" }}>
              <span>
                <strong>Grupo C</strong>
              </span>
              <ul>
                {gC.map((gc) => (
                  <li key={gc[0]}>{gc}</li>
                ))}
              </ul>
            </div>
            <div style={{ margin: "40px 0" }}>
              <span>
                <strong>Grupo D</strong>
              </span>
              <ul>
                {gD.map((gd) => (
                  <li key={gd[0]}>{gd}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
