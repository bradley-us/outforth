import styled from "styled-components"

interface IButtonGradient {
    color?: string;
    fw?: string;
    bgColor1?: string;
    bgColor2?: string;
    bgColor3?: string;
}
export const ButtonGradient = styled.button<IButtonGradient>`
    display: flex;
    background: linear-gradient(to bottom,
        ${(props: any) => props.bgColor1 || '#8EF9F8'},
        ${(props: any) => props.bgColor2 || '#9CE0F9'},
        ${(props: any) => props.bgColor1 || '#E6F1F7'});
    padding: 1rem 3rem;
    border: none;
    border-radius: 50px;
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
    padding: 1rem 3rem;
    border: none;
    border-radius: 50px;
    color: ${(props: any) => props.color || 'white'};
    font-weight: ${(props: any) => props.fw || 'normal'};
`