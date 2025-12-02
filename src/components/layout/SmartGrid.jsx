import { Box } from '@mui/material';

/**
 * SmartGrid 컴포넌트
 *
 * CSS Grid의 auto-fit/auto-fill을 활용한 자동 반응형 그리드 레이아웃.
 * 브레이크포인트 없이 컨테이너 크기에 따라 자동으로 열 개수가 조정된다.
 *
 * 동작 방식:
 * 1. minItemWidth에 따라 각 아이템의 최소 너비가 설정됨
 * 2. 컨테이너 너비에 따라 가능한 최대 열 개수가 자동 계산됨
 * 3. fit 모드: 아이템이 남은 공간을 채움 (반응형 확대)
 * 4. fill 모드: 빈 공간이 남을 수 있음 (고정 크기)
 *
 * Props:
 * @param {ReactNode} children - 그리드 아이템들 [Required]
 * @param {string|number} minItemWidth - 아이템 최소 너비 [Optional, 기본값: '280px']
 * @param {string|number} maxItemWidth - 아이템 최대 너비 [Optional, 기본값: '1fr']
 * @param {string} mode - 그리드 모드 ('fit' | 'fill') [Optional, 기본값: 'fit']
 * @param {number|string} gap - 아이템 간 간격 [Optional, 기본값: 2]
 * @param {number|string} rowGap - 행 간 간격 (gap 오버라이드) [Optional]
 * @param {number|string} columnGap - 열 간 간격 (gap 오버라이드) [Optional]
 * @param {string} alignItems - 아이템 수직 정렬 [Optional, 기본값: 'stretch']
 * @param {string} justifyItems - 아이템 수평 정렬 [Optional, 기본값: 'stretch']
 * @param {number} maxColumns - 최대 열 개수 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SmartGrid minItemWidth="300px">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </SmartGrid>
 */
export function SmartGrid({
  children,
  minItemWidth = '280px',
  maxItemWidth = '1fr',
  mode = 'fit',
  gap = 2,
  rowGap,
  columnGap,
  alignItems = 'stretch',
  justifyItems = 'stretch',
  maxColumns,
  sx,
  ...props
}) {
  /**
   * minItemWidth를 CSS 값으로 변환
   * - 숫자: px 단위로 변환
   * - 문자열: 그대로 사용
   */
  const getMinWidth = () => {
    if (typeof minItemWidth === 'number') {
      return `${minItemWidth}px`;
    }
    return minItemWidth;
  };

  /**
   * maxItemWidth를 CSS 값으로 변환
   */
  const getMaxWidth = () => {
    if (typeof maxItemWidth === 'number') {
      return `${maxItemWidth}px`;
    }
    return maxItemWidth;
  };

  /**
   * CSS Grid repeat() 함수 생성
   * - fit: repeat(auto-fit, minmax(min, max))
   * - fill: repeat(auto-fill, minmax(min, max))
   * - maxColumns 지정 시: min(repeat(), columns)
   */
  const getGridTemplateColumns = () => {
    const autoKeyword = mode === 'fill' ? 'auto-fill' : 'auto-fit';
    const minWidth = getMinWidth();
    const maxWidth = getMaxWidth();

    const baseTemplate = `repeat(${autoKeyword}, minmax(${minWidth}, ${maxWidth}))`;

    // 최대 열 개수 제한
    if (maxColumns) {
      return `repeat(auto-fit, minmax(min(${minWidth}, 100%), min(${maxWidth}, calc(100% / ${maxColumns} - ${typeof gap === 'number' ? gap * 8 : gap}px * ${maxColumns - 1} / ${maxColumns}))))`;
    }

    return baseTemplate;
  };

  return (
    <Box
      sx={ {
        display: 'grid',
        gridTemplateColumns: getGridTemplateColumns(),
        gap: gap,
        rowGap: rowGap,
        columnGap: columnGap,
        alignItems: alignItems,
        justifyItems: justifyItems,
        width: '100%',
        ...sx,
      } }
      { ...props }
    >
      { children }
    </Box>
  );
}

/**
 * SmartGridItem 컴포넌트
 *
 * SmartGrid 내에서 특정 아이템의 span을 조절하는 래퍼 컴포넌트.
 *
 * Props:
 * @param {ReactNode} children - 아이템 콘텐츠 [Required]
 * @param {number} colSpan - 열 span [Optional, 기본값: 1]
 * @param {number} rowSpan - 행 span [Optional, 기본값: 1]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SmartGrid>
 *   <SmartGridItem colSpan={2}>Wide Item</SmartGridItem>
 *   <SmartGridItem>Normal Item</SmartGridItem>
 * </SmartGrid>
 */
export function SmartGridItem({
  children,
  colSpan = 1,
  rowSpan = 1,
  sx,
  ...props
}) {
  return (
    <Box
      sx={ {
        gridColumn: colSpan > 1 ? `span ${colSpan}` : undefined,
        gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined,
        ...sx,
      } }
      { ...props }
    >
      { children }
    </Box>
  );
}
