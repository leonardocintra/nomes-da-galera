interface EntradaProps {
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    px-4 py-2 border border-purple-500 rounded-lg 
                    focus:outline-none bg-gray-100 
                    ${props.somenteLeitura ? '' : 'focus:bg-yellow-100'}`
                }
                type={props.tipo ?? 'text'} name="" id="" value={props.valor} readOnly={props.somenteLeitura} />
        </div>
    )
}