import styled, { keyframes } from 'styled-components'


// CRT BCKGND (PRIMEIRO)

const crtBackground = `
  position: relative;
  background-color: rgba(40, 10, 60, 0.75); /* roxo */
  border: 2px solid rgba(255, 81, 0, 0.78); /* laranja */
  box-shadow:
    inset 0 0 0 2px rgba(0, 0, 0, 0.8),
    -1px 0 2px  rgba(255, 140, 0, 0.35),
     1px 0 2px rgba(180, 0, 255, 0.35),
     0 0 18px rgba(0, 0, 0, 0.85);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 140, 0, 0.05),
      rgba(255, 140, 0, 0.05) 1px,
      rgba(180, 0, 255, 0.04) 2px,
      transparent 3px
    );
    pointer-events: none;
  }
`


// ANIMAÇÃO

const scanlineFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
    filter: brightness(0.85);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: brightness(1);
  }
`


// COMPONENTES

export const AuthorContainer = styled.div<{ isPortrait: boolean }>`
  display: flex;
  flex-direction: ${({ isPortrait }) => (isPortrait ? 'column' : 'row')};
  width: 100%;

  > div {
    ${crtBackground};

    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 255px;
    padding: 1rem;

    animation: ${scanlineFade} 0.6s ease-out both;
  }

  img {
    max-width: 192px;
    width: 75%;
    image-rendering: pixelated;
  }
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const GameContainer = styled.div`
  ${crtBackground};

  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 255px;
  padding: 1.5rem;
  width: 100%;
  text-align: center;

  animation: ${scanlineFade} 0.6s ease-out both;

  img {
    max-width: 100%;
    margin-top: 1rem;
    image-rendering: pixelated;
  }

  svg {
    fill: #fff;
    width: 33%;
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