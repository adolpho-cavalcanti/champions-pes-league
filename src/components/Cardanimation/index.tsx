import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import Player from "../../interfaces/Player";
import { BottomContainer, CardContainer, Circle, CircleWrapper, Shoes, ShoesWrapper, TopContainer } from "../../styles/components/CardAnimation";
import PowerSkill from "../PowerSkill";
import { ShoesDetails } from "./shoesDetails";

interface CardAnimationProps {
    player: Player
    layoutId: string
}

export default function CardAnimation({ player, layoutId }: CardAnimationProps) {
    const { titulos } = player;
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
    return (
        <CardContainer
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
        >
            <TopContainer>
                <CircleWrapper>
                    <Circle />
                </CircleWrapper>
                <ShoesWrapper>
                    <Shoes
                        style={{ x, y, rotateX, rotateY, z: 100000 }}
                        drag
                        dragElastic={0.12}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <motion.img src={player.imagem} alt={`Foto ${player.nome}`}
                            layoutId={player.imagem}
                        />
                    </Shoes>
                </ShoesWrapper>
            </TopContainer>
            <BottomContainer>
                <ShoesDetails player={player} />
            </BottomContainer>
        </CardContainer>
    )
}