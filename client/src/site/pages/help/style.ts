import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const HelpSection = styled.div<{ isPortrait: boolean }>`
  display: flex;
  flex-direction: ${({ isPortrait }) => (isPortrait ? 'column' : 'row')};
  width: 100%;

  > div {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 255px;
    padding: 1.5rem;
    text-align: center;

    
    background-color: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(2px);
  }

  /* leve variação entre colunas (opcional) */
  > div:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.75);
  }

  h1 {
    margin-bottom: 1rem;
  }

  p {
    max-width: 420px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 1rem;
    background: rgba(0, 0, 0, 0.25);
    padding: 12px;
    border-radius: 8px;
    text-align: left;
  }

  li img {
    width: 48px;
    height: 48px;
    image-rendering: pixelated;
  }

  li div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  li strong {
    font-size: 16px;
    font-weight: 700;
    color: #ffd966;
    padding-bottom: 4px;
    margin-bottom: 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  li span {
    font-size: 14px;
    opacity: 0.85;
    line-height: 1.4;
  }
`


export const Section = styled.div`
  width: 100%;
  padding: 1.5rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

`


export const Footer = styled.div`
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`
export const Block = styled.div`
  align-items: center;
  background-color: #111;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 255px;
  padding: 1.5rem;
  text-align: center;
`
