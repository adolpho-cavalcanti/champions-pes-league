import { jogadores } from '../bd';

export default function handler(req, res) {
    res.status(200).json(jogadores)
}
  