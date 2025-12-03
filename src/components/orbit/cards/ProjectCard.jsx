import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { CustomCard } from '../../card/CustomCard';
import { StatusBadge } from '../data/StatusBadge';

/**
 * ProjectCard
 * 프로젝트 진행 상황을 보여주는 카드 (Grid 뷰용)
 */
export const ProjectCard = ({ data }) => {
  const { name, client, status, progress, dueDate, assignees } = data;

  return (
    <CustomCard
      layout="vertical"
      contentPadding="md"
      isInteractive
      sx={{ height: '100%' }}
    >
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <StatusBadge status={status} size="small" />
          <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
            Due {dueDate}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={700} noWrap gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {client}
          </Typography>
        </Box>

        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="caption" fontWeight={600}>Progress</Typography>
            <Typography variant="caption">{progress}%</Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 6, 
              borderRadius: 3,
              backgroundColor: 'grey.100',
              '& .MuiLinearProgress-bar': {
                borderRadius: 3,
                backgroundColor: progress === 100 ? 'success.main' : 'primary.main',
              }
            }} 
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 12 } }}>
            {assignees.map((user) => (
              <Avatar key={user.name} alt={user.name} src={user.avatar} />
            ))}
          </AvatarGroup>
        </Box>
      </Stack>
    </CustomCard>
  );
};

