import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CustomCard } from '../../card/CustomCard';

/**
 * AssetCard
 * 미디어 에셋을 표시하고 다운로드 등의 액션을 제공하는 카드
 */
export const AssetCard = ({ data }) => {
  const { type, title, category, resolution, duration, thumbnail, url, author, downloadCount } = data;
  const isVideo = type === 'video';

  const handleDownload = (e) => {
    e.stopPropagation();
    console.log(`Downloading ${title}...`);
  };

  return (
    <CustomCard
      layout="vertical"
      mediaSrc={thumbnail || url}
      mediaRatio="4/3" // 갤러리 느낌을 위해 4/3 비율 사용
      isInteractive
      contentPadding="sm"
      mediaSlot={
        isVideo && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <PlayArrowIcon />
          </Box>
        )
      }
      sx={{
        height: '100%',
        '&:hover .asset-actions': {
          opacity: 1,
        },
      }}
    >
      {/* Hover Overlay Actions */}
      <Box
        className="asset-actions"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          opacity: 0,
          transition: 'opacity 0.2s',
          zIndex: 2,
        }}
      >
        <IconButton
          size="small"
          onClick={handleDownload}
          sx={{
            backgroundColor: 'white',
            '&:hover': { backgroundColor: 'grey.100' },
            boxShadow: 1,
          }}
        >
          <DownloadIcon fontSize="small" color="action" />
        </IconButton>
      </Box>

      {/* Content */}
      <Stack spacing={0.5}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" noWrap sx={{ fontWeight: 600, maxWidth: '70%' }}>
            {title}
          </Typography>
          <Chip
            label={resolution}
            size="small"
            sx={{ height: 20, fontSize: 10, fontWeight: 600 }}
          />
        </Stack>
        
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="caption" color="text.secondary">
            by {author}
          </Typography>
          {isVideo && (
            <Typography variant="caption" color="text.secondary">
              {duration}s
            </Typography>
          )}
        </Stack>
      </Stack>
    </CustomCard>
  );
};

