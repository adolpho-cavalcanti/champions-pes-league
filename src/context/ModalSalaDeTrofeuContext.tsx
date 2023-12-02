import dynamic from "next/dynamic";
import { createContext, ReactNode, useEffect, useState } from 'react';
import Loading from "../components/Loading";
import Player from '../interfaces/Player';

interface ModalSalaDeTrofeuProviderData {
    modalVisible: boolean;
    setModalVisible: (value: boolean) => void;
    player: Player;
}

interface ModalSalaDeTrofeuProviderProps {
    children: ReactNode;
    player: Player
}

const ModalSalaDeTrofeu = dynamic(
    () => import("../components/ModalSalaDeTrofeu"), 
    { loading: () => <Loading mensagem="Carregando..." />, ssr: true }
);

export const ModalSalaDeTrofeuContext = createContext({} as ModalSalaDeTrofeuProviderData);

export function ModalSalaDeTrofeuProvider({children, player}: ModalSalaDeTrofeuProviderProps) {

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <ModalSalaDeTrofeuContext.Provider value={{
            setModalVisible,
            modalVisible,
            player
        }}>
            {children}
            {modalVisible &&
                <ModalSalaDeTrofeu /> 
            }

        </ModalSalaDeTrofeuContext.Provider>
    );
}