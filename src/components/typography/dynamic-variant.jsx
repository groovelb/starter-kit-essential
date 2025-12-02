import { useEffect, useRef, useState, useMemo } from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/material/styles';

/**
 * DynamicVariant 컴포넌트
 *
 * Variable font의 axis를 동적으로 애니메이션하는 Kinetic Typography 컴포넌트.
 * font-variation-settings를 활용하여 weight, width 등의 축을 부드럽게 전환한다.
 *
 * 동작 방식:
 * 1. 텍스트를 개별 문자로 분리 (stagger 애니메이션용)
 * 2. animation prop에 따라 다른 애니메이션 효과 적용
 *    - breathe: weight가 주기적으로 변화 (숨 쉬는 듯한 효과)
 *    - wave: 각 문자에 시차를 두고 weight 변화
 *    - hover: 마우스 호버 시 해당 문자의 weight 변화
 *    - scroll: 스크롤 위치에 따라 weight 변화
 * 3. axisRange로 애니메이션될 축의 범위 설정
 * 4. stagger가 true면 각 문자마다 시차를 두고 애니메이션
 *
 * Props:
 * @param {string} text - 표시할 텍스트 [Required]
 * @param {string} animation - 애니메이션 유형 ('breathe' | 'wave' | 'hover' | 'scroll' | 'none') [Optional, 기본값: 'none']
 * @param {object} axisRange - Variable font axis 범위 { wght: [min, max], wdth: [min, max] } [Optional]
 * @param {number} duration - 애니메이션 주기 (ms) [Optional, 기본값: 2000]
 * @param {boolean} stagger - 글자별 시차 애니메이션 [Optional, 기본값: false]
 * @param {number} staggerDelay - 글자당 지연 (ms) [Optional, 기본값: 50]
 * @param {string} fontFamily - Variable font 패밀리 [Optional, 기본값: 'Inter Variable']
 * @param {string|number} fontSize - 폰트 크기 [Optional, 기본값: 'clamp(2rem, 6vw, 4rem)']
 * @param {number} baseWeight - 기본 weight [Optional, 기본값: 400]
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <DynamicVariant text="KINETIC" animation="breathe" />
 * <DynamicVariant text="WAVE" animation="wave" stagger />
 * <DynamicVariant text="HOVER" animation="hover" />
 */
