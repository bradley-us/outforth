import styled from 'styled-components';

type IPrimaryContainer = {
  bgGradient?: boolean;
  bgColor?: string;
  bgDir?: string;
  bgColor1?: string;
  bgColor2?: string;
  bgColor3?: string;
  minHeight?: string;
  flexbox?: boolean;
}
export const PrimaryContainer = styled.div<IPrimaryContainer>`
  ${(props: any) => props.bgGradient ? 'background' : null}: linear-gradient(to ${(props: any) => props.bgDir || 'bottom'},
  ${(props: any) => props.bgColor1 || '#8EF9F8'} 0%,
  ${(props: any) => props.bgColor2} 50%,
  ${(props: any) => props.bgColor3 || '#E6F1F7'} 100%);

  display: ${({ flexbox }) => flexbox ? 'flex' : 'block'};
  justify-content: center;
  align-items: center;
  position: relative;
  
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  background-color: ${(props: any) => props.bgColor};
  padding: 0px calc(50% - 650px);
`