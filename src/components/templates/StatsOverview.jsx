import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { MetricCard } from '../orbit/cards/MetricCard';
import { metricData } from '../orbit/data/mock';
import { SectionContainer } from '../container/SectionContainer';

/**
 * StatsOverview
 * 대시보드 상단 통계 템플릿
 * 
 * @param {Array} data - Metric 데이터 배열 (기본값: mock metricData)
 */
export const StatsOverview = ({ data = metricData }) => {
  return (
    <SectionContainer sx={{ py: { xs: 2, md: 4 } }}> {/* 대시보드 상단이라 패딩 조금 줄임 */}
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }}>
            <MetricCard data={item} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
};
