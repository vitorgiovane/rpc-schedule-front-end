import styled from 'styled-components'

interface ContainerProps {
  backgroundImage: string
}

export const Container = styled.div`
  position: fixed;
  right: 0;
  height: 100vh;
  width: calc((100vw - 300px) - ((100vw - 300px) / 3));
  z-index: -1;

  > div.image {
    background: linear-gradient(180deg, rgba(32, 33, 42, 0) 50%, rgba(32, 33, 42, 1) 96%),
      linear-gradient(180deg, rgba(32, 33, 42, 0) 60%, rgba(32, 33, 42, 1) 96%),
      linear-gradient(180deg, rgba(32, 33, 42, 0) 70%, rgba(32, 33, 42, 1) 96%),
      linear-gradient(270deg, rgba(32, 33, 42, 0) 60%, rgba(32, 33, 42, 1) 100%),
      linear-gradient(270deg, rgba(32, 33, 42, 0) 80%, rgba(32, 33, 42, 1) 100%);

    img {
      width: 100%;
      height: auto;
      position: relative;
      z-index: -2;
    }
  }

  div.details {
    margin: -130px 90px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    main {
      display: flex;
      align-items: flex-start;

      h1 {
        font-size: 48px;
        color: #fff;
        margin-bottom: 20px;
      }

      p {
        color: #ddd;
        font-size: 22px;
      }
    }

    .right {
      background-color: #3e3f4a;
      margin-left: 10px;
      border-radius: 20px;
      color: #fff;
      padding: 12px 20px;
      text-align: center;
      line-height: 150%;
      font-weight: bold;
      font-size: 18px;

      span {
        font-weight: normal;
        font-size: 16px;
      }
    }

    .extra-info {
      background-color: #2f80ed;
      color: #fff;
      padding: 10px;
      font-weight: bold;
      margin-top: 20px;
      border-radius: 8px;
    }
  }
`
