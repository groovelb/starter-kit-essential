/**
 * MUSE Design Inspiration Test Data
 *
 * 디자이너를 위한 시각적 영감 아카이빙 솔루션 MUSE용 테스트 데이터입니다.
 * Pexels API에서 제공하는 무료 스톡 미디어를 사용합니다.
 *
 * ## 카테고리
 * - branding: 브랜딩, 기업 아이덴티티, 로고 레퍼런스
 * - editorial: 에디토리얼, 매거진, 출판 디자인
 * - uiux: UI/UX 디자인, 인터페이스, 디지털 제품
 * - typography: 타이포그래피, 레터링, 폰트 레퍼런스
 * - photography: 제품 촬영, 라이프스타일, 광고 사진
 * - spatial: 공간 디자인, 인테리어, 건축
 * - abstract: 추상, 그라디언트, 텍스처
 * - motion: 모션 그래픽, 영상, 애니메이션
 *
 * ## 사용법
 * ```js
 * import { testImages, testVideos, getRandomImage } from '@/utils/pexels-test-data';
 *
 * // 특정 카테고리 이미지
 * <img src={testImages.branding[0].src.medium} />
 *
 * // 랜덤 이미지
 * <img src={getRandomImage('editorial').src.large} />
 * ```
 *
 * ## 라이선스
 * Pexels License: 무료 사용, 상업적 사용 가능, 저작자 표시 권장
 * https://www.pexels.com/license/
 */

// ============================================================
// Image Size Presets
// ============================================================
const createImageSizes = (id) => ({
  original: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb`,
  large: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
  medium: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=640`,
  small: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=320`,
  thumbnail: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=160`,
});

