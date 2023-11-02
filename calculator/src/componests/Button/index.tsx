"use client"
import React, { Component } from "react";

// Defina a interface para as props do componente Button
interface ButtonProps {
    key: string | number;
    text: string | number;
}

class Button extends Component<ButtonProps> {
    render() {
        const { text } = this.props;
        return (
            <button className="grid-item ">
                {text}
            </button>
        );
    }
}

export { Button };