export function DynamicVariant({
  text,
  animation = 'none',
  axisRange = { wght: [300, 900] },
  duration = 2000,
  stagger = false,
  staggerDelay = 50,
  fontFamily = '"Inter Variable", "Pretendard Variable", sans-serif',
  fontSize = 'clamp(2rem, 6vw, 4rem)',
  baseWeight = 400,
  sx,
  ...props
}) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // 텍스트를 문자 배열로 분리
  const characters = useMemo(() => text.split(''), [text]);

  // Breathe 애니메이션 키프레임 생성
  const breatheKeyframes = useMemo(() => {
    const [minWeight, maxWeight] = axisRange.wght || [300, 900];
    return keyframes`
      0%, 100% {
        font-variation-settings: 'wght' ${minWeight};
      }
      50% {
        font-variation-settings: 'wght' ${maxWeight};
      }
    `;
  }, [axisRange]);

  // Wave 애니메이션 키프레임 생성
  const waveKeyframes = useMemo(() => {
    const [minWeight, maxWeight] = axisRange.wght || [300, 900];
    return keyframes`
      0%, 100% {
        font-variation-settings: 'wght' ${minWeight};
        transform: translateY(0);
      }
      50% {
        font-variation-settings: 'wght' ${maxWeight};
        transform: translateY(-5px);
      }
    `;
  }, [axisRange]);

  // Scroll 애니메이션 처리
  useEffect(() => {
    if (animation !== 'scroll') return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 요소가 viewport의 상단에서 하단으로 이동하는 동안 0 ~ 1
      const progress = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 값 설정

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animation]);

  // 스크롤 progress에 따른 weight 계산
  const getScrollWeight = (charIndex) => {
    const [minWeight, maxWeight] = axisRange.wght || [300, 900];
    const totalChars = characters.length;

    // 각 문자에 시차를 두어 wave 효과
    const charProgress = Math.max(0, Math.min(1,
      (scrollProgress * (totalChars + 5) - charIndex) / 5
    ));

    return minWeight + (maxWeight - minWeight) * charProgress;
  };

  // Hover weight 계산
  const getHoverWeight = (charIndex) => {
    const [, maxWeight] = axisRange.wght || [300, 900];

    if (hoveredIndex === -1) return baseWeight;

    // 호버된 문자로부터의 거리에 따라 weight 감소
    const distance = Math.abs(charIndex - hoveredIndex);
    const falloff = Math.max(0, 1 - distance * 0.3);

    return baseWeight + (maxWeight - baseWeight) * falloff;
  };

  // 공통 문자 스타일
  const getCharStyle = (charIndex) => {
    const baseStyle = {
      display: 'inline-block',
      fontFamily,
      fontSize,
      lineHeight: 1.1,
      transition: animation === 'hover' ? 'font-variation-settings 0.2s ease-out' : 'none',
    };

    switch (animation) {
      case 'breathe':
        return {
          ...baseStyle,
          animation: `${breatheKeyframes} ${duration}ms ease-in-out infinite`,
          animationDelay: stagger ? `${charIndex * staggerDelay}ms` : '0ms',
        };

      case 'wave':
        return {
          ...baseStyle,
          animation: `${waveKeyframes} ${duration}ms ease-in-out infinite`,
          animationDelay: `${charIndex * staggerDelay}ms`,
        };

      case 'hover':
        return {
          ...baseStyle,
          fontVariationSettings: `'wght' ${getHoverWeight(charIndex)}`,
          cursor: 'default',
        };

      case 'scroll':
        return {
          ...baseStyle,
          fontVariationSettings: `'wght' ${getScrollWeight(charIndex)}`,
        };

      default:
        return {
          ...baseStyle,
          fontVariationSettings: `'wght' ${baseWeight}`,
        };
    }
  };

  return (
    <Box
      ref={containerRef}
      component="span"
      sx={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        ...sx,
      }}
      {...props}
    >
      {characters.map((char, index) => (
        <Box
          key={index}
          component="span"
          sx={getCharStyle(index)}
          onMouseEnter={animation === 'hover' ? () => setHoveredIndex(index) : undefined}
          onMouseLeave={animation === 'hover' ? () => setHoveredIndex(-1) : undefined}
        >
          {char === ' ' ? '\u00A0' : char}
        </Box>
      ))}
    </Box>
  );
}

/**
 * DynamicVariantWord 컴포넌트
 *
 * 단어 단위로 Variable font 애니메이션을 적용하는 컴포넌트.
 *
 * Props:
 * @param {string} text - 표시할 텍스트 [Required]
 * @param {string} animation - 애니메이션 유형 [Optional, 기본값: 'breathe']
 * @param {object} axisRange - axis 범위 [Optional]
 * @param {number} duration - 애니메이션 주기 (ms) [Optional, 기본값: 3000]
 * @param {number} wordDelay - 단어당 지연 (ms) [Optional, 기본값: 200]
 *
 * Example usage:
 * <DynamicVariantWord text="KINETIC TYPOGRAPHY" animation="breathe" />
 */
export function DynamicVariantWord({
  text,
  axisRange = { wght: [300, 900] },
  duration = 3000,
  wordDelay = 200,
  fontFamily = '"Inter Variable", "Pretendard Variable", sans-serif',
  fontSize = 'clamp(2rem, 6vw, 4rem)',
  sx,
  ...props
}) {
  const words = useMemo(() => text.split(' '), [text]);

  const breatheKeyframes = useMemo(() => {
    const [minWeight, maxWeight] = axisRange.wght || [300, 900];
    return keyframes`
      0%, 100% {
        font-variation-settings: 'wght' ${minWeight};
      }
      50% {
        font-variation-settings: 'wght' ${maxWeight};
      }
    `;
  }, [axisRange]);

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: '0.3em',
        ...sx,
      }}
      {...props}
    >
      {words.map((word, index) => (
        <Box
          key={index}
          component="span"
          sx={{
            display: 'inline-block',
            fontFamily,
            fontSize,
            lineHeight: 1.1,
            animation: `${breatheKeyframes} ${duration}ms ease-in-out infinite`,
            animationDelay: `${index * wordDelay}ms`,
          }}
        >
          {word}
        </Box>
      ))}
    </Box>
  );
}
