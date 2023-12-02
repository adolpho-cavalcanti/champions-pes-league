import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { BarraDePesquisa } from "../../styles/pages/Home";

export default function InputSearch() {
    const [search, setSearch] = useState('');
    const { onSearch } = useContext(PlayerContext);

    useEffect(() => {
        onSearch(search);
    }, [search]);

    return (
        <BarraDePesquisa>
            <input 
                type="text"
                autoComplete="off"
                placeholder="Procurar a Lenda..." 
                id="playerSearch"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </BarraDePesquisa>
    )
}