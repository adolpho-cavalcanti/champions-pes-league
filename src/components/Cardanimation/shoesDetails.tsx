import Image from "next/image";
import Link from "next/link";
import React from "react";
import Player from "../../interfaces/Player";
import { LinkCard, DetailsContainer, MediumText, SmallText, SpacedHorizontalContainer, SpacedHorizontalContainerFooter } from "../../styles/components/ShoesDetails";
import { Marginer } from "../Marginer/index";

interface CardAnimationProps {
    player: Player
}

export function ShoesDetails({ player }: CardAnimationProps) {
    const { nacionalidade } = player;

    const qtdBolaDeOuro = () => {
        var rows = [];
        for (var i = 1; i <= player.melhorDoMundo; i++) {
            rows.push(<Image key={i} alt="Bola de Ouro" src="/player/ballon-door.png" width="30px" height="35px" />);
        }
        return rows;
    }

    return (
        <DetailsContainer>
            <SmallText>{player.posicao}</SmallText>
            <SpacedHorizontalContainer>
                <MediumText>{player.nome}</MediumText>
                <Image src={nacionalidade.bandeira} 
                    alt={nacionalidade.nome}
                    width="50px" height="40px"
                />
            </SpacedHorizontalContainer>
            <Marginer direction="vertical" margin="1.2em" />
            <SpacedHorizontalContainerFooter>
                {qtdBolaDeOuro()}
            </SpacedHorizontalContainerFooter>
            <SpacedHorizontalContainerFooter>
            <Link href={`/player/${player.id}`} passHref>
                <LinkCard>
                    <SmallText> Mais detalhes...</SmallText>
                    </LinkCard>
            </Link>
            </SpacedHorizontalContainerFooter>

        </DetailsContainer>
    );
}