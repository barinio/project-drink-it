import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const TeamModalWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  min-height: 112%;

  .team-modal {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 300px;
    padding: 18px 54px;
    border-radius: 10px;
    transform: translate(-50%, 0) scale(1);
    background: linear-gradient(to bottom, #dae5ce, #d5bac2);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .team-modal-title {
    color: #424242;
    text-align: center;
    font-size: 24px;

    margin-top: 24px;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 64px 24px;
    margin-top: 32px;
  }
  .team-list {
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    border-radius: 20px;
    background-color: #e0e5e9;
  }
  .team-list img {
    object-fit: cover;
    height: 265px;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
  }
  .card-content {
    padding: 13px 0;
  }
  .card-content h3 {
    text-align: center;
    color: #2e2f42;
    font-size: 16px;

    margin-bottom: 8px;
  }
  .card-content p {
    text-align: center;
    color: #434455;
  }
  button {
    position: absolute;
    right: 22px;
    top: 22px;

    display: flex;
    background: none;
    border: none;
    margin-left: auto;
    margin-bottom: 12px;
    &:is(:hover, :focus) svg {
      stroke: var(--primery-color-black);
    }
  }
  svg {
    fill: none;
    stroke: #292929;
  }
  .team-icon-list {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 11px;
  }
  .team-icon-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--primery-color-blue);
    transition: background-color var(--def-transition);
  }
  .team-icon {
    fill: #fff;
    stroke: none;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .team-modal {
      width: 740px;
      padding: 32px 48px;
    }
    .team-list img {
      width: auto;
      height: 205px;
    }
    .team-modal-title {
      font-size: 32px;
    }
    .card-content h3,
    .card-content p {
      font-size: 12px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: flex;
      position: absolute;
      top: 157px;
    }
  }
  @media screen and (min-width: 1024px) {
    .team-modal {
      width: 900px;
    }
    .card-container {
      gap: 64px 32px;
    }
    .team-list img {
      width: auto;
      height: 251px;
    }
    .card-content h3 {
      font-size: 16px;
    }
    .team-icon-link {
      width: 40px;
      height: 40px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      top: 182px;
    }
  }
  @media screen and (min-width: 1440px) {
    .team-modal {
      width: 1250px;
    }
    .team-list img {
      width: auto;
      height: 374px;
    }
    .card-content h3,
    .card-content p {
      font-size: 18px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      top: 238px;
    }
  }
`;
