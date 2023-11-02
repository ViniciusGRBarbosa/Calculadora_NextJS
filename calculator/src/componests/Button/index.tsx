"use client"
import React, { Component } from "react";

// Defina a interface para as props do componente Button
interface ButtonProps {
    key: string | number;
    text: string | number;
    onClick?: () => void;
}

class Button extends Component<ButtonProps> {
    render() {
        const { text, onClick } = this.props;
        return (
            <button className="grid-item " onClick={onClick}>
                {text}
            </button>
        );
    }
}

export { Button };