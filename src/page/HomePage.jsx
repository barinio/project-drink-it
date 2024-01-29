import MounthStatsTable from 'components/MonthStatsTable/MonthStatsTable';
import { Section } from 'components/Section/Section';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';

const HomePage = () => {
  return (
    <>
      <Section title="Water Tracker">
        <WaterRatioPanel />
        <MounthStatsTable />
      </Section>
    </>
  );
};

export default HomePage;
