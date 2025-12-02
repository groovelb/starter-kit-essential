import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CardContainer } from '../../../components/card/CardContainer';

export default {
  title: 'Custom Component/Card/CardContainer',
  component: CardContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## CardContainer

A pre-styled card wrapper component with multiple visual variants.
Use this as a foundation for custom card layouts.

### Variants
- **outlined**: Border-based card (default)
- **elevation**: Shadow-based card
- **ghost**: Transparent background
- **filled**: Solid background color
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'elevation', 'ghost', 'filled'],
      description: 'Visual style variant',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding size',
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Border radius size',
    },
    isInteractive: {
      control: 'boolean',
      description: 'Enable hover effects',
    },
    isSelected: {
      control: 'boolean',
      description: 'Show selected state',
    },
  },
};

/**
 * Default outlined card
 */
export const Default = {
  args: {
    variant: 'outlined',
    padding: 'md',
    radius: 'md',
    isInteractive: false,
    isSelected: false,
    children: (
      <Box>
        <Typography variant="h6" sx={ { mb: 1 } }>Card Title</Typography>
        <Typography variant="body2" color="text.secondary">
          This is a basic card container with outlined style.
        </Typography>
      </Box>
    ),
  },
};

/**
 * All variants comparison
 */
export const Variants = {
  render: () => (
    <Stack direction="row" spacing={ 3 } sx={ { p: 2 } }>
      { ['outlined', 'elevation', 'ghost', 'filled'].map((variant) => (
        <CardContainer
          key={ variant }
          variant={ variant }
          sx={ { width: 200 } }
        >
          <Typography variant="subtitle2" sx={ { textTransform: 'capitalize', mb: 1 } }>
            { variant }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Card content here
          </Typography>
        </CardContainer>
      )) }
    </Stack>
  ),
};

/**
 * Interactive cards with hover effects
 */
export const Interactive = {
  render: () => (
    <Stack direction="row" spacing={ 3 } sx={ { p: 2 } }>
      { ['outlined', 'elevation', 'filled'].map((variant) => (
        <CardContainer
          key={ variant }
          variant={ variant }
          isInteractive
          sx={ { width: 200 } }
        >
          <Typography variant="subtitle2" sx={ { textTransform: 'capitalize', mb: 1 } }>
            { variant }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hover to see effect
          </Typography>
        </CardContainer>
      )) }
    </Stack>
  ),
};

/**
 * Selected state
 */
export const Selected = {
  render: () => (
    <Stack direction="row" spacing={ 3 } sx={ { p: 2 } }>
      <CardContainer variant="outlined" sx={ { width: 200 } }>
        <Typography variant="subtitle2">Normal</Typography>
      </CardContainer>
      <CardContainer variant="outlined" isSelected sx={ { width: 200 } }>
        <Typography variant="subtitle2">Selected</Typography>
      </CardContainer>
    </Stack>
  ),
};

/**
 * Padding sizes
 */
export const Padding = {
  render: () => (
    <Stack direction="row" spacing={ 3 } alignItems="flex-start" sx={ { p: 2 } }>
      { ['none', 'sm', 'md', 'lg'].map((padding) => (
        <CardContainer
          key={ padding }
          variant="outlined"
          padding={ padding }
        >
          <Typography variant="caption">padding: { padding }</Typography>
        </CardContainer>
      )) }
    </Stack>
  ),
};
