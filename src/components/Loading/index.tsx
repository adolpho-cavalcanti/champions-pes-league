import { LoadingContainer, Mensagem } from "../../styles/components/Loading";

interface LoadingProps {
    mensagem: string,
}

export default function Loading({ mensagem }: LoadingProps) {
    return (
        <LoadingContainer>
            <Mensagem>{mensagem}</Mensagem>
        </LoadingContainer>
    )
}