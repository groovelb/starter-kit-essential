import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import { CustomCard } from './CustomCard';

/**
 * ImageCard 컴포넌트
 *
 * 메인 그리드의 기본 아이템. CustomCard를 확장하여 구현.
 * Hover 시 위치 변경 효과와 액션 버튼 표시.
 *
 * 동작 방식:
 * 1. 사용자가 카드에 마우스를 올리면 카드가 위로 살짝 이동
 * 2. Hover 상태에서 우측 상단에 좋아요/추가 버튼 표시
 * 3. 카드 하단에 제목과 태그 정보 항상 표시
 *
 * Props:
 * @param {string} src - 이미지 URL [Required]
 * @param {string} title - 이미지 제목/설명 [Optional]
 * @param {string[]} tags - 관련 태그 목록 [Optional]
 * @param {function} onLike - 좋아요 버튼 클릭 핸들러 [Optional]
 * @param {function} onAddToBoard - 무드보드 추가 버튼 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ImageCard
 *   src="/image.jpg"
 *   title="Beautiful landscape"
 *   tags={['nature', 'landscape']}
 *   onLike={() => handleLike()}
 *   onAddToBoard={() => handleAdd()}
 * />
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
  /**
   * 액션 버튼 오버레이
   * - Hover 시에만 표시 (opacity 트랜지션)
   * - 좋아요, 무드보드 추가 버튼 제공
   */
  const ActionButtons = (
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
  );

  /**
   * 카드 콘텐츠 (제목 + 태그)
   * - title 또는 tags가 있을 때만 렌더링
   */
  const hasContent = title || tags.length > 0;

  return (
    <CustomCard
      layout="vertical"
      mediaSrc={src}
      mediaAlt={title || 'Image asset'}
      mediaRatio="auto"
      contentPadding={hasContent ? 'sm' : 'none'}
      overlaySlot={ActionButtons}
      sx={{
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          '& .action-buttons': {
            opacity: 1,
          },
        },
        // CustomCard 기본 border 제거 (기존 ImageCard 스타일 유지)
        border: 'none',
        ...sx,
      }}
      {...props}
    >
      {hasContent && (
        <>
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
        </>
      )}
    </CustomCard>
  );
}
