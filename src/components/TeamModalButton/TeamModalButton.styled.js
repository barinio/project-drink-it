import styled from 'styled-components';

export const TeamModalButtonWrapper = styled.div`
  display: flex;

  .team-modal-btn {
    margin: 0 auto;
    padding: 10px 30px;
    max-width: 180px;
    border-radius: 100px;
    border: 2px solid var(--primery-color-blue);
    background-color: #dde7ff;

    color: var(--primery-color-blue);
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    transition: padding 350ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .team-modal-btn:hover {
    box-shadow: 0 0 18px rgba(64, 123, 255, 0.34);
    padding: 12px 36px;
    transition: padding 350ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
