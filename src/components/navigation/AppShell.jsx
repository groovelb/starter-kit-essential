import { useState, forwardRef } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { AppShellContext } from './useAppShell';

/**
 * AppShell 컴포넌트
 *
 * 반응형 레이아웃 쉘. 헤더와 메인 영역으로 구성되며,
 * 모바일에서는 드로어 메뉴로 전환된다.
 *
 * 동작 방식:
 * 1. breakpoint 이상에서는 헤더에 모든 네비게이션 표시
 * 2. breakpoint 미만에서는 햄버거 메뉴 + 드로어로 전환
 * 3. 헤더의 persistent 영역은 항상 표시
 * 4. 헤더의 collapsible 영역은 드로어로 이동
 *
 * Props:
 * @param {node} logo - 로고 영역 (항상 표시) [Optional]
 * @param {node} headerPersistent - 헤더에 항상 표시될 요소 [Optional]
 * @param {node} headerCollapsible - 모바일에서 드로어로 이동할 요소 [Optional]
 * @param {node} drawerHeader - 드로어 상단 커스텀 요소 [Optional]
 * @param {node} drawerFooter - 드로어 하단 커스텀 요소 [Optional]
 * @param {node} children - 메인 콘텐츠 영역 [Required]
 * @param {string} breakpoint - 반응형 전환 브레이크포인트 ('sm' | 'md' | 'lg') [Optional, 기본값: 'md']
 * @param {number} headerHeight - 헤더 높이 (px) [Optional, 기본값: 64]
 * @param {number} drawerWidth - 드로어 너비 (px) [Optional, 기본값: 280]
 * @param {boolean} hasHeaderBorder - 헤더 하단 보더 [Optional, 기본값: true]
 * @param {boolean} isHeaderSticky - 헤더 고정 [Optional, 기본값: true]
 * @param {boolean} isHeaderTransparent - 헤더 투명 배경 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <AppShell
 *   logo={<Logo />}
 *   headerPersistent={<SearchBar />}
 *   headerCollapsible={<NavMenu items={menuItems} />}
 *   breakpoint="md"
 * >
 *   <MainContent />
 * </AppShell>
 */
const AppShell = forwardRef(function AppShell({
  logo,
  headerPersistent,
  headerCollapsible,
  drawerHeader,
  drawerFooter,
  children,
  breakpoint = 'md',
  headerHeight = 64,
  drawerWidth = 280,
  hasHeaderBorder = true,
  isHeaderSticky = true,
  isHeaderTransparent = false,
  sx,
  ...props
}, ref) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(breakpoint));

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  /**
   * 헤더 스타일
   */
  const getHeaderStyles = () => ({
    position: isHeaderSticky ? 'sticky' : 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.appBar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: headerHeight,
    px: { xs: 2, sm: 3, md: 4 },
    backgroundColor: isHeaderTransparent ? 'transparent' : 'background.paper',
    borderBottom: hasHeaderBorder ? '1px solid' : 'none',
    borderColor: 'divider',
    backdropFilter: isHeaderTransparent ? 'blur(12px)' : 'none',
  });

  /**
   * 드로어 콘텐츠 렌더링
   */
  const renderDrawerContent = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: drawerWidth,
      }}
    >
      {/* 드로어 헤더 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: headerHeight,
          px: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          flexShrink: 0,
        }}
      >
        {drawerHeader || logo}
        <IconButton
          onClick={closeDrawer}
          size="small"
          aria-label="Close menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* 드로어 메인 콘텐츠 */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          py: 2,
          px: 2,
        }}
      >
        {headerCollapsible}
      </Box>

      {/* 드로어 푸터 */}
      {drawerFooter && (
        <Box
          sx={{
            p: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
            flexShrink: 0,
          }}
        >
          {drawerFooter}
        </Box>
      )}
    </Box>
  );

  return (
    <AppShellContext.Provider value={{ isDrawerOpen, toggleDrawer, isMobile }}>
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          ...sx,
        }}
        {...props}
      >
        {/* Header */}
        <Box component="header" sx={getHeaderStyles()}>
          {/* Left: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {logo}
          </Box>

          {/* Center/Right: Navigation */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* 항상 표시되는 요소 */}
            {headerPersistent}

            {/* 데스크탑: collapsible 요소 표시 */}
            {!isMobile && headerCollapsible}

            {/* 모바일: 햄버거 메뉴 */}
            {isMobile && headerCollapsible && (
              <IconButton
                onClick={toggleDrawer}
                size="medium"
                aria-label="Open menu"
                aria-expanded={isDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={closeDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {renderDrawerContent()}
        </Drawer>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </Box>
      </Box>
    </AppShellContext.Provider>
  );
});

export { AppShell };
