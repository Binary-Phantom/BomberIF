import styled, {keyframes} from 'styled-components'


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

/* ===========================
   CONTAINERS
   */

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const HelpSection = styled.div<{ isPortrait: boolean }>`
  font-family: 'Press Start 2P', monospace;
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
    position: relative;

    background-color: rgba(104, 7, 169, 0.75);
    backdrop-filter: blur(2px);

    border: 2px solid rgba(255, 81, 0, 0.78);
    box-shadow:
      inset 0 0 0 2px rgba(0, 0, 0, 0.8),
    -1px 0 2px  rgba(255, 140, 0, 0.35),
     1px 0 2px rgba(180, 0, 255, 0.35),
     0 0 18px rgba(0, 0, 0, 0.85);

    animation: ${scanlineFade} 0.6s ease-out both;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }
  }

  > div::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
  }

  > div:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.75);
  }

  h1 {
    margin: 1.8rem 0 1.2rem;
    letter-spacing: 1.4px;
    font-size: 35px;
  }

  p {
    max-width: 420px;
    margin: 0.9rem 0;
    line-height: 1.4;
    letter-spacing: 0.6px;
    font-size: 15px;
  }

  li strong {
  color: #ffd966;
}


  img {
    margin: 1.8rem 0;
    image-rendering: pixelated;
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
export const Highlight = styled.span`
  color: #ffd966;
  text-shadow:
    1px 1px 0 #000,
    0 0 6px rgba(255, 217, 102, 0.6);
`
export const Highlight2 = styled.span`
  color: #00f974ff;
  text-shadow:
    1px 1px 0 rgba(0, 242, 255, 0.6);
    0 0 6px #0c7db5ff,
`
export const Highlight3 = styled.span`
  color: #ffd966;
  font-size: 28px;
  margin: 1.8rem 0 1.2rem;
  line-height: 1.3;
  text-shadow:
    1px 1px 0 rgba(0, 242, 255, 0.83);
    0 0 6px #0b99e0ff,
`
export const Highlight4 = styled.span`
  color: #00f974ff;
  font-size: 35px;
  margin: 1.8rem 0 1.2rem;
  line-height: 1.3;
  text-shadow:
    1px 1px 0 rgba(0, 242, 255, 0.6);
    0 0 6px #0c7db5ff,
`

export const Spacer = styled.div<{ size?: 'sm' | 'md' | 'lg' }>`
  height: ${({ size }) =>
    size === 'sm' ? '0.75rem' :
    size === 'lg' ? '2.5rem' :
    '1.5rem'};
`
export const PowerUpsTitle = styled.h1`
  color: #00f974ff;
  font-size: 35px;
  margin: 1.8rem 0 1.2rem;
  line-height: 1.3;
  text-shadow:
    1px 1px 0 rgba(0, 242, 255, 0.6);
    0 0 6px #0c7db5ff,
`

