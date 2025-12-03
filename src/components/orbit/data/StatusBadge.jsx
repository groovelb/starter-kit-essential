import Chip from '@mui/material/Chip';

/**
 * StatusBadge
 * 상태값을 시각적인 뱃지로 변환
 */
export const StatusBadge = ({ status, size = 'medium' }) => {
  const getStatusColor = (status) => {
    const map = {
      'Completed': 'success',
      'In Progress': 'primary',
      'Review': 'info',
      'Delayed': 'error',
      'Planning': 'default',
      'Urgent': 'warning',
    };
    return map[status] || 'default';
  };

  return (
    <Chip
      label={status}
      size={size}
      color={getStatusColor(status)}
      variant="outlined" // 너무 강하지 않게 Outlined 사용
      sx={{ 
        fontWeight: 600,
        borderWidth: 1.5,
      }}
    />
  );
};

