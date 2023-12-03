import HeaderSite from "../../components/HeaderSite";
import Player from "../../interfaces/Player";
import { Page } from "../../styles/pages/Home";
import InputSearch from "../../components/InputSearch";
import { PlayerProvider } from "../../context/PlayerContext";
import ContainerCard from "../../components/ContainerCard";
import SorteioTeams from "../../components/SorteioTeams";
import api from "../../services/api";
import { GetServerSideProps } from "next";

interface IPlayerProps {
  players: Player[];
}

export default function Home({ players }: IPlayerProps) {
  return (
    <PlayerProvider players={players}>
      <Page>
        <HeaderSite />
        <SorteioTeams />
      </Page>
    </PlayerProvider>
  );
}

export const getServerSideProps: GetServerSideProps<
  IPlayerProps
> = async () => {
  const result = await api.get("/");
  const players = await result.data;
  return {
    props: {
      players,
    },
  };
};
