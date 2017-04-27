import React from 'react'

/** Aula de passar dois componentes */

/** Tanto faz o formato com parentes ou sem parentes */
const Primeiro = props => (
    <h1>Primeiro componente</h1>
)

const Segundo = props => <h1>Segundo componente</h1>

export { Primeiro, Segundo }