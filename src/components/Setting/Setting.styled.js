import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: visible;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Modal = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  width: 280px;
  padding: 32px 12px;
  border-radius: 10px;

  transform: translate(-50%, 0) scale(1);
  background-color: var(--primery-color-white);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  h3 {
    color: var(--primery-color-black);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    margin-bottom: 8px;
  }
`;
export const CaptionBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  h2 {
    color: var(--primery-color-black);
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }

  button {
    display: flex;
    background: none;
    border: none;
    &:is(:hover, :focus) svg {
      stroke: var(--primery-color-black);
    }
  }

  svg {
    fill: none;
    stroke: var(--primery-color-blue);
  }
`;

export const PhotoBlock = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  button {
    display: flex;
    background: none;
    border: none;
    gap: 8px;
    color: var(--primery-color-blue);

    &:is(:hover, :focus) {
      color: var(--primery-color-black);
    }
    &:is(:hover, :focus) svg {
      stroke: var(--primery-color-black);
    }
  }
  svg {
    fill: none;
    stroke: var(--primery-color-blue);
  }
`;
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GenderPart = styled.div`
  & > div {
    display: flex;
    gap: 24px;
  }
`;

export const RadioLabel = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 8px;

    color: var(--primery-color-black);
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const InputHidden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  & + label svg {
    fill: none;
  }
  &:checked + label svg {
    fill: var(--primery-color-blue);
  }
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 12px 10px;

    border-radius: 6px;
    border: 1px solid #d7e3ff;
    line-height: 1.25;
    font-size: 16px;
    color: var(--primery-color-blue);

    &::placeholder {
      color: var(--primery-color-blue);
    }
  }
`;

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  & > div {
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin-bottom: 0;
  }
  h4 {
    color: var(--primery-color-black);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 8px;
  }
  input {
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid var(--btn-color-light-blue);
    line-height: 1.25;
    font-size: 16px;
    color: var(--secondary-color-blue);

    &::placeholder {
      color: var(--secondary-color-blue);
    }
  }
  button {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 12px;
    background: var(--primery-color-white);
    text-transform: uppercase;
    border: none;
  }
  svg {
    fill: none;
    stroke: var(--primery-color-black);
    &:is(:hover, :focus, :active) {
      stroke: var(--primery-color-blue);
    }
  }
`;

export const PasswordInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const BtnSettingSave = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;

  border-radius: 10px;
  background: var(--primery-color-blue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: var(--primery-color-white);
  font-weight: 500;
  line-height: 1.25;
  border: none;
`;
