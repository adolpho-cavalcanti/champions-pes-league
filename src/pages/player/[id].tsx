import PerfilPlayer from "../../components/PerfilPlayer";
import { ModalSalaDeTrofeuProvider } from "../../context/ModalSalaDeTrofeuContext";
import Player from "../../interfaces/Player";
import HeaderSite from "../../components/HeaderSite";
import api from "../../services/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { Page } from "../../styles/pages/Home";

interface PlayerPageProps {
    player: Player
}

export default function PlayerPage({ player }: PlayerPageProps) {
 
    const legendPlayer = player[0];
    return (
        <ModalSalaDeTrofeuProvider player={legendPlayer}>
            <Page>
                <HeaderSite />
                <PerfilPlayer />
            </Page>
        </ModalSalaDeTrofeuProvider>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await api.get('/');
    const players = await res.data;
  
    const paths = players.map((player: Player) => ({
      params: { id: player.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  
export const getStaticProps: GetStaticProps<PlayerPageProps> = async ({ params }) => {
    const res = await api.get(`/${params.id}`);
    const player = await res.data;
  
    return { props: { player } }
}