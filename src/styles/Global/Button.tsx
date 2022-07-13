import styled from "styled-components"

interface IButtonGradient {
    color?: string;
    fw?: string;
    bgDir?: string;
    bgColor1?: string;
    bgColor2?: string;
    bgColor3?: string;
}
export const ButtonGradient = styled.button<IButtonGradient>`
    display: flex;
    background: linear-gradient(to ${(props: any) => props.bgDir || 'bottom'},
        ${(props: any) => props.bgColor1 || '#8EF9F8'} 0%,
        ${(props: any) => props.bgColor2 ? props.bgColor2 : null} 50%,
        ${(props: any) => props.bgColor1 || '#E6F1F7'} 100%);
    padding: 1.5rem 3.2rem;
    border: none;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    color: ${(props: any) => props.color || 'black'};
    font-weight: ${(props: any) => props.fw || 'normal'};
`
interface IButton {
  color?: string;
  fw?: string;
  bgColor?: string;
}
export const Button = styled.button<IButton>`
    display: flex;
    background-color: ${(props: any) => props.bgColor || '#3b5998'};
    padding: 1.5rem 3.2rem;
    border: none;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    color: ${(props: any) => props.color || 'white'};
    font-weight: ${(props: any) => props.fw || 'normal'};
`