import { Box, Typography } from '@mui/material';

/**
 * StyledParagraph 컴포넌트
 *
 * 섹션을 강조하기 위한 스타일링된 문단 컴포넌트.
 * Drop cap, lead text, editorial 스타일 등 다양한 프리셋을 제공한다.
 *
 * 동작 방식:
 * 1. preset에 따라 미리 정의된 스타일이 적용됨
 * 2. dropCap이 true면 첫 글자가 크게 강조됨
 * 3. maxWidth로 최적의 줄 길이를 제어
 * 4. 텍스트의 가독성과 시각적 계층을 강화
 *
 * Props:
 * @param {string} children - 문단 텍스트 [Required]
 * @param {string} preset - 스타일 프리셋 ('lead' | 'editorial' | 'quote' | 'callout' | 'caption') [Optional, 기본값: 'lead']
 * @param {boolean} dropCap - 첫 글자 확대 (Drop Cap) [Optional, 기본값: false]
 * @param {string} dropCapStyle - Drop Cap 스타일 ('float' | 'inline' | 'margin') [Optional, 기본값: 'float']
 * @param {string} align - 텍스트 정렬 ('left' | 'center' | 'right' | 'justify') [Optional, 기본값: 'left']
 * @param {number|string} maxWidth - 최대 너비 (ch 단위 숫자 또는 CSS 값) [Optional, 기본값: 65]
 * @param {boolean} indent - 첫 줄 들여쓰기 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <StyledParagraph preset="lead">
 *   This is a lead paragraph that introduces the section.
 * </StyledParagraph>
 * <StyledParagraph preset="editorial" dropCap>
 *   Lorem ipsum dolor sit amet...
 * </StyledParagraph>
 */
export function StyledParagraph({
  children,
  preset = 'lead',
  dropCap = false,
  dropCapStyle = 'float',
  align = 'left',
  maxWidth = 65,
  indent = false,
  sx,
  ...props
}) {
  // 최대 너비 처리
  const maxWidthValue = typeof maxWidth === 'number' ? `${maxWidth}ch` : maxWidth;

  // 프리셋별 스타일 정의
  const presetStyles = {
    lead: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.7,
      color: 'text.primary',
      letterSpacing: '0.01em',
    },
    editorial: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.8,
      color: 'text.primary',
      letterSpacing: '0.005em',
      fontFamily: '"Pretendard Variable", Pretendard, serif',
    },
    quote: {
      fontSize: '1.5rem',
      fontWeight: 300,
      lineHeight: 1.6,
      color: 'text.secondary',
      fontStyle: 'italic',
      letterSpacing: '0.02em',
      pl: 4,
      borderLeft: '3px solid',
      borderColor: 'primary.main',
    },
    callout: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: 'text.primary',
      backgroundColor: 'grey.50',
      p: 3,
      borderLeft: '4px solid',
      borderColor: 'primary.main',
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: 'text.secondary',
      letterSpacing: '0.01em',
    },
  };

  // Drop Cap 스타일 정의
  const dropCapStyles = {
    float: {
      '&::first-letter': {
        float: 'left',
        fontSize: '4em',
        fontWeight: 700,
        lineHeight: 0.8,
        mr: 2,
        mt: '0.1em',
        fontFamily: '"Outfit", "Pretendard Variable", sans-serif',
        color: 'primary.main',
      },
    },
    inline: {
      '&::first-letter': {
        fontSize: '2em',
        fontWeight: 700,
        lineHeight: 1,
        fontFamily: '"Outfit", "Pretendard Variable", sans-serif',
        color: 'primary.main',
      },
    },
    margin: {
      '&::first-letter': {
        float: 'left',
        fontSize: '3.5em',
        fontWeight: 700,
        lineHeight: 0.85,
        mr: 2,
        ml: -1,
        mt: '0.05em',
        fontFamily: '"Outfit", "Pretendard Variable", sans-serif',
        color: 'text.primary',
        backgroundColor: 'grey.100',
        px: 1,
      },
    },
  };

  return (
    <Typography
      component="p"
      sx={{
        maxWidth: maxWidthValue,
        textAlign: align,
        textIndent: indent ? '2em' : 0,
        ...presetStyles[preset],
        ...(dropCap && dropCapStyles[dropCapStyle]),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

/**
 * LeadParagraph 컴포넌트 (편의 컴포넌트)
 *
 * 섹션을 소개하는 큰 리드 문단.
 *
 * Props:
 * @param {string} children - 문단 텍스트 [Required]
 * @param {string} align - 텍스트 정렬 [Optional, 기본값: 'left']
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 */
export function LeadParagraph({ children, align = 'left', sx, ...props }) {
  return (
    <StyledParagraph preset="lead" align={align} sx={sx} {...props}>
      {children}
    </StyledParagraph>
  );
}

/**
 * PullQuote 컴포넌트 (편의 컴포넌트)
 *
 * 기사나 문서에서 인용구를 강조하는 스타일.
 *
 * Props:
 * @param {string} children - 인용 텍스트 [Required]
 * @param {string} author - 인용 출처/저자 [Optional]
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 */
export function PullQuote({ children, author, sx, ...props }) {
  return (
    <Box sx={{ ...sx }} {...props}>
      <StyledParagraph preset="quote" maxWidth="none">
        {children}
      </StyledParagraph>
      {author && (
        <Typography
          variant="caption"
          component="cite"
          sx={{
            display: 'block',
            mt: 2,
            pl: 4,
            fontStyle: 'normal',
            color: 'text.secondary',
            '&::before': {
              content: '"— "',
            },
          }}
        >
          {author}
        </Typography>
      )}
    </Box>
  );
}

/**
 * Callout 컴포넌트 (편의 컴포넌트)
 *
 * 중요한 정보를 강조하는 박스 스타일 문단.
 *
 * Props:
 * @param {string} children - 문단 텍스트 [Required]
 * @param {string} variant - 색상 variant ('default' | 'info' | 'warning' | 'success' | 'error') [Optional, 기본값: 'default']
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 */
export function Callout({ children, variant = 'default', sx, ...props }) {
  const variantColors = {
    default: 'primary.main',
    info: 'info.main',
    warning: 'warning.main',
    success: 'success.main',
    error: 'error.main',
  };

  const variantBackgrounds = {
    default: 'grey.50',
    info: 'info.light',
    warning: 'warning.light',
    success: 'success.light',
    error: 'error.light',
  };

  return (
    <StyledParagraph
      preset="callout"
      maxWidth="none"
      sx={{
        borderColor: variantColors[variant],
        backgroundColor: variant === 'default' ? 'grey.50' : `${variantBackgrounds[variant]}15`,
        ...sx,
      }}
      {...props}
    >
      {children}
    </StyledParagraph>
  );
}
