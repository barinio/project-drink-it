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
      stroke: var(--primery-color-blue);
    }
  }

  svg {
    fill: none;
    stroke: var(--primery-color-black);
  }
`;

export const PhotoBlock = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 8px;
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
export const FormStyle = styled.form``;

export const GenderPart = styled.div`
  div {
    display: flex;
  }
`;
