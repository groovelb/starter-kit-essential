import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import VideoScrubbing from '../../../components/media/VideoScrubbing';

// 확실히 작동하는 테스트 비디오 URL
const TEST_VIDEO_URL = 'https://www.w3schools.com/html/mov_bbb.mp4';

export default {
  title: 'Custom Component/Media/VideoScrubbing',
  component: VideoScrubbing,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## VideoScrubbing

스크롤 위치에 따라 비디오를 프레임 단위로 재생(스크러빙)하는 컴포넌트입니다.

### 핵심 기능
- **스크롤 기반 재생**: 페이지 스크롤에 따라 비디오 프레임 이동
- **성능 최적화**: IntersectionObserver + requestAnimationFrame (~60fps)
- **진행도 콜백**: onProgressChange로 외부에서 진행도(0-1) 활용 가능

### 사용 시 주의
- 비디오는 \`preload="auto"\`로 전체 로드 필요
- 긴 비디오는 로딩 시간 고려
        `,
      },
    },
  },
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['16/9', '4/3', '21/9', '1/1'],
      description: 'CSS aspect-ratio 값',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '16/9' },
      },
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill'],
      description: 'CSS object-fit 값',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'cover' },
      },
    },
  },
};

/** 스크롤 테스트를 위한 래퍼 컴포넌트 */
const ScrollTestWrapper = ({ children, height = '300vh' }) => {
  return (
    <Box sx={{ minHeight: height }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: 'grey.900',
          color: 'white',
          py: 1,
          px: 2,
        }}
      >
        <Typography variant="caption" sx={{ opacity: 0.7 }}>
          ↓ 스크롤하여 비디오 스크러빙 테스트
        </Typography>
      </Box>
      <Box sx={{ pt: 4 }}>
        {children}
      </Box>
    </Box>
  );
};

/** 진행도 콜백 데모 컴포넌트 */
const ProgressDemo = () => {
  const [progress, setProgress] = useState(0);

  return (
    <ScrollTestWrapper height="400vh">
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Alert severity="info" sx={{ mb: 2 }}>
          onProgressChange 콜백으로 진행도를 외부에서 활용할 수 있습니다.
        </Alert>

        <Box
          sx={{
            position: 'sticky',
            top: 40,
            zIndex: 5,
            backgroundColor: 'white',
            py: 1,
            mb: 2,
          }}
        >
          <Typography variant="body2">
            Progress: <strong>{(progress * 100).toFixed(1)}%</strong>
          </Typography>
          <Box
            sx={{
              height: 4,
              backgroundColor: 'grey.200',
              mt: 1,
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: `${progress * 100}%`,
                backgroundColor: 'primary.main',
                transition: 'width 0.1s linear',
              }}
            />
          </Box>
        </Box>

        <VideoScrubbing
          src={TEST_VIDEO_URL}
          aspectRatio="16/9"
          onProgressChange={setProgress}
        />
      </Box>
    </ScrollTestWrapper>
  );
};

/** 컨테이너 Ref 데모 컴포넌트 */
const ContainerRefDemo = () => {
  const containerRef = useRef(null);

  return (
    <ScrollTestWrapper height="400vh">
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Alert severity="info" sx={{ mb: 2 }}>
          containerRef를 전달하면 해당 컨테이너 기준으로 스크롤 진행도를 계산합니다.
        </Alert>

        <Box
          ref={containerRef}
          sx={{
            height: '200vh',
            backgroundColor: 'grey.50',
            p: 2,
          }}
        >
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            이 컨테이너 높이 기준으로 비디오 진행
          </Typography>
          <Box sx={{ position: 'sticky', top: 80 }}>
            <VideoScrubbing
              src={TEST_VIDEO_URL}
              containerRef={containerRef}
              aspectRatio="16/9"
            />
          </Box>
        </Box>
      </Box>
    </ScrollTestWrapper>
  );
};

/** 기본 사용 */
export const Default = {
  args: {
    src: TEST_VIDEO_URL,
    aspectRatio: '16/9',
    objectFit: 'cover',
  },
  render: (args) => (
    <ScrollTestWrapper>
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Alert severity="info" sx={{ mb: 2 }}>
          스크롤하면 비디오가 프레임 단위로 재생됩니다.
        </Alert>
        <VideoScrubbing {...args} />
      </Box>
    </ScrollTestWrapper>
  ),
};

/** 진행도 콜백 활용 */
export const WithProgressCallback = {
  render: () => <ProgressDemo />,
};

/** 컨테이너 Ref 사용 */
export const WithContainerRef = {
  render: () => <ContainerRefDemo />,
};

/** 다양한 비율 */
export const AspectRatios = {
  render: () => (
    <ScrollTestWrapper height="500vh">
      <Stack spacing={4} sx={{ px: { xs: 2, md: 4 } }}>
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            21:9 (Cinematic)
          </Typography>
          <VideoScrubbing
            src={TEST_VIDEO_URL}
            aspectRatio="21/9"
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            16:9 (Standard)
          </Typography>
          <VideoScrubbing
            src={TEST_VIDEO_URL}
            aspectRatio="16/9"
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            4:3 (Classic)
          </Typography>
          <VideoScrubbing
            src={TEST_VIDEO_URL}
            aspectRatio="4/3"
          />
        </Box>
      </Stack>
    </ScrollTestWrapper>
  ),
};
