import { useState, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FolderIcon from '@mui/icons-material/Folder';
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CollectionsIcon from '@mui/icons-material/Collections';
import { ImageCard } from '../components/card/ImageCard';
import { ImageDetailModal } from '../components/data/ImageDetailModal';
import { PageContainer } from '../components/container/PageContainer';
import museDataStore from '../data/museDataStore';

/**
 * MoodboardsPage 컴포넌트
 *
 * 무드보드 관리 및 큐레이션 화면.
 * 여러 무드보드를 탭으로 전환하고, 각 보드의 아이템을 관리.
 *
 * 동작 방식:
 * 1. 마운트 시 museDataStore에서 무드보드 데이터 로드 및 구독
 * 2. 탭으로 무드보드 간 전환
 * 3. 각 무드보드 내 아이템 그리드 표시
 * 4. 아이템 제거, 순서 변경 (시뮬레이션)
 * 5. 새 무드보드 생성, 이름 변경, 삭제 → 스토어에 반영
 * 6. Archive 페이지에서 추가한 아이템이 자동으로 반영됨
 *
 * Example usage:
 * <MoodboardsPage />
 */
export function MoodboardsPage() {
  // 무드보드 데이터 (스토어에서 초기화)
  const [moodboards, setMoodboards] = useState(() => museDataStore.getMoodboards());

  const [activeTab, setActiveTab] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(-1);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showRenameDialog, setShowRenameDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [newBoardName, setNewBoardName] = useState('');
  const [likedIds, setLikedIds] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  /**
   * 스토어 변경 구독
   * Archive에서 아이템 추가 시 자동 반영
   */
  useEffect(() => {
    const unsubscribe = museDataStore.subscribe('moodboards', setMoodboards);
    return unsubscribe;
  }, []);

  // 현재 활성 보드 (안전하게 접근)
  const currentBoard = moodboards[activeTab] || null;

  /**
   * 탭 변경
   */
  const handleTabChange = useCallback((event, newValue) => {
    setActiveTab(newValue);
  }, []);

  /**
   * 메뉴 열기/닫기
   */
  const handleMenuOpen = useCallback((event) => {
    setMenuAnchor(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuAnchor(null);
  }, []);

  /**
   * 새 무드보드 생성
   */
  const handleCreateBoard = useCallback(() => {
    if (!newBoardName.trim()) return;

    museDataStore.createMoodboard(newBoardName.trim());

    // 새로 생성된 보드로 탭 이동
    setActiveTab(moodboards.length);
    setNewBoardName('');
    setShowCreateDialog(false);
    setSnackbar({
      open: true,
      message: `Created "${newBoardName.trim()}"`,
      severity: 'success',
    });
  }, [newBoardName, moodboards.length]);

  /**
   * 무드보드 이름 변경
   */
  const handleRenameBoard = useCallback(() => {
    if (!newBoardName.trim() || !currentBoard) return;

    museDataStore.renameMoodboard(currentBoard.id, newBoardName.trim());

    setNewBoardName('');
    setShowRenameDialog(false);
    handleMenuClose();
    setSnackbar({
      open: true,
      message: 'Board renamed',
      severity: 'success',
    });
  }, [newBoardName, currentBoard, handleMenuClose]);

  /**
   * 무드보드 삭제
   */
  const handleDeleteBoard = useCallback(() => {
    if (!currentBoard) return;

    museDataStore.deleteMoodboard(currentBoard.id);

    setActiveTab(Math.max(0, activeTab - 1));
    setShowDeleteDialog(false);
    handleMenuClose();
    setSnackbar({
      open: true,
      message: 'Board deleted',
      severity: 'info',
    });
  }, [currentBoard, activeTab, handleMenuClose]);

  /**
   * 아이템 제거
   */
  const handleRemoveItem = useCallback((itemId) => {
    if (!currentBoard) return;

    museDataStore.removeItemFromMoodboard(currentBoard.id, itemId);

    setSnackbar({
      open: true,
      message: 'Removed from moodboard',
      severity: 'info',
    });
  }, [currentBoard]);

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
   * 카드 클릭 - 상세 모달
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
   * 이전/다음 네비게이션
   */
  const handlePrevious = useCallback(() => {
    if (selectedAssetIndex > 0 && currentBoard) {
      const newIndex = selectedAssetIndex - 1;
      setSelectedAssetIndex(newIndex);
      setSelectedAsset(currentBoard.items[newIndex]);
    }
  }, [selectedAssetIndex, currentBoard]);

  const handleNext = useCallback(() => {
    if (currentBoard && selectedAssetIndex < currentBoard.items.length - 1) {
      const newIndex = selectedAssetIndex + 1;
      setSelectedAssetIndex(newIndex);
      setSelectedAsset(currentBoard.items[newIndex]);
    }
  }, [selectedAssetIndex, currentBoard]);

  /**
   * 공유 (더미)
   */
  const handleShare = useCallback(() => {
    handleMenuClose();
    setSnackbar({
      open: true,
      message: 'Share link copied to clipboard',
      severity: 'success',
    });
  }, [handleMenuClose]);

  /**
   * 복제
   */
  const handleDuplicate = useCallback(() => {
    if (!currentBoard) return;

    museDataStore.duplicateMoodboard(currentBoard.id);

    handleMenuClose();
    setSnackbar({
      open: true,
      message: 'Board duplicated',
      severity: 'success',
    });
  }, [currentBoard, handleMenuClose]);

  return (
    <PageContainer>
      {/* 페이지 헤더 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          mb: 3,
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
            Moodboards
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {moodboards.length} boards, {moodboards.reduce((acc, b) => acc + b.items.length, 0)} total items
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setShowCreateDialog(true)}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            px: 3,
            py: 1.25,
            borderRadius: 2,
          }}
        >
          New Board
        </Button>
      </Box>

      {/* 무드보드 탭 */}
      {moodboards.length > 0 ? (
        <>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              mb: 3,
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  minWidth: 'auto',
                  px: 2,
                },
              }}
            >
              {moodboards.map((board) => (
                <Tab
                  key={board.id}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FolderIcon sx={{ fontSize: 18 }} />
                      {board.name}
                      <Chip
                        label={board.items.length}
                        size="small"
                        sx={{ height: 20, fontSize: '0.7rem' }}
                      />
                    </Box>
                  }
                />
              ))}
            </Tabs>
          </Box>

          {/* 현재 보드 헤더 */}
          {currentBoard && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 3,
                p: 2,
                borderRadius: 2,
                bgcolor: 'action.hover',
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {currentBoard.name}
                </Typography>
                {currentBoard.description && (
                  <Typography variant="body2" color="text.secondary">
                    {currentBoard.description}
                  </Typography>
                )}
                <Typography variant="caption" color="text.disabled">
                  Created {currentBoard.createdAt} • {currentBoard.items.length} items
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ShareIcon />}
                  onClick={handleShare}
                  sx={{ textTransform: 'none' }}
                >
                  Share
                </Button>
                <IconButton onClick={handleMenuOpen}>
                  <MoreVertIcon />
                </IconButton>
              </Box>
            </Box>
          )}

          {/* 보드 아이템 그리드 */}
          {currentBoard && currentBoard.items.length > 0 ? (
            <Grid container spacing={3}>
              {currentBoard.items.map((item, index) => (
                <Grid key={`${currentBoard.id}-${item.id}`} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <Fade in timeout={300 + index * 50}>
                    <Box sx={{ position: 'relative' }}>
                      <Box
                        onClick={() => handleCardClick(item, index)}
                        sx={{ cursor: 'pointer' }}
                      >
                        <ImageCard
                          src={item.thumbnail}
                          title={item.title}
                          tags={item.tags}
                          onLike={(e) => {
                            e?.stopPropagation?.();
                            handleLike(item.id);
                          }}
                          onAddToBoard={(e) => {
                            e?.stopPropagation?.();
                          }}
                        />
                      </Box>
                      {/* 제거 버튼 */}
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveItem(item.id)}
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          bgcolor: 'error.main',
                          color: 'white',
                          opacity: 0,
                          transition: 'opacity 0.2s',
                          '.MuiBox-root:hover &': {
                            opacity: 1,
                          },
                          '&:hover': {
                            bgcolor: 'error.dark',
                          },
                        }}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                      {/* 드래그 핸들 (더미) */}
                      <IconButton
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 8,
                          left: 8,
                          bgcolor: 'rgba(255,255,255,0.9)',
                          opacity: 0,
                          transition: 'opacity 0.2s',
                          cursor: 'grab',
                          '.MuiBox-root:hover &': {
                            opacity: 1,
                          },
                        }}
                      >
                        <DragIndicatorIcon fontSize="small" />
                      </IconButton>
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
                border: '2px dashed',
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <CollectionsIcon
                sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                This board is empty
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Add references from the Archive to get started
              </Typography>
              <Button
                variant="outlined"
                href="/"
                sx={{ textTransform: 'none' }}
              >
                Browse Archive
              </Button>
            </Box>
          )}
        </>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            py: 12,
            px: 4,
          }}
        >
          <FolderIcon sx={{ fontSize: 64, color: 'text.disabled', mb: 2 }} />
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            No moodboards yet
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Create your first moodboard to start curating
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setShowCreateDialog(true)}
            sx={{ textTransform: 'none' }}
          >
            Create Moodboard
          </Button>
        </Box>
      )}

      {/* 보드 메뉴 */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { setNewBoardName(currentBoard?.name || ''); setShowRenameDialog(true); }}>
          <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Rename</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDuplicate}>
          <ListItemIcon><ContentCopyIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Duplicate</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleShare}>
          <ListItemIcon><ShareIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Share</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setShowDeleteDialog(true)} sx={{ color: 'error.main' }}>
          <ListItemIcon><DeleteIcon fontSize="small" color="error" /></ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>

      {/* 새 보드 생성 다이얼로그 */}
      <Dialog open={showCreateDialog} onClose={() => setShowCreateDialog(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Create New Board</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Board Name"
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCreateBoard()}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCreateDialog(false)} sx={{ textTransform: 'none' }}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateBoard} disabled={!newBoardName.trim()} sx={{ textTransform: 'none' }}>
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* 이름 변경 다이얼로그 */}
      <Dialog open={showRenameDialog} onClose={() => setShowRenameDialog(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Rename Board</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Board Name"
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleRenameBoard()}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowRenameDialog(false)} sx={{ textTransform: 'none' }}>Cancel</Button>
          <Button variant="contained" onClick={handleRenameBoard} disabled={!newBoardName.trim()} sx={{ textTransform: 'none' }}>
            Rename
          </Button>
        </DialogActions>
      </Dialog>

      {/* 삭제 확인 다이얼로그 */}
      <Dialog open={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>Delete Board</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete &quot;{currentBoard?.name}&quot;? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteDialog(false)} sx={{ textTransform: 'none' }}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteBoard} sx={{ textTransform: 'none' }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

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
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedAssetIndex > 0}
        hasNext={currentBoard && selectedAssetIndex < currentBoard.items.length - 1}
      />

      {/* 스낵바 */}
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

export default MoodboardsPage;
