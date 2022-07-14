import styled from 'styled-components';

type IContainer = {
  gridColumns?: string;
  theme?: any;
  py?: string | number;
  pyMD?: string | number;
}
export const Container = styled.div<IContainer>`
  display: grid;
  grid-template-columns: repeat(${(props: any) => props.gridColumns || '3'}, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: ${({py}) => py || '0'}px 40px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: ${({pyMD}) => pyMD || '50'}px 40px;
  }
`

type IContentWrapper = {
  width?: number | string;
  maxWidth?: number | string;
}
export const ContentWrapper = styled.div<IContentWrapper>`
  width: ${({width}) => width}px;
  max-width: ${({maxWidth}) => maxWidth}px;
`

type IFlexRowContainer = {
  justify?: string;
  align?: string;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  mt?: boolean;
  mb?: boolean;
  gap?: number | string;
  color?: string;
}
export const FlexRowContainer = styled.div<IFlexRowContainer>`
  width: ${(props: any) => props.width || 'auto'};
  min-width: ${(props: any) => props.minWidth || 'auto'};
  max-width: ${(props: any) => props.maxWidth || 'auto'};
  margin-top: ${({ mt }) => mt ? '7rem' : ''};
  margin-bottom: ${({ mb }) => mb ? '7rem' : ''};
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap || '20px'}px;
  justify-content: ${(props: any) => props.justify || 'center'};
  align-items: ${(props: any) => props.align || 'center'};
  color: ${(props: any) => props.color || '#525252'};

  @media ${(props) => props.theme.breakpoints.md} {
    flex-wrap: wrap;
  }
`

type IFlexColumnContainer = {
  justify?: string;
  align?: string;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  mt?: boolean;
  mb?: boolean;
  gap?: number | string;
  color?: string;
}
export const FlexColumnContainer = styled.div<IFlexColumnContainer>`
  width: ${(props: any) => props.width || 'auto'};
  min-width: ${(props: any) => props.minWidth || 'auto'};
  max-width: ${(props: any) => props.maxWidth || 'auto'};
  margin-top: ${({ mt }) => mt ? '7rem' : ''};
  margin-bottom: ${({ mb }) => mb ? '7rem' : ''};
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || '20px'}px;
  justify-content: ${(props: any) => props.justify || 'center'};
  align-items: ${(props: any) => props.align || 'center'};
  color: ${(props: any) => props.color || '#525252'};

  @media ${(props) => props.theme.breakpoints.md} {
    flex-wrap: wrap;
  }
`

type ITitle = {
  bgDir?: string;
  bgColor1?: string;
  bgColor2?: string;
  bgColor3?: string;
  fontSize?: string | number;
  fontSizeMD?: string | number;
}
export const Title = styled.h1<ITitle>`
  display: inline-block;
  width: 100%;
  margin: 0;
  font-size: ${(props: any) => props.fontSize || '52'}px;
  font-weight: 900;
  background: linear-gradient(to ${(props: any) => props.bgDir || 'right'},
    ${(props: any) => props.bgColor1 || '#8EF9F8'} 0%,
    ${(props: any) => props.bgColor2 || '#9CE0F9'} 50%,
    ${(props: any) => props.bgColor3 || '#E6F1F7'} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props: any) => props.fontSizeMD}px;
  }
`

type ISubtitle = {
  bgDir?: string;
  bgColor1?: string;
  bgColor2?: string;
  bgColor3?: string;
  fontSize?: string | number;
  fontSizeMD?: string | number;
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

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props: any) => props.fontSizeMD}px;
  }
`

type IText = {
  color?: string;
  fontSize?: string | number;
  fontSizeMD?: string | number;
  alignMD?: string;
  pl?: boolean;
  ml?: boolean;
  mlMD?: boolean;
  lh?: string | number;
  lhMD?: string | number;
  bold?: boolean;
}
export const Text = styled.p<IText>`
  color: ${(props: any) => props.color || '#525252'}
  display: inline-block;
  width: 100%;
  text-align: center;
  line-height: ${(props: any) => props.lh || '25'}px;
  margin: 10px 0 10px ${(props: any) => props.ml ? '10' : '0'}px;
  padding: 0 0 0 ${(props: any) => props.pl ? '20':'0'}px;
  font-size: ${(props: any) => props.fontSize || '18'}px;
  font-weight: ${({ bold }) => bold? 'bold' : '500'};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props: any) => props.fontSizeMD}px;
    text-align: ${(props: any) => props.alignMD || 'center'};
    line-height: ${(props: any) => props.lhMD || '25'}px;
    margin: inherit 0 inherit ${(props: any) => props.mlMD ? '0' : '10'}px;
  }
`

type IImgWrapper = {
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

type ISectionDivider = {
  width?: string | number;
  divider?: boolean;
  colorAlt?: boolean;
}
export const SectionDivider = styled.div<ISectionDivider>`

  width: ${({ width }) => width || '64'}px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`

type IBox = {
  fontSize?: string | number;
  fontSizeMD?: string | number;
  bgGradient?: boolean;
  bgColor?: string;
  bgDir?: string;
  bgColor1?: string;
  bgColor2?: string;
  bgColor3?: string;
  py?: string | number;
  px?: string | number;
  br?: string | number;
  bold?: boolean;
  color?: string;
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
}
export const Box = styled.span<IBox>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

  border-radius: ${(props: any) => props.br || '5'}px;

  width: ${(props: any) => props.width || 'auto'};
  min-width: ${(props: any) => props.minWidth || 'auto'};
  max-width: ${(props: any) => props.maxWidth || 'auto'};

  ${(props: any) => props.bgGradient ? 'background' : null}: linear-gradient(to ${(props: any) => props.bgDir || 'bottom'},
  ${(props: any) => props.bgColor1 || '#8EF9F8'} 0%,
  ${(props: any) => props.bgColor2 || '#E6F1F7'} 100%);

  font-weight: ${({ bold }) => bold? 'bold' : '500'};
  font-size: ${(props: any) => props.fontSize || '18'}px;

  color: ${(props: any) => props.color || '#525252'};

  background-color: ${(props: any) => props.bgColor};
  
  padding: ${(props: any) => props.py || '8'}px ${(props: any) => props.px || '16'}px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props: any) => props.fontSizeMD}px;
  }
`