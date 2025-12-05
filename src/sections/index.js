/**
 * Sections - 페이지 내 주요 섹션에 해당하는 재사용 가능한 컴포넌트
 *
 * 여러 페이지에서 공통으로 사용되는 UI 패턴을 섹션 단위로 모듈화.
 * 페이지 레이아웃의 일관성을 유지하면서 코드 중복을 줄임.
 */

// 공통 섹션
export { EmptyState } from './EmptyState';
export { PageHeader } from './PageHeader';
export { BoardSelectModal } from './BoardSelectModal';

// Archive 페이지 섹션
export { AssetGallery } from './AssetGallery';
export { MobileUploadFab } from './MobileUploadFab';

// Moodboards 페이지 섹션
export { MoodboardGridView } from './MoodboardGridView';
export { MoodboardDetailView } from './MoodboardDetailView';
export { BoardActionsMenu } from './BoardActionsMenu';
export { BoardDialogs } from './BoardDialogs';
