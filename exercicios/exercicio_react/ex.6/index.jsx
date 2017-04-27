import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        <Member name="João Marcos" lastName="Cintra" />
        <Member name="Adriely" lastName="Cintra" />
    </Family>  , 
    document.getElementById('app')
)