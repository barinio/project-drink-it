import MounthStatsTable from 'components/MonthStatsTable/MonthStatsTable';
import { Section } from 'components/Section/Section';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
import { DailyNorma } from 'components/DailyNorma/dailyNorma';

const HomePage = () => {
  return (
    <>
      <Section title="Water Tracker">
        <DailyNorma />
        <WaterRatioPanel />
        <TodayWaterList />
        <MounthStatsTable />
      </Section>
    </>
  );
};

export default HomePage;
