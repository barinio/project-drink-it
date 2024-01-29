import MounthStatsTable from 'components/MonthStatsTable/MonthStatsTable';
import { Section } from 'components/Section/Section';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
import { DailyNorma } from 'components/DailyNorma/dailyNorma';

const HomePage = () => {
  return (
    <>
      <Section title="Water Tracker">
        <DailyNorma />
        <WaterRatioPanel />
        <MounthStatsTable />
      </Section>
    </>
  );
};

export default HomePage;
