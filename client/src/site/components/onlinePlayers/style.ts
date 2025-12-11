import styled from 'styled-components'

export const Container = styled.div<{loading:boolean}>`
  background-color: rgba(0, 255, 26, 1);
  opacity: ${({loading}) => loading ? 0.5 : 1};
  padding: 0.25rem 0.5rem;
  position: relative;
  transition: 0.2s;
  width: fit-content;
  z-index: 1;
  &:hover {
    background-color: rgba(255, 0, 217, 1);
    color: rgba(0, 255, 98, 1);
    cursor: pointer;
  }
`