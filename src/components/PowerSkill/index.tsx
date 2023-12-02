import Player from "../../interfaces/Player";
import { ButtonPowerSkill } from "../../styles/components/ButtonPowerSkill";

interface IPlayerSkill {
    playerSkill: Player;
}

export default function PowerSkill({ playerSkill }: IPlayerSkill) {
    const { titulos, melhorDoMundo } = playerSkill;
    const pesoForTheBestWorld = 5;
    const pointsForChampionship = titulos.reduce((total, titulo) => {
        return total + (titulo.peso * titulo.qtdTitulos);
    }, 0);
    const powerSkill = pointsForChampionship + (melhorDoMundo * pesoForTheBestWorld);
    
    return (
        <ButtonPowerSkill disabled>{powerSkill}</ButtonPowerSkill>
    )
}