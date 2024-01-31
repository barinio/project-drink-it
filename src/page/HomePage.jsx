import MounthStatsTable from 'components/MonthStatsTable/MonthStatsTable';

import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
import { DailyNorma } from 'components/DailyNorma/dailyNorma';
import { BottleImg, ContentWrapper, HomePageSection } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <HomePageSection>
        <ContentWrapper>
          <DailyNorma />
          <BottleImg />
          <WaterRatioPanel />
        </ContentWrapper>
        <ContentWrapper className="right-panel">
          <TodayWaterList />
          <MounthStatsTable />
        </ContentWrapper>
      </HomePageSection>
    </>
  );
};

export default HomePage;
