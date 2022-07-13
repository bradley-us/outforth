import styled from 'styled-components';

interface IContainer {
  gridColumns?: string;
  theme?: any;
  py?: string | number;
}
export const Container = styled.div<IContainer>`
  display: grid;
  grid-template-columns: repeat(${(props: any) => props.gridColumns || '3'}, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: ${({py}) => py || '0'}px 40px;
  position: relative;

  @media ${(props: any) => props.theme.breakpoints.sm} {
  }
`

interface IContentWrapper {
  width?: number | string;
  maxWidth?: number | string;
}
export const ContentWrapper = styled.div<IContentWrapper>`
  width: ${({width}) => width}px;
  max-width: ${({maxWidth}) => maxWidth}px;
`

interface IFlexRowContainer {
  justify?: string;
  align?: string;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  mt?: boolean;
  gap?: number | string;
  color?: string;
}
export const FlexRowContainer = styled.div<IFlexRowContainer>`
  width: ${(props: any) => props.width || 'auto'};
  min-width: ${(props: any) => props.minWidth || 'auto'};
  max-width: ${(props: any) => props.maxWidth || 'auto'};
  margin-top: ${({ mt }) => mt ? '7rem' : ''};
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap || '20px'}px;
  justify-content: ${(props: any) => props.justify || 'center'};
  align-items: ${(props: any) => props.align || 'center'};
  color: ${(props: any) => props.color || '#525252'}
`

interface IFlexColumnContainer {
  justify?: string;
  align?: string;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  mt?: boolean;
  gap?: number | string;
  color?: string;
}
export const FlexColumnContainer = styled.div<IFlexColumnContainer>`
  width: ${(props: any) => props.width || 'auto'};
  min-width: ${(props: any) => props.minWidth || 'auto'};
  max-width: ${(props: any) => props.maxWidth || 'auto'};
  margin-top: ${({ mt }) => mt ? '7rem' : ''};
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || '20px'}px;
  justify-content: ${(props: any) => props.justify || 'center'};
  align-items: ${(props: any) => props.align || 'center'};
  color: ${(props: any) => props.color || '#525252'}
`

interface ITitle {
  bgDir?: string;
  bgColor1?: string;
  bgColor2?: string;
  bgColor3?: string;
  fontSize?: string | number;
}
export const Title = styled.h1<ITitle>`
  display: inline-block;
  margin: 0;
  font-size: ${(props: any) => props.fontSize || '52'}px;
  font-weight: 900;
  background: linear-gradient(to ${(props: any) => props.bgDir || 'right'},
    ${(props: any) => props.bgColor1 || '#8EF9F8'} 0%,
    ${(props: any) => props.bgColor2 || '#9CE0F9'} 50%,
    ${(props: any) => props.bgColor3 || '#E6F1F7'} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

interface ISubtitle {
  bgDir?: string;
  bgColor1?: string;
  bgColor2?: string;
  bgColor3?: string;
  fontSize?: string | number;
  bold?: boolean;
  pl?: boolean;
}
export const Subtitle = styled.h2<ISubtitle>`
  display: inline-block;
  margin: 20px 0;
  padding: 0 0 0 ${(props: any) => props.pl ? '20':'0'}px;
  font-size: ${(props: any) => props.fontSize || '24'}px;
  font-weight: ${(props: any) => props.bold ? 'bold' : 'normal'};
  background: linear-gradient(to ${(props: any) => props.bgDir || 'right'},
    ${(props: any) => props.bgColor1 || '#b7b7b7'} 0%,
    ${(props: any) => props.bgColor2} 50%,
    ${(props: any) => props.bgColor3 || '#b7b7b7'} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

interface IText {
  color?: string;
  fontSize?: string | number;
  pl?: boolean;
  bold?: boolean;
}
export const Text = styled.p<IText>`
  color: ${(props: any) => props.color || '#525252'}
  display: inline-block;
  margin: 10px 0;
  padding: 0 0 0 ${(props: any) => props.pl ? '20':'0'}px;
  font-size: ${(props: any) => props.fontSize || '18'}px;
  font-weight: ${({ bold }) => bold? 'bold' : '500'};
`

interface IImgWrapper {
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  pointer?: boolean;
}
export const ImgWrapper = styled.figure<IImgWrapper>`
  width: ${(props: any) => props.width || 'auto'};
  min-width: ${(props: any) => props.minWidth || 'auto'};
  max-width: ${(props: any) => props.maxWidth || 'auto'};
  // margin: 50px 0;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.4s;
  cursor: ${({pointer}) => pointer ? 'pointer' : ''};
`