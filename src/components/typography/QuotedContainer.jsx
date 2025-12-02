import { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/material/styles';

/**
 * 애니메이션 키프레임 정의
 */
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

/**
 * QuotedContainer 컴포넌트
 *
 * 인용 부호를 텍스트의 시작/끝 위치에 스마트하게 배치하는 컴포넌트.
 * 대형 장식적 인용 부호로 인용문을 시각적으로 강조한다.
 *
 * 동작 방식:
 * 1. 텍스트 주변에 장식적인 인용 부호가 배치됨
 * 2. quoteStyle에 따라 다양한 인용 부호 문자 사용
 * 3. position에 따라 인용 부호의 위치가 조정됨
 * 4. animated가 true면 viewport 진입 시 애니메이션 실행
 *
 * Props:
 * @param {string} children - 인용할 텍스트 [Required]
 * @param {string} quoteStyle - 인용 부호 스타일 ('curly' | 'straight' | 'guillemet' | 'angle' | 'custom') [Optional, 기본값: 'curly']
 * @param {string} customQuote - quoteStyle이 'custom'일 때 사용할 커스텀 인용 부호 [Optional]
 * @param {string} quoteSize - 인용 부호 크기 ('sm' | 'md' | 'lg' | 'xl') [Optional, 기본값: 'lg']
 * @param {string} quoteColor - 인용 부호 색상 [Optional, 기본값: 'primary.main']
 * @param {string} position - 인용 부호 위치 ('outside' | 'inside' | 'overlay') [Optional, 기본값: 'outside']
 * @param {boolean} animated - 등장 애니메이션 [Optional, 기본값: false]
 * @param {string} author - 인용 출처/저자 [Optional]
 * @param {string} variant - 타이포그래피 variant [Optional, 기본값: 'h4']
 * @param {string} align - 텍스트 정렬 ('left' | 'center' | 'right') [Optional, 기본값: 'left']
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <QuotedContainer>Design is how it works.</QuotedContainer>
 * <QuotedContainer quoteStyle="guillemet" author="Steve Jobs">
 *   Design is not just what it looks like.
 * </QuotedContainer>
 */
export function QuotedContainer({
  children,
  quoteStyle = 'curly',
  customQuote,
  quoteSize = 'lg',
  quoteColor = 'primary.main',
  position = 'outside',
  animated = false,
  author,
  variant = 'h4',
  align = 'left',
  sx,
  ...props
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(!animated);

  // Viewport 진입 감지
  useEffect(() => {
    if (!animated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, [animated]);

  // 인용 부호 스타일 매핑
  const quoteCharacters = {
    curly: { open: '"', close: '"' },
    straight: { open: '"', close: '"' },
    guillemet: { open: '«', close: '»' },
    angle: { open: '「', close: '」' },
    custom: { open: customQuote || '"', close: customQuote || '"' },
  };

  // 인용 부호 크기 매핑
  const quoteSizes = {
    sm: { fontSize: '3rem', offset: '1rem' },
    md: { fontSize: '4rem', offset: '1.5rem' },
    lg: { fontSize: '6rem', offset: '2rem' },
    xl: { fontSize: '8rem', offset: '2.5rem' },
  };

  const { open: openQuote, close: closeQuote } = quoteCharacters[quoteStyle];
  const { fontSize: quoteFontSize, offset: quoteOffset } = quoteSizes[quoteSize];

  // 정렬 매핑
  const alignmentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  // 공통 인용 부호 스타일
  const quoteBaseStyle = {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: quoteFontSize,
    fontWeight: 400,
    lineHeight: 0.8,
    color: quoteColor,
    opacity: animated && !isVisible ? 0 : (position === 'overlay' ? 0.15 : 1),
    animation: animated && isVisible ? `${fadeInScale} 0.5s ease-out forwards` : 'none',
    userSelect: 'none',
  };

  // Position: outside (기본 - 텍스트 외부에 배치)
  if (position === 'outside') {
    return (
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: alignmentMap[align],
          ...sx,
        }}
        {...props}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          <Box
            component="span"
            aria-hidden="true"
            sx={{
              ...quoteBaseStyle,
              mt: `-${quoteOffset}`,
              flexShrink: 0,
            }}
          >
            {openQuote}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant={variant}
              component="blockquote"
              sx={{
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.5,
                textAlign: align,
                m: 0,
              }}
            >
              {children}
            </Typography>
            {author && (
              <Typography
                variant="body2"
                component="cite"
                sx={{
                  display: 'block',
                  mt: 2,
                  fontStyle: 'normal',
                  color: 'text.secondary',
                  textAlign: align,
                  '&::before': {
                    content: '"— "',
                  },
                }}
              >
                {author}
              </Typography>
            )}
          </Box>
          <Box
            component="span"
            aria-hidden="true"
            sx={{
              ...quoteBaseStyle,
              alignSelf: 'flex-end',
              mb: `-${quoteOffset}`,
              flexShrink: 0,
              animationDelay: '0.2s',
            }}
          >
            {closeQuote}
          </Box>
        </Box>
      </Box>
    );
  }

  // Position: inside (텍스트와 함께 인라인 배치)
  if (position === 'inside') {
    return (
      <Box
        ref={containerRef}
        sx={{
          textAlign: align,
          ...sx,
        }}
        {...props}
      >
        <Typography
          variant={variant}
          component="blockquote"
          sx={{
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.5,
            m: 0,
            display: 'inline',
          }}
        >
          <Box
            component="span"
            aria-hidden="true"
            sx={{
              ...quoteBaseStyle,
              fontSize: '1.5em',
              verticalAlign: 'text-top',
              mr: '0.1em',
            }}
          >
            {openQuote}
          </Box>
          {children}
          <Box
            component="span"
            aria-hidden="true"
            sx={{
              ...quoteBaseStyle,
              fontSize: '1.5em',
              verticalAlign: 'text-bottom',
              ml: '0.1em',
            }}
          >
            {closeQuote}
          </Box>
        </Typography>
        {author && (
          <Typography
            variant="body2"
            component="cite"
            sx={{
              display: 'block',
              mt: 2,
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

  // Position: overlay (인용 부호가 텍스트 뒤에 오버레이)
  if (position === 'overlay') {
    return (
      <Box
        ref={containerRef}
        sx={{
          position: 'relative',
          textAlign: align,
          py: 4,
          ...sx,
        }}
        {...props}
      >
        {/* 배경 인용 부호 */}
        <Box
          component="span"
          aria-hidden="true"
          sx={{
            position: 'absolute',
            left: align === 'right' ? 'auto' : 0,
            right: align === 'right' ? 0 : 'auto',
            top: 0,
            ...quoteBaseStyle,
            fontSize: `calc(${quoteFontSize} * 2)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          {openQuote}
        </Box>

        {/* 텍스트 */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant={variant}
            component="blockquote"
            sx={{
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.5,
              m: 0,
            }}
          >
            {children}
          </Typography>
          {author && (
            <Typography
              variant="body2"
              component="cite"
              sx={{
                display: 'block',
                mt: 2,
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
      </Box>
    );
  }

  return null;
}
