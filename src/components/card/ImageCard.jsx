import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';

/**
 * ImageCard 컴포넌트
 *
 * 메인 그리드의 기본 아이템.
 * Hover 시 위치 변경 효과와 액션 버튼 표시.
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
        transition: 'transform 0.2s',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          '& .action-buttons': {
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
          height: 'auto',
          objectFit: 'cover',
        }}
      />

      {/* 액션 버튼 (Hover 시 표시) */}
      <Box
        className="action-buttons"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          display: 'flex',
          gap: 0.5,
          opacity: 0,
          transition: 'opacity 0.2s',
        }}
      >
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onLike?.();
          }}
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
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
            boxShadow: 1,
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* 카드 하단 정보 (항상 표시) */}
      {(title || tags.length > 0) && (
        <Box sx={{ p: 1.5 }}>
          {title && (
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                mb: tags.length > 0 ? 1 : 0,
              }}
            >
              {title}
            </Typography>
          )}
          {tags.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {tags.slice(0, 3).map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: '0.7rem',
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
