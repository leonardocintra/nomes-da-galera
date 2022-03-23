interface BotaoProps {
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={`bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 rounded-md ${props.className} `}>
            {props.children}
        </button>
    )
}