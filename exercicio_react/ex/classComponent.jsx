import React, { Component } from 'react'

export default class ClassComponent extends Component {
    // componentes baseado em class é obrigatorio ter pelo menos uma funcção
    // this eh o Components do react (Extends)

    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
    }

    // o state (estado) não é mexido, e sim evoluido
    sum(delta) {
        this.setState({ value: this.state.value + delta })
    }

    render() {
        return (
            <div>
                <h1>{ this.props.label }</h1>
                <h2>{ this.state.value }</h2>
                <button onClick={() => this.sum(1)}>Aumente</button>
                <button onClick={() => this.sum(-1)}>Diminue</button>
            </div>
        )
    }
}
