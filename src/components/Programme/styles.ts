import styled, { css } from 'styled-components'

interface ContainerProps {
  isOnTheAir: boolean
}

export const Container = styled.a<ContainerProps>`
  background-color: #000;
  display: flex;
  position: relative;
  overflow: hidden;
  color: #fff;
  font-size: 20px;
  height: 240px;
  text-decoration: none;
  cursor: pointer;

  & + a {
    margin-top: 20px;
  }

  > span.is-on-the-air {
    position: absolute;
    z-index: 2;
    margin: 5px 0 0 5px;
    padding: 5px;
    background-color: #f00;
    font-weight: bold;
    font-size: 18px;
    border-radius: 4px;
    display: none;
  }

  ${props =>
    props.isOnTheAir &&
    css`
      border: 6px solid #f00;

      > span.is-on-the-air {
        display: block;
      }
    `}

  > span.start-time {
    position: absolute;
    z-index: 2;
    right: 0;
    background-color: #222;
    padding: 8px 12px;
    border-bottom-left-radius: 10px;
    font-weight: bold;
  }

  > div {
    margin: 0 20px 20px 20px;
    justify-content: flex-end;
    align-self: flex-end;
    h1,
    img {
      position: relative;
      z-index: 2;
    }

    h1 {
      font-size: 30px;
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    }

    img {
      border-radius: 10px;
      border: 2px solid #fff;
    }
  }

  > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 240px;
    object-fit: cover;
    object-position: center center;
    opacity: 0.55;
    transition: 0.4s;
  }

  &:hover {
    /* h1 {
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    } */

    > img {
      opacity: 100%;
    }
  }
`
