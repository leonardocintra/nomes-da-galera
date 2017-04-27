import React from 'react'
import ReactDOM from 'react-dom'

import { Primeiro} from './component'

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
    , 
    document.getElementById('app')
)


/* O JEITO ABAIXO O REACT NÃO ACEITA, TEM QUE POR A TAG (DIV)*

 ReactDOM.render(
    <Primeiro />
    <Segundo />
    , 
    document.getElementById('app')
)
 */