// ============================================================
// Design Inspiration Images by Category
// 검색 쿼리: graphic design, brand identity, ui design, typography art, abstract art
// ============================================================
export const testImages = {
  // 브랜딩 & 아이덴티티 (query: "brand identity", "logo design")
  branding: [
    {
      id: 4348401,
      alt: 'Brand identity stationery mockup',
      photographer: 'Karolina Grabowska',
      src: createImageSizes(4348401),
      aspectRatio: '4/3',
      tags: ['branding', 'mockup', 'stationery'],
    },
    {
      id: 5708069,
      alt: 'Minimal logo design concept',
      photographer: 'Monstera Production',
      src: createImageSizes(5708069),
      aspectRatio: '4/3',
      tags: ['branding', 'logo', 'minimal'],
    },
    {
      id: 4348404,
      alt: 'Business card mockup layout',
      photographer: 'Karolina Grabowska',
      src: createImageSizes(4348404),
      aspectRatio: '4/3',
      tags: ['branding', 'business card', 'print'],
    },
    {
      id: 6177607,
      alt: 'Packaging design mockup',
      photographer: 'Karolina Grabowska',
      src: createImageSizes(6177607),
      aspectRatio: '4/3',
      tags: ['branding', 'packaging', 'product'],
    },
  ],

  // 그래픽 디자인 & 아트워크 (query: "graphic design", "poster design")
  graphic: [
    {
      id: 1762851,
      alt: 'Graphic design workspace',
      photographer: 'Tranmautritam',
      src: createImageSizes(1762851),
      aspectRatio: '16/9',
      tags: ['graphic', 'workspace', 'creative'],
    },
    {
      id: 4348078,
      alt: 'Color palette design study',
      photographer: 'Karolina Grabowska',
      src: createImageSizes(4348078),
      aspectRatio: '4/3',
      tags: ['graphic', 'color', 'palette'],
    },
    {
      id: 6177639,
      alt: 'Print design materials',
      photographer: 'Karolina Grabowska',
      src: createImageSizes(6177639),
      aspectRatio: '4/3',
      tags: ['graphic', 'print', 'material'],
    },
    {
      id: 4491461,
      alt: 'Design tool collection',
      photographer: 'Karolina Grabowska',
      src: createImageSizes(4491461),
      aspectRatio: '4/3',
      tags: ['graphic', 'tools', 'creative'],
    },
  ],

  // UI/UX & 디지털 제품 (query: "ui design", "app interface")
  uiux: [
    {
      id: 196644,
      alt: 'Mobile app interface design',
      photographer: 'Pixabay',
      src: createImageSizes(196644),
      aspectRatio: '16/9',
      tags: ['uiux', 'mobile', 'interface'],
    },
    {
      id: 1092644,
      alt: 'Digital product mockup',
      photographer: 'Alex Andrews',
      src: createImageSizes(1092644),
      aspectRatio: '4/3',
      tags: ['uiux', 'product', 'mockup'],
    },
    {
      id: 5082579,
      alt: 'Responsive design showcase',
      photographer: 'cottonbro studio',
      src: createImageSizes(5082579),
      aspectRatio: '16/9',
      tags: ['uiux', 'responsive', 'device'],
    },
    {
      id: 5926382,
      alt: 'Dashboard UI concept',
      photographer: 'Tobias Dziuba',
      src: createImageSizes(5926382),
      aspectRatio: '16/9',
      tags: ['uiux', 'dashboard', 'data'],
    },
  ],

  // 타이포그래피 & 레터링 (query: "typography art", "lettering design")
  typography: [
    {
      id: 752484,
      alt: 'Typography poster design',
      photographer: 'Magda Ehlers',
      src: createImageSizes(752484),
      aspectRatio: '3/4',
      tags: ['typography', 'poster', 'bold'],
    },
    {
      id: 1591056,
      alt: 'Neon lettering art',
      photographer: 'Jonathan Borba',
      src: createImageSizes(1591056),
      aspectRatio: '4/3',
      tags: ['typography', 'neon', 'signage'],
    },
    {
      id: 4050320,
      alt: 'Vintage type specimen',
      photographer: 'Suzy Hazelwood',
      src: createImageSizes(4050320),
      aspectRatio: '4/3',
      tags: ['typography', 'vintage', 'specimen'],
    },
    {
      id: 6373305,
      alt: 'Editorial typography layout',
      photographer: 'Mikhail Nilov',
      src: createImageSizes(6373305),
      aspectRatio: '4/3',
      tags: ['typography', 'editorial', 'layout'],
    },
  ],

  // 추상 아트 & 텍스처 (query: "abstract art", "gradient design")
  abstract: [
    {
      id: 2110951,
      alt: 'Abstract fluid art',
      photographer: 'Mudassir Ali',
      src: createImageSizes(2110951),
      aspectRatio: '4/3',
      tags: ['abstract', 'fluid', 'colorful'],
    },
    {
      id: 3109807,
      alt: 'Gradient mesh artwork',
      photographer: 'Codioful',
      src: createImageSizes(3109807),
      aspectRatio: '16/9',
      tags: ['abstract', 'gradient', 'mesh'],
    },
    {
      id: 2693212,
      alt: 'Purple abstract texture',
      photographer: 'Anni Roenkae',
      src: createImageSizes(2693212),
      aspectRatio: '4/3',
      tags: ['abstract', 'texture', 'purple'],
    },
    {
      id: 1762973,
      alt: 'Geometric abstract pattern',
      photographer: 'Anni Roenkae',
      src: createImageSizes(1762973),
      aspectRatio: '16/9',
      tags: ['abstract', 'geometric', 'pattern'],
    },
    {
      id: 3075993,
      alt: 'Warm gradient study',
      photographer: 'Gradienta',
      src: createImageSizes(3075993),
      aspectRatio: '16/9',
      tags: ['abstract', 'gradient', 'warm'],
    },
  ],
};

