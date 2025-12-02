import { createContext, useContext } from 'react';

/**
 * AppShell Context - 내부 상태 공유
 */
export const AppShellContext = createContext({
  isDrawerOpen: false,
  toggleDrawer: () => {},
  isMobile: false,
});

/**
 * useAppShell 훅 - AppShell 상태 접근
 *
 * AppShell 컴포넌트 내부에서 드로어 상태와 반응형 정보에 접근한다.
 *
 * @returns {Object} { isDrawerOpen, toggleDrawer, isMobile }
 *
 * Example usage:
 * const { isDrawerOpen, toggleDrawer, isMobile } = useAppShell();
 */
export const useAppShell = () => useContext(AppShellContext);
