import styled from 'styled-components';
export const FormStyle = styled.form`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    max-width: 280px;
    h3 {
      margin: 0 0 16px 0;
      font-family: 'Roboto', sans-serif;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px;
      color: var(--primery-color-black);
    }
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }

    label {
      margin-bottom: 8px;
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      color: var(--primery-color-black);
    }
    input {
      padding: 12px 10px;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      color: var(--secondary-color-blue);
      border-radius: 6px;
      border: 1px solid var(--btn-color-light-blue);
    }
    input:focus {
      color: var(--primery-color-blue);
      outline: none;
    }
    input::placeholder {
      color: var(--secondary-color-blue);
    }
    input:invalid {
      outline: 1px solid var(--btn-color-red);
      color: var(--btn-color-red);
    }
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      color: var(--btn-color-red);
      margin-top: 4px;
    }
    button {
      cursor: pointer;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      display: flex;
      padding: 10px 30px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
      background-color: var(--primery-color-blue);
      border: none;
      color: var(--primery-color-white);
      margin-bottom: 16px;
    }
    button:hover,
    button:focus {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    button:active {
      box-shadow: none;
    }
    a {
      color: var(--primery-color-blue);
      text-decoration: none;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    a:hover,
    a:focus {
      color: #ff9d43;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 336px;
    button {
      cursor: pointer;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      display: flex;
      padding: 10px 30px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
      background-color: var(--primery-color-blue);
      border: none;
      color: var(--primery-color-white);
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    max-width: 384px;
  }
`;