// ============================================================
// Design Reference Videos (query: "motion graphics", "abstract animation")
// ============================================================
export const testVideos = {
  // 모션 그래픽 & 추상 애니메이션
  motion: [
    {
      id: 3129671,
      alt: 'Abstract liquid motion',
      photographer: 'Rostislav Uzunov',
      duration: 10,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
        sd: 'https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_30fps.mp4',
      },
      poster: createImageSizes(2110951).medium,
      tags: ['motion', 'liquid', 'abstract'],
    },
    {
      id: 3141210,
      alt: 'Gradient color transition',
      photographer: 'Rostislav Uzunov',
      duration: 8,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/3141210/3141210-hd_1920_1080_30fps.mp4',
        sd: 'https://videos.pexels.com/video-files/3141210/3141210-sd_640_360_30fps.mp4',
      },
      poster: createImageSizes(3075993).medium,
      tags: ['motion', 'gradient', 'transition'],
    },
    {
      id: 5377684,
      alt: 'Particle flow animation',
      photographer: 'Rostislav Uzunov',
      duration: 12,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4',
        sd: 'https://videos.pexels.com/video-files/5377684/5377684-sd_640_360_25fps.mp4',
      },
      poster: createImageSizes(2693212).medium,
      tags: ['motion', 'particle', 'flow'],
    },
  ],
};

// ============================================================
// Utility Functions
// ============================================================

/**
 * 특정 카테고리에서 랜덤 이미지 반환
 * @param {string} category - 카테고리명 (branding, editorial, uiux, typography, photography, spatial, abstract, motion)
 * @returns {Object} 이미지 객체
 */
export const getRandomImage = (category = 'abstract') => {
  const images = testImages[category] || testImages.abstract;
  return images[Math.floor(Math.random() * images.length)];
};

/**
 * 특정 카테고리에서 랜덤 비디오 반환
 * @param {string} category - 카테고리명 (abstract, creative, spatial)
 * @returns {Object} 비디오 객체
 */
export const getRandomVideo = (category = 'abstract') => {
  const videos = testVideos[category] || testVideos.abstract;
  return videos[Math.floor(Math.random() * videos.length)];
};

/**
 * 모든 카테고리 이름 반환
 * @returns {Object} { images: string[], videos: string[] }
 */
export const getCategories = () => ({
  images: Object.keys(testImages),
  videos: Object.keys(testVideos),
});

/**
 * 특정 비율의 이미지만 필터링
 * @param {string} aspectRatio - 비율 (예: '16/9', '4/3', '1/1')
 * @returns {Object[]} 필터링된 이미지 배열
 */
export const getImagesByRatio = (aspectRatio) => {
  return Object.values(testImages)
    .flat()
    .filter((img) => img.aspectRatio === aspectRatio);
};

/**
 * 특정 태그로 이미지 필터링
 * @param {string} tag - 태그명
 * @returns {Object[]} 필터링된 이미지 배열
 */
export const getImagesByTag = (tag) => {
  return Object.values(testImages)
    .flat()
    .filter((img) => img.tags?.includes(tag));
};

/**
 * 플레이스홀더 이미지 URL 생성 (Pexels 기반)
 * @param {number} width - 너비
 * @param {number} height - 높이
 * @param {string} category - 카테고리
 * @returns {string} 이미지 URL
 */
export const getPlaceholder = (width = 400, height = 300, category = 'abstract') => {
  const image = getRandomImage(category);
  return `https://images.pexels.com/photos/${image.id}/pexels-photo-${image.id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`;
};

/**
 * 모든 태그 목록 반환
 * @returns {string[]} 고유 태그 배열
 */
export const getAllTags = () => {
  const tags = new Set();
  Object.values(testImages)
    .flat()
    .forEach((img) => {
      img.tags?.forEach((tag) => tags.add(tag));
    });
  return Array.from(tags).sort();
};

// ============================================================
// All Images/Videos Flat Arrays (for easy iteration)
// ============================================================
export const allImages = Object.values(testImages).flat();
export const allVideos = Object.values(testVideos).flat();

export default {
  testImages,
  testVideos,
  getRandomImage,
  getRandomVideo,
  getCategories,
  getImagesByRatio,
  getImagesByTag,
  getPlaceholder,
  getAllTags,
  allImages,
  allVideos,
};
