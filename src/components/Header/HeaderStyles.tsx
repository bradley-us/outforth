import styled from 'styled-components';

interface IContainerHeader {
  theme?: any;
  gridColumns?: string;
}
export const ContainerHeader = styled.div<IContainerHeader>`
  display: grid;
  grid-template-columns: repeat(${(props: any) => props.gridColumns || '3'}, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 0px calc(50% - 650px);
  padding: 20px 15px;

  @media ${(props: any) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  display: none;

  @media ${(props: any) => props.theme.breakpoints.sm} {
    display: flex;
    position: relative;
    width: 100%;
    gap: 20px;
    padding: 7px 15px;
    justify-content: space-between;
  }
`;

interface ISectionNav {
  theme?: any;
  gridColumns?: string;
}
export const SectionNav = styled.div<ISectionNav>`
  display: grid;
  grid-template-columns: repeat(${(props: any) => props.gridColumns || '3'}, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  align-items: center;
`;

interface ISection {
  width?: string;
  minWidth?: string;
  theme?: any;
}
export const Section = styled.div<ISection>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: ${(props: any) => props.width || 'auto'};
  min-width: ${(props: any) => props.minWidth};
`;