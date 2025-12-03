import { useState, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { FilterBar } from '../components/templates/FilterBar';
import { UploadModal } from '../components/templates/UploadModal';
import { ImageCard } from '../components/card/ImageCard';
import { ImageDetailModal } from '../components/data/ImageDetailModal';
import { CollectionDropdown } from '../components/input/CollectionDropdown';
import { museAssets } from '../data/museMockData';

/**
 * ArchivePage 컴포넌트
 *
 * MUSE 메인 대시보드 - 레퍼런스 아카이브 탐색 및 관리 화면.
 * 검색, 필터링, 이미지 그리드, 상세 보기, 업로드 기능을 통합.
 *
 * 동작 방식:
 * 1. FilterBar로 검색어/태그 기반 실시간 필터링
 * 2. ImageCard 그리드에서 레퍼런스 탐색
 * 3. 카드 클릭 시 ImageDetailModal로 상세 보기
 * 4. FAB 또는 헤더 버튼으로 UploadModal 진입
 * 5. 무드보드 추가 시 CollectionDropdown 표시
 *
 * Example usage:
 * <ArchivePage />
 */
export function ArchivePage() {
  // 필터 상태
  const [searchValue, setSearchValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

  // 모달 상태
  const [showUpload, setShowUpload] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(-1);

  // 인터랙션 상태
  const [likedIds, setLikedIds] = useState([]);
  const [showBoardDropdown, setShowBoardDropdown] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // 샘플 무드보드 데이터
  const moodboards = [
    { id: 'board-1', name: 'Tech Product Shots', count: 24 },
    { id: 'board-2', name: 'Summer Campaign', count: 18 },
    { id: 'board-3', name: 'Brand Identity', count: 42 },
    { id: 'board-4', name: 'UI References', count: 31 },
  ];

  // 사용 가능한 모든 태그 추출
  const allTags = useMemo(() => {
    const tags = new Set();
    museAssets.forEach((asset) => {
      asset.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // 필터링된 에셋
  const filteredAssets = useMemo(() => {
    let result = [...museAssets];

    // 검색어 필터
    if (searchValue) {
      const searchLower = searchValue.toLowerCase();
      result = result.filter(
        (asset) =>
          asset.title.toLowerCase().includes(searchLower) ||
          asset.tags?.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    // 태그 필터
    if (selectedTags.length > 0) {
      result = result.filter((asset) =>
        selectedTags.some((tag) => asset.tags?.includes(tag))
      );
    }

    // 정렬
    switch (sortBy) {
      case 'oldest':
        result.reverse();
        break;
      case 'name-asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return result;
  }, [searchValue, selectedTags, sortBy]);

  /**
   * 태그 토글
   */
  const handleTagToggle = useCallback((tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  /**
   * 필터 초기화
   */
  const handleClearFilters = useCallback(() => {
    setSearchValue('');
    setSelectedTags([]);
  }, []);

  /**
   * 좋아요 토글
   */
  const handleLike = useCallback((assetId) => {
    setLikedIds((prev) =>
      prev.includes(assetId)
        ? prev.filter((id) => id !== assetId)
        : [...prev, assetId]
    );
  }, []);

  /**
   * 카드 클릭 - 상세 모달 열기
   */
  const handleCardClick = useCallback((asset, index) => {
    setSelectedAsset(asset);
    setSelectedAssetIndex(index);
  }, []);

  /**
   * 상세 모달 닫기
   */
  const handleDetailClose = useCallback(() => {
    setSelectedAsset(null);
    setSelectedAssetIndex(-1);
  }, []);

  /**
   * 이전/다음 이미지 네비게이션
   */
  const handlePrevious = useCallback(() => {
    if (selectedAssetIndex > 0) {
      const newIndex = selectedAssetIndex - 1;
      setSelectedAssetIndex(newIndex);
      setSelectedAsset(filteredAssets[newIndex]);
    }
  }, [selectedAssetIndex, filteredAssets]);

  const handleNext = useCallback(() => {
    if (selectedAssetIndex < filteredAssets.length - 1) {
      const newIndex = selectedAssetIndex + 1;
      setSelectedAssetIndex(newIndex);
      setSelectedAsset(filteredAssets[newIndex]);
    }
  }, [selectedAssetIndex, filteredAssets]);

  /**
   * 무드보드에 추가
   */
  const handleAddToBoard = useCallback((boardId) => {
    const board = moodboards.find((b) => b.id === boardId);
    setSnackbar({
      open: true,
      message: `Added to "${board?.name}"`,
      severity: 'success',
    });
    setShowBoardDropdown(null);
  }, []);

  /**
   * 새 무드보드 생성
   */
  const handleCreateBoard = useCallback((name) => {
    setSnackbar({
      open: true,
      message: `Created new board "${name}"`,
      severity: 'success',
    });
  }, []);

  /**
   * 업로드 완료
   */
  const handleUpload = useCallback(async (data) => {
    console.log('Uploading:', data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSnackbar({
      open: true,
      message: 'Reference uploaded successfully!',
      severity: 'success',
    });
  }, []);

  return (
    <Box>
      {/* 페이지 헤더 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          mb: 4,
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 0.5,
            }}
          >
            Archive
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {filteredAssets.length} references in your collection
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setShowUpload(true)}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            px: 3,
            py: 1.25,
            borderRadius: 2,
          }}
        >
          Upload Reference
        </Button>
      </Box>

      {/* 필터 바 */}
      <FilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        availableTags={allTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        onClearFilters={handleClearFilters}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        resultCount={filteredAssets.length}
      />

      {/* 이미지 그리드 */}
      {filteredAssets.length > 0 ? (
        <Grid container spacing={3}>
          {filteredAssets.map((asset, index) => (
            <Grid
              key={asset.id}
              size={{
                xs: 12,
                sm: 6,
                md: viewMode === 'list' ? 12 : 4,
                lg: viewMode === 'list' ? 12 : 3,
              }}
            >
              <Fade in timeout={300 + index * 50}>
                <Box
                  onClick={() => handleCardClick(asset, index)}
                  sx={{ cursor: 'pointer' }}
                >
                  <ImageCard
                    src={asset.thumbnail}
                    title={asset.title}
                    tags={asset.tags}
                    onLike={(e) => {
                      e?.stopPropagation?.();
                      handleLike(asset.id);
                    }}
                    onAddToBoard={(e) => {
                      e?.stopPropagation?.();
                      setShowBoardDropdown(asset.id);
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            py: 12,
            px: 4,
          }}
        >
          <AutoAwesomeIcon
            sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            No references found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Try adjusting your search or filters
          </Typography>
          <Button
            variant="outlined"
            onClick={handleClearFilters}
            sx={{ textTransform: 'none' }}
          >
            Clear all filters
          </Button>
        </Box>
      )}

      {/* 플로팅 업로드 버튼 (모바일) */}
      <Fab
        color="primary"
        onClick={() => setShowUpload(true)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <AddIcon />
      </Fab>

      {/* 업로드 모달 */}
      <UploadModal
        isOpen={showUpload}
        onClose={() => setShowUpload(false)}
        onUpload={handleUpload}
      />

      {/* 이미지 상세 모달 */}
      <ImageDetailModal
        isOpen={!!selectedAsset}
        onClose={handleDetailClose}
        asset={selectedAsset}
        isLiked={selectedAsset ? likedIds.includes(selectedAsset.id) : false}
        onLike={() => selectedAsset && handleLike(selectedAsset.id)}
        onDownload={() => console.log('Download:', selectedAsset?.title)}
        onShare={() => console.log('Share:', selectedAsset?.title)}
        onEdit={() => console.log('Edit:', selectedAsset?.title)}
        onAddToBoard={() => setShowBoardDropdown(selectedAsset?.id)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedAssetIndex > 0}
        hasNext={selectedAssetIndex < filteredAssets.length - 1}
      />

      {/* 무드보드 선택 드롭다운 (오버레이로 표시) */}
      {showBoardDropdown && (
        <Box
          onClick={() => setShowBoardDropdown(null)}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 2,
              p: 3,
              minWidth: 300,
              boxShadow: 24,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Add to Moodboard
            </Typography>
            <CollectionDropdown
              collections={moodboards}
              onSelect={handleAddToBoard}
              onCreate={handleCreateBoard}
              buttonLabel="Select Board"
              variant="outlined"
              isFullWidth
            />
          </Box>
        </Box>
      )}

      {/* 스낵바 알림 */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ArchivePage;
