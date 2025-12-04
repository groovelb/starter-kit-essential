import { useState, useCallback, useMemo, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Masonry from '@mui/lab/Masonry';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { FilterBar } from '../components/templates/FilterBar';
import { UploadModal } from '../components/templates/UploadModal';
import { ImageCard } from '../components/card/ImageCard';
import { ImageDetailModal } from '../components/data/ImageDetailModal';
import { CollectionDropdown } from '../components/input/CollectionDropdown';
import { PageContainer } from '../components/container/PageContainer';
import museDataStore from '../data/museDataStore';

/**
 * ArchivePage 컴포넌트
 *
 * MUSE 메인 대시보드 - 레퍼런스 아카이브 탐색 및 관리 화면.
 * 검색, 필터링, 이미지 그리드, 상세 보기, 업로드 기능을 통합.
 *
 * 동작 방식:
 * 1. 마운트 시 museDataStore에서 데이터 로드 및 구독
 * 2. FilterBar로 검색어/태그 기반 실시간 필터링
 * 3. ImageCard 그리드에서 레퍼런스 탐색
 * 4. 카드 클릭 시 ImageDetailModal로 상세 보기
 * 5. 업로드 시 스토어에 추가 → UI 자동 업데이트
 * 6. 무드보드 추가 시 스토어에 반영
 *
 * Example usage:
 * <ArchivePage />
 */
export function ArchivePage() {
  // 데이터 상태 (스토어에서 초기화)
  const [assets, setAssets] = useState(() => museDataStore.getAssets());
  const [moodboards, setMoodboards] = useState(() => museDataStore.getMoodboards());

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
  const [currentAssetForBoard, setCurrentAssetForBoard] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  /**
   * 스토어 변경 구독
   * 업로드, 무드보드 추가 등의 변경 시 UI 자동 업데이트
   */
  useEffect(() => {
    const unsubAssets = museDataStore.subscribe('assets', setAssets);
    const unsubMoodboards = museDataStore.subscribe('moodboards', setMoodboards);

    return () => {
      unsubAssets();
      unsubMoodboards();
    };
  }, []);

  // 사용 가능한 모든 태그 추출
  const allTags = useMemo(() => {
    const tags = new Set();
    assets.forEach((asset) => {
      asset.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [assets]);

  // 필터링된 에셋
  const filteredAssets = useMemo(() => {
    let result = [...assets];

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
  }, [assets, searchValue, selectedTags, sortBy]);

  // 무드보드 목록 (CollectionDropdown용)
  const moodboardOptions = useMemo(() => {
    return moodboards.map((board) => ({
      id: board.id,
      name: board.name,
      count: board.items.length,
    }));
  }, [moodboards]);

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
   * 무드보드 추가 드롭다운 열기
   */
  const handleOpenBoardDropdown = useCallback((asset) => {
    setCurrentAssetForBoard(asset);
    setShowBoardDropdown(true);
  }, []);

  /**
   * 무드보드에 추가
   */
  const handleAddToBoard = useCallback((boardId) => {
    if (!currentAssetForBoard) return;

    const board = moodboards.find((b) => b.id === boardId);
    museDataStore.addItemToMoodboard(boardId, currentAssetForBoard);

    setSnackbar({
      open: true,
      message: `Added to "${board?.name}"`,
      severity: 'success',
    });
    setShowBoardDropdown(false);
    setCurrentAssetForBoard(null);
  }, [currentAssetForBoard, moodboards]);

  /**
   * 새 무드보드 생성 및 추가
   */
  const handleCreateBoard = useCallback((name) => {
    const newBoard = museDataStore.createMoodboard(name);

    if (currentAssetForBoard) {
      museDataStore.addItemToMoodboard(newBoard.id, currentAssetForBoard);
      setSnackbar({
        open: true,
        message: `Created "${name}" and added item`,
        severity: 'success',
      });
    } else {
      setSnackbar({
        open: true,
        message: `Created new board "${name}"`,
        severity: 'success',
      });
    }

    setShowBoardDropdown(false);
    setCurrentAssetForBoard(null);
  }, [currentAssetForBoard]);

  /**
   * 업로드 완료 - 스토어에 새 에셋 추가
   */
  const handleUpload = useCallback(async (data) => {
    // 업로드 시뮬레이션 (실제 API 연동 시 여기서 서버 호출)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 스토어에 새 에셋 추가 → 구독을 통해 UI 자동 업데이트
    const newAsset = museDataStore.addAsset({
      title: data.title || 'Untitled Upload',
      tags: data.tags || [],
      thumbnail: data.previewUrl || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: data.file?.type?.startsWith('video') ? 'video' : 'image',
      format: data.file?.name?.split('.').pop()?.toUpperCase() || 'JPG',
      size: data.file?.size ? `${(data.file.size / 1024 / 1024).toFixed(1)} MB` : 'Unknown',
      license: data.license || 'Personal',
    });

    setSnackbar({
      open: true,
      message: `"${newAsset.title}" uploaded successfully!`,
      severity: 'success',
    });
  }, []);

  return (
    <PageContainer>
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

      {/* 이미지 Masonry 그리드 */}
      {filteredAssets.length > 0 ? (
        <Masonry
          columns={{ xs: 1, sm: 2, md: viewMode === 'list' ? 1 : 3, lg: viewMode === 'list' ? 1 : 4 }}
          spacing={2}
          sx={{ margin: 0 }}
        >
          {filteredAssets.map((asset, index) => (
            <Fade key={asset.id} in timeout={300 + index * 50}>
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
                    handleOpenBoardDropdown(asset);
                  }}
                />
              </Box>
            </Fade>
          ))}
        </Masonry>
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
        onAddToBoard={() => handleOpenBoardDropdown(selectedAsset)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedAssetIndex > 0}
        hasNext={selectedAssetIndex < filteredAssets.length - 1}
      />

      {/* 무드보드 선택 드롭다운 (오버레이로 표시) */}
      {showBoardDropdown && (
        <Box
          onClick={() => {
            setShowBoardDropdown(false);
            setCurrentAssetForBoard(null);
          }}
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
              collections={moodboardOptions}
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
    </PageContainer>
  );
}

export default ArchivePage;
