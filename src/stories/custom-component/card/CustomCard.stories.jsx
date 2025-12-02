import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CustomCard } from '../../../components/card/CustomCard';

export default {
  title: 'Custom Component/Card/CustomCard',
  component: CustomCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## CustomCard

A flexible card component with media and content areas.
Supports multiple layout modes for different use cases.

### Layouts
- **vertical**: Media on top, content below (default)
- **horizontal**: Media and content side by side
- **overlay**: Content overlaid on media
        `,
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal', 'overlay'],
      description: 'Card layout mode',
    },
    mediaPosition: {
      control: 'radio',
      options: ['start', 'end'],
      description: 'Media position relative to content',
    },
    mediaRatio: {
      control: 'select',
      options: ['1/1', '4/3', '16/9', '21/9'],
      description: 'Media aspect ratio',
    },
    contentPadding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Content area padding',
    },
    isInteractive: {
      control: 'boolean',
      description: 'Enable hover effects',
    },
  },
};

const sampleImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';

/**
 * Default vertical layout
 */
export const Default = {
  args: {
    layout: 'vertical',
    mediaSrc: sampleImage,
    mediaAlt: 'Mountain landscape',
    mediaRatio: '16/9',
    contentPadding: 'md',
    isInteractive: false,
    children: (
      <>
        <Typography variant="h6" sx={ { mb: 0.5 } }>Card Title</Typography>
        <Typography variant="body2" color="text.secondary">
          A beautiful mountain landscape captured at sunset.
        </Typography>
      </>
    ),
  },
};

/**
 * All layout modes
 */
export const Layouts = {
  render: () => (
    <Stack spacing={ 4 } sx={ { p: 2, maxWidth: 800 } }>
      {/* Vertical */}
      <Box>
        <Typography variant="caption" sx={ { mb: 1, display: 'block', color: 'text.secondary' } }>
          VERTICAL
        </Typography>
        <CustomCard
          layout="vertical"
          mediaSrc={ sampleImage }
          mediaRatio="16/9"
          isInteractive
          sx={ { maxWidth: 320 } }
        >
          <Typography variant="h6">Vertical Card</Typography>
          <Typography variant="body2" color="text.secondary">
            Media on top, content below.
          </Typography>
        </CustomCard>
      </Box>

      {/* Horizontal */}
      <Box>
        <Typography variant="caption" sx={ { mb: 1, display: 'block', color: 'text.secondary' } }>
          HORIZONTAL
        </Typography>
        <CustomCard
          layout="horizontal"
          mediaSrc={ sampleImage }
          mediaRatio="1/1"
          isInteractive
          sx={ { maxWidth: 500 } }
        >
          <Typography variant="h6">Horizontal Card</Typography>
          <Typography variant="body2" color="text.secondary">
            Media and content side by side.
          </Typography>
        </CustomCard>
      </Box>

      {/* Overlay */}
      <Box>
        <Typography variant="caption" sx={ { mb: 1, display: 'block', color: 'text.secondary' } }>
          OVERLAY
        </Typography>
        <CustomCard
          layout="overlay"
          mediaSrc={ sampleImage }
          isInteractive
          sx={ { maxWidth: 400, height: 280 } }
        >
          <Typography variant="h5" sx={ { fontWeight: 600 } }>Overlay Card</Typography>
          <Typography variant="body2" sx={ { opacity: 0.8 } }>
            Content overlaid on the media with gradient.
          </Typography>
        </CustomCard>
      </Box>
    </Stack>
  ),
};

/**
 * Interactive card grid
 */
export const CardGrid = {
  render: () => (
    <Box
      sx={ {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 3,
        p: 2,
        maxWidth: 900,
      } }
    >
      { [1, 2, 3].map((i) => (
        <CustomCard
          key={ i }
          layout="vertical"
          mediaSrc={ `https://images.unsplash.com/photo-${1500000000000 + i * 100}?w=400&q=80` }
          mediaRatio="4/3"
          isInteractive
        >
          <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
            Project { i }
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>
            Short description of the project.
          </Typography>
          <Button size="small" variant="outlined">
            View Details
          </Button>
        </CustomCard>
      )) }
    </Box>
  ),
};

/**
 * Media position variations
 */
export const MediaPosition = {
  render: () => (
    <Stack spacing={ 3 } sx={ { p: 2, maxWidth: 500 } }>
      <CustomCard
        layout="horizontal"
        mediaPosition="start"
        mediaSrc={ sampleImage }
        mediaRatio="1/1"
      >
        <Typography variant="subtitle1">Media Start</Typography>
        <Typography variant="body2" color="text.secondary">
          Image on the left side.
        </Typography>
      </CustomCard>

      <CustomCard
        layout="horizontal"
        mediaPosition="end"
        mediaSrc={ sampleImage }
        mediaRatio="1/1"
      >
        <Typography variant="subtitle1">Media End</Typography>
        <Typography variant="body2" color="text.secondary">
          Image on the right side.
        </Typography>
      </CustomCard>
    </Stack>
  ),
};
