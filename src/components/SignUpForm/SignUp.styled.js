import styled from 'styled-components';

export const SignupForm = styled.form`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    max-width: 280px;
    h3 {
      color: var(--primery-color-black);
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 1.2;

      margin-bottom: 16px;
    }
    label {
      color: var(--primery-color-black);
      font-size: 18px;
      line-height: 1.3;

      margin-bottom: 8px;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    .password-wrapper {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      padding: 12px 10px;
      margin: 0;

      border-radius: 6px;
      background: var(--primery-color-white);
    }
    input {
      border: none;
      width: 234px;

      color: var(--primery-color-blue);
      line-height: 1.2;
    }
    input:focus {
      color: var(--primery-color-blue);
      font-size: 16px;
      line-height: 1.2;

      outline: none;
    }
    input::placeholder {
      color: var(--secondary-color-blue);
      font-size: 16px;
      line-height: 1.2;
    }
    .eye-icon,
    .eye-icon:hover,
    .eye-icon:focus {
      background-color: transparent;
      box-shadow: none;
      padding: 0;
      margin: 0;
    }
    svg {
      fill: var(--primery-color-blue);
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 8px 30px;

      border: none;
      border-radius: 10px;
      background: var(--primery-color-blue);
      box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

      color: var(--primery-color-white);
      line-height: 1.2;
      font-weight: 500;

      margin-bottom: 16px;
    }
    button:active {
      box-shadow: none;
    }
    button:hover,
    button:focus {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    a {
      color: var(--primery-color-blue);
      font-size: 16px;
      line-height: 1.2;
    }
    a:hover,
    a:focus {
      color: #ff9d43;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 336px;
    input {
      width: 290px;
    }
    button {
      font-size: 18px;
      padding: 10px 30px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 384px;
    input {
      width: 338px;
    }
  }
`;
export const ErrorMessage = styled.span`
  @media screen and (min-width: 320px) {
    color: var(--btn-color-red);
    font-size: 14px;
    line-height: 1.2;

    margin-top: 8px;
  }
`;
