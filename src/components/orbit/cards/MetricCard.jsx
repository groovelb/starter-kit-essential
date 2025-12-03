import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import BugReportIcon from '@mui/icons-material/BugReport';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { CustomCard } from '../../card/CustomCard';

const iconMap = {
  work: WorkIcon,
  people: PeopleIcon,
  storage: StorageIcon,
  bug: BugReportIcon,
};

/**
 * MetricCard
 * 대시보드 상단 주요 지표를 표시하는 카드
 */
export const MetricCard = ({ data }) => {
  const { label, value, trend, trendValue, trendLabel, iconType, status } = data;
  const Icon = iconMap[iconType] || WorkIcon;
  const isTrendUp = trend === 'up';

  // 상태 색상
  const colorMap = {
    success: 'success.main',
    warning: 'warning.main',
    error: 'error.main',
    info: 'info.main',
  };
  const statusColor = colorMap[status] || 'text.secondary';

  return (
    <CustomCard
      layout="vertical"
      contentPadding="md"
      sx={{ height: '100%' }}
    >
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'grey.50',
              color: statusColor,
            }}
          >
            <Icon />
          </Box>
          {trend && (
            <Stack direction="row" spacing={0.5} alignItems="center">
              {isTrendUp ? (
                <TrendingUpIcon sx={{ fontSize: 16, color: isTrendUp ? 'success.main' : 'error.main' }} />
              ) : (
                <TrendingDownIcon sx={{ fontSize: 16, color: 'error.main' }} />
              )}
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: isTrendUp ? 'success.main' : 'error.main',
                }}
              >
                {trendValue}
              </Typography>
            </Stack>
          )}
        </Box>

        <Box>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 0.5 }}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </Box>

        {trendLabel && (
          <Typography variant="caption" color="text.disabled">
            {trendLabel}
          </Typography>
        )}
      </Stack>
    </CustomCard>
  );
};

