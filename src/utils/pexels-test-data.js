/**
 * Pexels Test Data
 *
 * Storybook 및 개발 테스트용 이미지/비디오 데이터입니다.
 * Pexels API에서 제공하는 무료 스톡 미디어를 사용합니다.
 *
 * ## 사용법
 * ```js
 * import { testImages, testVideos, getRandomImage } from '@/utils/pexels-test-data';
 *
 * // 특정 카테고리 이미지
 * <img src={testImages.nature[0].src.medium} />
 *
 * // 랜덤 이미지
 * <img src={getRandomImage('product').src.large} />
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
// Test Images by Category
// ============================================================
export const testImages = {
  // 자연/풍경
  nature: [
    {
      id: 3408744,
      alt: 'Green forest during daytime',
      photographer: 'Johannes Plenio',
      src: createImageSizes(3408744),
      aspectRatio: '16/9',
    },
    {
      id: 1287145,
      alt: 'Body of water during golden hour',
      photographer: 'Aleksandar Pasaric',
      src: createImageSizes(1287145),
      aspectRatio: '16/9',
    },
    {
      id: 1547813,
      alt: 'Silhouette of mountains during sunset',
      photographer: 'Simon Berger',
      src: createImageSizes(1547813),
      aspectRatio: '16/9',
    },
    {
      id: 1486974,
      alt: 'Pathway surrounded by green trees',
      photographer: 'Felix Mittermeier',
      src: createImageSizes(1486974),
      aspectRatio: '4/3',
    },
  ],

  // 제품/오브젝트
  product: [
    {
      id: 90946,
      alt: 'White ceramic teacup on saucer',
      photographer: 'Pixabay',
      src: createImageSizes(90946),
      aspectRatio: '4/3',
    },
    {
      id: 1037992,
      alt: 'Silver MacBook beside black smartphone',
      photographer: 'Pixabay',
      src: createImageSizes(1037992),
      aspectRatio: '16/9',
    },
    {
      id: 279906,
      alt: 'Space gray iPhone 6',
      photographer: 'Torsten Dettlaff',
      src: createImageSizes(279906),
      aspectRatio: '3/4',
    },
    {
      id: 1092644,
      alt: 'Black and silver camera on brown surface',
      photographer: 'Alex Andrews',
      src: createImageSizes(1092644),
      aspectRatio: '4/3',
    },
  ],

  // 인테리어/건축
  interior: [
    {
      id: 1643383,
      alt: 'Living room with gray sofa',
      photographer: 'Jean van der Meulen',
      src: createImageSizes(1643383),
      aspectRatio: '16/9',
    },
    {
      id: 1571460,
      alt: 'Modern kitchen interior',
      photographer: 'Jean van der Meulen',
      src: createImageSizes(1571460),
      aspectRatio: '4/3',
    },
    {
      id: 2062426,
      alt: 'Minimalist bedroom design',
      photographer: 'Jean van der Meulen',
      src: createImageSizes(2062426),
      aspectRatio: '16/9',
    },
    {
      id: 1457842,
      alt: 'White wooden table with chairs',
      photographer: 'Pixabay',
      src: createImageSizes(1457842),
      aspectRatio: '4/3',
    },
  ],

  // 인물/라이프스타일
  people: [
    {
      id: 3771836,
      alt: 'Woman wearing white dress shirt',
      photographer: 'Andrea Piacquadio',
      src: createImageSizes(3771836),
      aspectRatio: '3/4',
    },
    {
      id: 3184398,
      alt: 'People working in modern office',
      photographer: 'fauxels',
      src: createImageSizes(3184398),
      aspectRatio: '16/9',
    },
    {
      id: 3184360,
      alt: 'Group of people sitting in conference room',
      photographer: 'fauxels',
      src: createImageSizes(3184360),
      aspectRatio: '16/9',
    },
    {
      id: 3760263,
      alt: 'Man using laptop computer',
      photographer: 'Andrea Piacquadio',
      src: createImageSizes(3760263),
      aspectRatio: '4/3',
    },
  ],

  // 음식
  food: [
    {
      id: 1640777,
      alt: 'Flat lay photography of vegetable salad',
      photographer: 'Ella Olsson',
      src: createImageSizes(1640777),
      aspectRatio: '1/1',
    },
    {
      id: 1099680,
      alt: 'Cooked food on plate',
      photographer: 'Trang Doan',
      src: createImageSizes(1099680),
      aspectRatio: '4/3',
    },
    {
      id: 376464,
      alt: 'Brown bread on white surface',
      photographer: 'Pixabay',
      src: createImageSizes(376464),
      aspectRatio: '16/9',
    },
    {
      id: 1279330,
      alt: 'Variety of fruits on display',
      photographer: 'Pixabay',
      src: createImageSizes(1279330),
      aspectRatio: '4/3',
    },
  ],

  // 추상/패턴
  abstract: [
    {
      id: 2088205,
      alt: 'Blue and white abstract painting',
      photographer: 'Anni Roenkae',
      src: createImageSizes(2088205),
      aspectRatio: '3/4',
    },
    {
      id: 3075993,
      alt: 'Orange and yellow gradient',
      photographer: 'Gradienta',
      src: createImageSizes(3075993),
      aspectRatio: '16/9',
    },
    {
      id: 2693212,
      alt: 'Purple and pink abstract',
      photographer: 'Anni Roenkae',
      src: createImageSizes(2693212),
      aspectRatio: '4/3',
    },
    {
      id: 1939485,
      alt: 'Colorful gradient background',
      photographer: 'Gradienta',
      src: createImageSizes(1939485),
      aspectRatio: '16/9',
    },
  ],
};

// ============================================================
// Test Videos
// ============================================================
export const testVideos = {
  // 자연/풍경 비디오
  nature: [
    {
      id: 857251,
      alt: 'Aerial view of forest',
      photographer: 'Pressmaster',
      duration: 15,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/857251/857251-hd_1920_1080_25fps.mp4',
        sd: 'https://videos.pexels.com/video-files/857251/857251-sd_640_360_25fps.mp4',
      },
      poster: createImageSizes(3408744).medium,
    },
    {
      id: 1093662,
      alt: 'Ocean waves on shore',
      photographer: 'Engin Akyurt',
      duration: 20,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4',
        sd: 'https://videos.pexels.com/video-files/1093662/1093662-sd_640_360_30fps.mp4',
      },
      poster: createImageSizes(1287145).medium,
    },
    {
      id: 856973,
      alt: 'Sunset timelapse',
      photographer: 'Pixabay',
      duration: 12,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/856973/856973-hd_1280_720_25fps.mp4',
        sd: 'https://videos.pexels.com/video-files/856973/856973-sd_640_360_25fps.mp4',
      },
      poster: createImageSizes(1547813).medium,
    },
  ],

  // 추상/모션 그래픽
  abstract: [
    {
      id: 3129671,
      alt: 'Abstract colorful liquid motion',
      photographer: 'Rostislav Uzunov',
      duration: 10,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4',
        sd: 'https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_30fps.mp4',
      },
      poster: createImageSizes(2088205).medium,
    },
    {
      id: 3141210,
      alt: 'Gradient color animation',
      photographer: 'Rostislav Uzunov',
      duration: 8,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/3141210/3141210-hd_1920_1080_30fps.mp4',
        sd: 'https://videos.pexels.com/video-files/3141210/3141210-sd_640_360_30fps.mp4',
      },
      poster: createImageSizes(3075993).medium,
    },
  ],

  // 도시/라이프스타일
  urban: [
    {
      id: 1536919,
      alt: 'City traffic at night',
      photographer: 'MART PRODUCTION',
      duration: 18,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/1536919/1536919-hd_1920_1080_30fps.mp4',
        sd: 'https://videos.pexels.com/video-files/1536919/1536919-sd_640_360_30fps.mp4',
      },
      poster: createImageSizes(1643383).medium,
    },
    {
      id: 3015510,
      alt: 'People walking in city',
      photographer: 'Kelly',
      duration: 14,
      aspectRatio: '16/9',
      src: {
        hd: 'https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4',
        sd: 'https://videos.pexels.com/video-files/3015510/3015510-sd_640_360_24fps.mp4',
      },
      poster: createImageSizes(3184398).medium,
    },
  ],
};

// ============================================================
// Utility Functions
// ============================================================

/**
 * 특정 카테고리에서 랜덤 이미지 반환
 * @param {string} category - 카테고리명 (nature, product, interior, people, food, abstract)
 * @returns {Object} 이미지 객체
 */
export const getRandomImage = (category = 'nature') => {
  const images = testImages[category] || testImages.nature;
  return images[Math.floor(Math.random() * images.length)];
};

/**
 * 특정 카테고리에서 랜덤 비디오 반환
 * @param {string} category - 카테고리명 (nature, abstract, urban)
 * @returns {Object} 비디오 객체
 */
export const getRandomVideo = (category = 'nature') => {
  const videos = testVideos[category] || testVideos.nature;
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
 * 플레이스홀더 이미지 URL 생성 (Pexels 기반)
 * @param {number} width - 너비
 * @param {number} height - 높이
 * @param {string} category - 카테고리
 * @returns {string} 이미지 URL
 */
export const getPlaceholder = (width = 400, height = 300, category = 'nature') => {
  const image = getRandomImage(category);
  return `https://images.pexels.com/photos/${image.id}/pexels-photo-${image.id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`;
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
  getPlaceholder,
  allImages,
  allVideos,
};
