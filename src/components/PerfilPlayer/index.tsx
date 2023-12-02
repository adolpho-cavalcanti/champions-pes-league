import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ModalSalaDeTrofeuContext } from "../../context/ModalSalaDeTrofeuContext";
import { ButtonActionsPlayer, ButtonBackHome, ButtonTrophy, CirclePlayer, CircleWrapperPlayer, ContainerPlayer, ContentPlayer, DataPlayer, ImgPlayer, PlayerStyles } from "../../styles/components/PerfilPlayer";

export default function PerfilPlayer() {

    const { modalVisible, setModalVisible, player } = useContext(ModalSalaDeTrofeuContext);
    const router = useRouter();

    const { imagem, nome, posicao, nacionalidade, melhorDoMundo  } = player;

    return(
        <ContainerPlayer>
            {!modalVisible 
                ? 
                <PlayerStyles>
                    <CircleWrapperPlayer>
                        <CirclePlayer />
                    </CircleWrapperPlayer>
                    <ImgPlayer>
                        <motion.img
                            src={imagem} alt={nome}
                            layoutId={imagem}
                            transition={{ duration: 0.5 }}
                        />                        
                    </ImgPlayer>
                    <ContentPlayer>
                        <ButtonActionsPlayer>
                            <ButtonTrophy type="button" onClick={() =>setModalVisible(true)}>TROFÉUS</ButtonTrophy>
                            <ButtonBackHome type="button" onClick={() => router.push('/')}>
                                X
                            </ButtonBackHome>
                        </ButtonActionsPlayer>
                        <DataPlayer>
                            <span>Nome: {nome}</span>
                            <span>Posição: {posicao}</span>
                            <span>País: {nacionalidade.nome}</span>
                            <div>
                                <Image alt="Bola de Ouro" src="/player/ballon-door.png" width="35px" height="35px" />
                                <span>{melhorDoMundo}</span>
                            </div>
                        </DataPlayer>
                    </ContentPlayer>
                </PlayerStyles>
                :
                ''
            }
        </ContainerPlayer>
    )
}