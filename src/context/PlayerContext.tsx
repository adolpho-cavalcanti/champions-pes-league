import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import Player from '../interfaces/Player';

interface PlayerProviderData {
    // quandoEscrever: (value: string) => void;
    onSearch: (value: string) => void;
    search: string;
    playersSearched: Player[];
}

interface PlayerProviderProps {
    children: ReactNode;
    players: Player[];
}

export const PlayerContext = createContext({} as PlayerProviderData);

export function PlayerProvider({ children, players }: PlayerProviderProps) {

    const [search, setSearch] = useState('');

    function onSearch(texto) {
        setSearch(texto);
    }

    const playersSearched = useMemo(() => {
        const lowerSearch = search.toLowerCase();
        return players.filter(({ nome }) => nome.toLowerCase().includes(lowerSearch));
    }, [players, search]);

    return(
        <PlayerContext.Provider value={{
            onSearch,
            search,
            playersSearched
        }}>
            {children}
        </PlayerContext.Provider>
    );
}