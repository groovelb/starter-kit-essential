import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';

/**
 * ImageCard 컴포넌트
 *
 * 메인 그리드의 기본 아이템.
 * Masonry Grid에 적합하며, Hover 시 액션 오버레이를 제공한다.
 *
 * Props:
 * @param {string} src - 이미지 URL [Required]
 * @param {string} title - 이미지 제목/설명 [Optional]
 * @param {string[]} tags - 관련 태그 목록 [Optional]
 * @param {function} onLike - 좋아요 버튼 클릭 핸들러 [Optional]
 * @param {function} onAddToBoard - 무드보드 추가 버튼 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 */
export function ImageCard({
  src,
  title,
  tags = [],
  onLike,
  onAddToBoard,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        boxShadow: 1,
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
          '& .action-overlay': {
            opacity: 1,
          },
        },
        ...sx,
      }}
      {...props}
    >
      {/* 이미지 영역 */}
      <Box
        component="img"
        src={src}
        alt={title || 'Image asset'}
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto', // Masonry 레이아웃을 위해 높이 자동
          objectFit: 'cover',
        }}
      />

      {/* Hover 액션 오버레이 */}
      <Box
        className="action-overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          opacity: 0,
          transition: 'opacity 0.2s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        {/* 상단 액션 버튼 */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onLike?.();
            }}
            sx={{
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'white' },
            }}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onAddToBoard?.();
            }}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* 하단 정보 */}
        <Box>
          {title && (
            <Typography
              variant="subtitle2"
              sx={{ color: 'white', fontWeight: 600, mb: 1, textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
            >
              {title}
            </Typography>
          )}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {tags.slice(0, 3).map((tag) => (
              <Chip
                key={tag}
                label={`#${tag}`}
                size="small"
                sx={{
                  height: 20,
                  fontSize: '0.7rem',
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  backdropFilter: 'blur(4px)',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

