import React, { Component } from 'react'

export default class ClassComponent extends Component {
    // componentes baseado em class é obrigatorio ter pelo menos uma funcção
    render() {
        return (
            <h1>
                { this.props.value }
            </h1>
        )
    }
}
