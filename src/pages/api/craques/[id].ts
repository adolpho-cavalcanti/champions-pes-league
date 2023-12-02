import { jogadores } from '../bd';


export default function handler(req, res) {
    const idSelecionado = Number(req.query.id)
    const jogador = jogadores.filter(jogador => jogador.id === idSelecionado);
    
    if(jogador.length === 1) {
        res.status(200).json(jogador)
    } else {
        res.status(204).send()
    }
}
  