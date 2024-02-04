import { SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper className='dark-section'>
      <h2>{title}</h2>
      {children}
    </SectionWrapper>
  );
};
