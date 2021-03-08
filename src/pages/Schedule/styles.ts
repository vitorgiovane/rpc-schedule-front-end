import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 300px;

  img {
    margin-top: 30px;
    margin-left: 30px;
    width: 240px;
  }
`

export const ProgrammeList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 340px;
  padding: 30px 0;
  width: calc((100vw - 300px) / 3);

  > div {
    background-color: #3e3f4a;
    width: 100%;
    height: 240px;

    &::first-child {
      margin-top: 500px;
    }

    & + div {
      margin-top: 20px;
    }
  }
`

export const ProgrammeDetails = styled.div`
  position: fixed;
  right: 0;
  height: 100vh;
  width: calc((100vw - 300px) - ((100vw - 300px) / 3));
  background-color: #333;
  z-index: -1;
`
