import styled from 'styled-components'

type ContainerProps = {
  $slow: boolean
}

export const Container = styled.div<ContainerProps>`
  background-image: ${({ $slow }) =>
    $slow ? 'none' : `url("${process.env.PUBLIC_URL}/images/bg/0.jpg")`};
  background-position: top;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: auto;
`
