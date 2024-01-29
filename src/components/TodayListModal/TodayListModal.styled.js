import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1200;

  &.base-modal-enter {
    opacity: 0;
  }

  &.base-modal-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }

  &.base-modal-exit {
    opacity: 1;
  }

  &.base-modal-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in-out 200ms;
  }
`;
export const ModalContent = styled.div`
  translate: -50% -50%;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 280px;
  max-height: 90vh;
  background: var(--primery-color-white);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto;
  z-index: 1200;

  @media screen and (min-width: 768px) {
    min-width: 592px;
  }

  &.modal-content-enter {
    opacity: 0;
    scale: 0.5;
  }

  &.modal-content-enter-active {
    opacity: 1;
    scale: 1;
    transition: opacity 300ms ease-in-out 200ms, scale 200ms ease-in-out 200ms;
  }

  &.modal-content-exit {
    opacity: 1;
    scale: 1;
  }

  &.modal-content-exit-active {
    opacity: 0;
    scale: 0.5;
    transition: opacity 300ms ease-in-out, scale 200ms ease-in-out;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 12px;
  color: var(--primery-color-black);

  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 32px;
  }
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`;

export const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: var(--primery-color-blue);

  &:hover,
  &:focus {
    stroke: var(--secondary-yellow);
  }
`;

export const BoxAddModal = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: var(--primery-color-black);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    min-width: 704px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 592px;
  }
`;

export const PreviousInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  gap: 12px;
  border-radius: 10px;
  background-color: var(--bg-color-light-blue);
  width: 254px;
  margin-bottom: 24px;
`;

export const AddParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: var(--primery-color-black);
  margin-bottom: 12px;
`;

export const AddWater = styled.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Water = styled.p`
  color: var(--primery-color-blue);
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  width: 92px;
  height: 36px;
`;

export const Label = styled.div`
  border-radius: 40px;
  background: var(--btn-color-light-blue);
  padding-left: 10px;
  padding-right: 16px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ButtonMl = styled.button`
  background-color: var(--primery-color-white);
  color: var(--primery-color-blue);
  border-radius: 30px;
  border: 1px solid var(--secondary-color-blue);
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);

  &:hover &:focus {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--primery-color-blue);
`;

export const AddTime = styled.div`
  margin-bottom: 24px;
`;

export const InputTime = styled.input`
  color: var(--primery-color-blue);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--btn-color-light-blue);
  background-color: var(--primery-color-white);

  &::placeholder {
    color: var(--primery-color-blue);
  }

  &:hover {
    color: var(--primery-color-blue);
    border: 1px solid var(--primery-color-blue);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--primery-color-blue);
  }

  &:not(:placeholder-shown) {
    color: var(--primery-color-blue);
  }
`;

export const Input = styled.input`
  color: var(--primery-color-blue);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--btn-color-light-blue);
  background-color: var(--primery-color-white);

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: var(--secondary-color-blue);
  }

  &:hover {
    color: var(--primery-color-blue);
    border: 1px solid var(--primery-color-blue);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--primery-color-blue);
  }

  &:not(:placeholder-shown) {
    color: var(--primery-color-blue);
  }
`;

export const FooterModal = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: var(--primery-color-blue);
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`;

export const AddButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: var(--primery-color-blue);
  color: #fff;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  height: 44px;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  transition: background-color 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;
