/**
 * Typography Components
 *
 * 타이포그래피 관련 컴포넌트 모음.
 * 텍스트 표현과 관련된 다양한 스타일링 및 애니메이션 기능을 제공합니다.
 */

// FitText - 컨테이너 너비에 맞춰 자동으로 크기 조절
export { FitText } from './fit-text';

// Title - 섹션/아이템의 계층적 타이틀 시스템
export { Title } from './title';

// HighlightedTypography - 텍스트 강조 효과 (밑줄, 배경, 마커, 원)
export { HighlightedTypography, Highlight } from './highlighted-typography';

// StretchedHeadline - 단어 간격을 늘려 전체 너비를 채우는 히어로 타이포
export { StretchedHeadline, StretchedHeadlineMultiline } from './stretched-headline';

// InlineTypography - 텍스트 속에 이미지/아이콘 삽입
export {
  InlineTypography,
  InlineObject,
  InlineIcon,
  InlineImage,
} from './inline-typography';

// StyledParagraph - 스타일링된 문단 (Lead, Editorial, Quote, Callout)
export {
  StyledParagraph,
  LeadParagraph,
  PullQuote,
  Callout,
} from './styled-paragraph';

// QuotedContainer - 장식적 인용 부호가 있는 인용문
export { QuotedContainer } from './quoted-container';

// DynamicVariant - Variable font axis 애니메이션 (Kinetic Typography)
export { DynamicVariant, DynamicVariantWord } from './dynamic-variant';
