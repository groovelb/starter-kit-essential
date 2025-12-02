import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/material/styles';

/**
 * 애니메이션 키프레임 정의
 */
const drawUnderline = keyframes`
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
`;

const drawMarker = keyframes`
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
`;

const fadeInBackground = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: var(--highlight-color);
  }
`;

const drawCircle = keyframes`
  from {
    stroke-dashoffset: var(--circle-length);
  }
  to {
    stroke-dashoffset: 0;
  }
`;

/**
 * Highlight 컴포넌트 (하위 컴포넌트)
 *
 * 텍스트의 특정 부분을 강조하는 스타일을 적용.
 *
 * Props:
 * @param {ReactNode} children - 강조할 텍스트 [Required]
 * @param {string} type - 강조 유형 ('underline' | 'background' | 'marker' | 'circle') [Required]
 * @param {string} color - 강조 색상 [Optional, 기본값: 'primary.main']
 * @param {boolean} animated - draw 애니메이션 활성화 [Optional, 기본값: false]
 * @param {number} delay - 애니메이션 지연 (ms) [Optional, 기본값: 0]
 * @param {number} duration - 애니메이션 지속 시간 (ms) [Optional, 기본값: 600]
 *
 * Example usage:
 * <Highlight type="underline" color="primary.main">강조 텍스트</Highlight>
 */
export function Highlight({
  children,
  type,
  animated = false,
  delay = 0,
  duration = 600,
  isVisible = true,
}) {
  const ref = useRef(null);
  const [circleLength, setCircleLength] = useState(300);

  // Circle SVG 길이 계산
  useEffect(() => {
    if (type === 'circle' && ref.current) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      // 타원 둘레 근사값
      const a = width / 2 + 8;
      const b = height / 2 + 6;
      const perimeter = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
      setCircleLength(perimeter);
    }
  }, [type, children]);

  const shouldAnimate = animated && isVisible;

  // Underline 스타일
  if (type === 'underline') {
    return (
      <Box
        component="span"
        sx={{
          position: 'relative',
          display: 'inline',
          backgroundImage: (theme) =>
            `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main})`,
          backgroundSize: shouldAnimate ? '0% 100%' : '100% 100%',
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat',
          paddingBottom: '2px',
          animation: shouldAnimate
            ? `${drawUnderline} ${duration}ms ease-out ${delay}ms forwards`
            : 'none',
          '& > span': {
            backgroundSize: '100% 2px',
          },
        }}
      >
        <Box
          component="span"
          sx={{
            position: 'relative',
            backgroundImage: (theme) =>
              `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main})`,
            backgroundSize: shouldAnimate ? '0% 2px' : '100% 2px',
            backgroundPosition: 'left bottom',
            backgroundRepeat: 'no-repeat',
            animation: shouldAnimate
              ? `${drawUnderline} ${duration}ms ease-out ${delay}ms forwards`
              : 'none',
          }}
        >
          {children}
        </Box>
      </Box>
    );
  }

  // Background 스타일
  if (type === 'background') {
    return (
      <Box
        component="span"
        sx={{
          '--highlight-color': (theme) => `${theme.palette.primary.main}20`,
          display: 'inline',
          backgroundColor: shouldAnimate ? 'transparent' : 'var(--highlight-color)',
          padding: '0.1em 0.2em',
          animation: shouldAnimate
            ? `${fadeInBackground} ${duration}ms ease-out ${delay}ms forwards`
            : 'none',
        }}
      >
        {children}
      </Box>
    );
  }

  // Marker 스타일 (형광펜 효과)
  if (type === 'marker') {
    return (
      <Box
        component="span"
        sx={{
          position: 'relative',
          display: 'inline',
          backgroundImage: (theme) =>
            `linear-gradient(120deg, ${theme.palette.primary.main}30 0%, ${theme.palette.primary.main}30 100%)`,
          backgroundSize: shouldAnimate ? '0% 100%' : '100% 100%',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          animation: shouldAnimate
            ? `${drawMarker} ${duration}ms ease-out ${delay}ms forwards`
            : 'none',
        }}
      >
        {children}
      </Box>
    );
  }

  // Circle 스타일 (손으로 그린 원)
  if (type === 'circle') {
    return (
      <Box
        component="span"
        ref={ref}
        sx={{
          '--circle-length': circleLength,
          position: 'relative',
          display: 'inline-block',
          padding: '0.1em 0.3em',
        }}
      >
        {children}
        <Box
          component="svg"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          sx={{
            position: 'absolute',
            left: '-8px',
            top: '-6px',
            width: 'calc(100% + 16px)',
            height: 'calc(100% + 12px)',
            overflow: 'visible',
            pointerEvents: 'none',
          }}
        >
          <Box
            component="ellipse"
            cx="50"
            cy="25"
            rx="48"
            ry="22"
            sx={{
              fill: 'none',
              stroke: (theme) => theme.palette.primary.main,
              strokeWidth: 2,
              strokeLinecap: 'round',
              strokeDasharray: circleLength,
              strokeDashoffset: shouldAnimate ? circleLength : 0,
              animation: shouldAnimate
                ? `${drawCircle} ${duration}ms ease-out ${delay}ms forwards`
                : 'none',
              transform: 'rotate(-2deg)',
              transformOrigin: 'center',
            }}
          />
        </Box>
      </Box>
    );
  }

  return <span>{children}</span>;
}

/**
 * HighlightedTypography 컴포넌트
 *
 * 텍스트 내 특정 단어나 구문을 다양한 스타일로 강조할 수 있는 컴포넌트.
 * Compound component 패턴으로 Highlight 컴포넌트와 함께 사용.
 *
 * 동작 방식:
 * 1. children으로 일반 텍스트와 Highlight 컴포넌트를 조합하여 전달
 * 2. Highlight 컴포넌트가 있는 부분에 강조 스타일이 적용됨
 * 3. animated가 true이면 viewport 진입 시 draw 애니메이션 실행
 * 4. 각 Highlight에 개별 delay를 설정하여 순차 애니메이션 가능
 *
 * Props:
 * @param {ReactNode} children - 텍스트와 Highlight 컴포넌트 조합 [Required]
 * @param {string} variant - 타이포그래피 variant ('body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4') [Optional, 기본값: 'body1']
 * @param {string} component - HTML 태그 [Optional, 기본값: 'p']
 * @param {boolean} animated - 전체 애니메이션 활성화 [Optional, 기본값: false]
 * @param {number} threshold - Intersection Observer threshold [Optional, 기본값: 0.5]
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <HighlightedTypography animated>
 *   This is <Highlight type="underline">important</Highlight> text with
 *   <Highlight type="marker" delay={300}>highlighted</Highlight> words.
 * </HighlightedTypography>
 */
export function HighlightedTypography({
  children,
  variant = 'body1',
  component = 'p',
  animated = false,
  threshold = 0.5,
  sx,
  ...props
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(!animated);

  // Intersection Observer로 viewport 진입 감지
  useEffect(() => {
    if (!animated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, [animated, threshold]);

  // children에 isVisible prop 전달
  const enhancedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === Highlight) {
      return cloneElement(child, { isVisible });
    }
    return child;
  });

  return (
    <Typography
      ref={containerRef}
      variant={variant}
      component={component}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {enhancedChildren}
    </Typography>
  );
}

// Compound component 패턴을 위한 정적 할당
HighlightedTypography.Highlight = Highlight;
