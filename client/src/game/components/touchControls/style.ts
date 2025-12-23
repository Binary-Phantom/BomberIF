import styled from 'styled-components'

/* =========================
   CONTAINER GERAL
========================= */
export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

/* =========================
   BOTÃO DE AÇÃO (BOMBA)
========================= */
export const ActionContainer = styled.div<{ isPortrait: boolean }>`
  bottom: ${({ isPortrait }) => (isPortrait ? '15%' : 'auto')};
  height: 100%;
  max-height: 96px;
  max-width: 96px;
  position: absolute;
  right: 4%;
  width: 100%;

  /* 🔴 cor do botão de ação */
  color: #bf0707;
  opacity: 0.85;

  svg:active {
    transform: scale(0.92);
    opacity: 1;
  }
`

/* =========================
   CONTROLES DE MOVIMENTO
========================= */
export const MoveContainer = styled.div<{ isPortrait: boolean }>`
  align-items: ${({ isPortrait }) => (isPortrait ? 'flex-end' : 'center')};
  display: flex;
  height: 100%;
  justify-content: ${({ isPortrait }) =>
    isPortrait ? 'center' : 'flex-start'};
  left: 0;
  min-width: 50%;
  padding-bottom: ${({ isPortrait }) => (isPortrait ? '15%' : '0')};
  padding-left: ${({ isPortrait }) => (isPortrait ? '0' : '2%')};
  position: absolute;
  top: 0;

  /* ⚪ cor do D-pad */
  color: rgba(255, 255, 255, 0.45);

  svg:active {
    transform: scale(0.92);
    color: rgba(255, 255, 255, 0.75);
  }
`

/* =========================
   BASE DO D-PAD
========================= */
export const ControlsContainer = styled.div`
  height: 192px;
  position: relative;
  width: 192px;
`

/* =========================
   HORIZONTAL (LEFT / RIGHT)
========================= */
export const HorizontalControls = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  width: 100%;

  & > :nth-child(1) {
    margin-right: 2px;
  }
`

/* =========================
   VERTICAL (UP / DOWN)
========================= */
export const VerticalControls = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  translate: -50% -50%;

  & > :nth-child(1) {
    margin-bottom: 2px;
  }
`






/* =========================
   BOTÕES CLL ANTIGOS
========================= */



{/*export const ActionContainer = styled.div<{isPortrait:boolean}>`
  bottom: ${({isPortrait}) => isPortrait ? '15%' : 'auto'};
  height: 100%;
  max-height: 96px;
  max-width: 96px;
  position: absolute;
  right: 4%;
  width: 100%;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  fill: #bf0707ff;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 50%;
  position: absolute;
  top: 0;
  width: 100%;
`

export const ControlsContainer = styled.div`
  height: 192px;
  position: relative;
  width: 192px;
`

export const HorizontalControls = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  width: 100%;
  & > :nth-child(1) {
    margin-right: 2px;
  }
`

export const MoveContainer = styled.div<{isPortrait:boolean}>`
  align-items: ${({isPortrait}) => isPortrait ? 'flex-end' : 'center'};
  display: flex;
  height: 100%;
  justify-content: ${({isPortrait}) => isPortrait ? 'center' : 'flex-start'};
  left: 0;
  min-width: 50%;
  padding-bottom: ${({isPortrait}) => isPortrait ? '15%' : '0'};
  padding-left: ${({isPortrait}) => isPortrait ? '0' : '2%'};
  position: absolute;
  top: 0;
`

export const VerticalControls = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  translate: -50% -50%;
  & > :nth-child(1) {
    margin-bottom: 2px;
  }
`*/}