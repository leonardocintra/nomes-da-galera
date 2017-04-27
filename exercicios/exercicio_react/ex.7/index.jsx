import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Faleiros'>
        <Member name='João Marcos' />
        <Member name='Adriely' />
        <Member name='Juliana' />
    </Family>  , 
    document.getElementById('app')
)