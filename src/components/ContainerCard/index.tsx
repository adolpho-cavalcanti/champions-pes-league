import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { Container } from "../../styles/pages/Home";
import CardAnimation from "../Cardanimation";

export default function ContainerCard() {
    const { playersSearched } = useContext(PlayerContext);

    return (
        <Container>
            {playersSearched.map((player) => (
                <CardAnimation 
                    key={player.id}
                    player={player}
                    layoutId={player.imagem}
                />
            ))}
        </Container>
    )
}