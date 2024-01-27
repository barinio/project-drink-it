import { Section } from 'components/Section/Section';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';

const HomePage = () => {
  return (
    <>
      <Section title="Water Tracker">
        <WaterRatioPanel />
      </Section>
    </>
  );
};

export default HomePage;
