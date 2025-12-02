import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavMenu } from '../../../components/navigation/NavMenu';

/**
 * Story 컴포넌트: Interactive 데모
 */
function InteractiveDemo() {
  const [activeId, setActiveId] = useState('home');

  const items = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <InfoIcon /> },
    { id: 'work', label: 'Work', icon: <WorkIcon /> },
    { id: 'contact', label: 'Contact', icon: <MailIcon /> },
  ];

  return (
    <Box sx={ { p: 4 } }>
      <NavMenu
        items={ items }
        activeId={ activeId }
        onItemClick={ (item) => setActiveId(item.id) }
      />
      <Typography variant="body2" sx={ { mt: 3, color: 'text.secondary' } }>
        Active: { activeId }
      </Typography>
    </Box>
  );
}

/**
 * Story 컴포넌트: Variants 데모
 */
function VariantsDemo() {
  const [activeId, setActiveId] = useState('home');

  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Stack spacing={ 4 } sx={ { p: 4 } }>
      { ['default', 'pills', 'underline'].map((variant) => (
        <Box key={ variant }>
          <Typography
            variant="caption"
            sx={ { mb: 1.5, display: 'block', color: 'text.secondary', textTransform: 'uppercase' } }
          >
            { variant }
          </Typography>
          <NavMenu
            items={ items }
            activeId={ activeId }
            variant={ variant }
            onItemClick={ (item) => setActiveId(item.id) }
          />
        </Box>
      )) }
    </Stack>
  );
}

/**
 * Story 컴포넌트: Vertical 데모
 */
function VerticalDemo() {
  const [activeId, setActiveId] = useState('home');

  const items = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <InfoIcon /> },
    { id: 'work', label: 'Work', icon: <WorkIcon /> },
    { id: 'contact', label: 'Contact', icon: <MailIcon /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon />, disabled: true },
  ];

  return (
    <Box sx={ { p: 4, maxWidth: 240 } }>
      <NavMenu
        items={ items }
        activeId={ activeId }
        orientation="vertical"
        variant="default"
        onItemClick={ (item) => setActiveId(item.id) }
      />
    </Box>
  );
}

export default {
  title: 'Custom Component/Navigation/NavMenu',
  component: NavMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## NavMenu

A versatile navigation menu component for headers, sidebars, and drawers.
Supports horizontal and vertical orientations with multiple style variants.

### Features
- Multiple variants: default, pills, underline
- Horizontal and vertical orientation
- Icon + text combination
- Active state indication
- Disabled items support
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Menu orientation',
    },
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline'],
      description: 'Visual style variant',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Menu item size',
    },
    isIconOnly: {
      control: 'boolean',
      description: 'Show only icons',
    },
    hasIconStart: {
      control: 'boolean',
      description: 'Place icon before label',
    },
  },
};

/**
 * Default horizontal menu
 */
export const Default = {
  args: {
    items: [
      { id: 'home', label: 'Home', icon: <HomeIcon /> },
      { id: 'about', label: 'About', icon: <InfoIcon /> },
      { id: 'work', label: 'Work', icon: <WorkIcon /> },
      { id: 'contact', label: 'Contact', icon: <MailIcon /> },
    ],
    activeId: 'home',
    orientation: 'horizontal',
    variant: 'default',
    size: 'md',
  },
};

/**
 * Interactive menu
 */
export const Interactive = {
  render: () => <InteractiveDemo />,
};

/**
 * Style variants
 */
export const Variants = {
  render: () => <VariantsDemo />,
};

/**
 * Vertical orientation (sidebar)
 */
export const Vertical = {
  render: () => <VerticalDemo />,
};

/**
 * Icon only mode
 */
export const IconOnly = {
  render: () => (
    <Box sx={ { p: 4 } }>
      <NavMenu
        items={ [
          { id: 'home', label: 'Home', icon: <HomeIcon /> },
          { id: 'about', label: 'About', icon: <InfoIcon /> },
          { id: 'work', label: 'Work', icon: <WorkIcon /> },
          { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
        ] }
        activeId="home"
        isIconOnly
        variant="pills"
      />
    </Box>
  ),
};

/**
 * Size comparison
 */
export const Sizes = {
  render: () => (
    <Stack spacing={ 4 } sx={ { p: 4 } }>
      { ['sm', 'md', 'lg'].map((size) => (
        <Box key={ size }>
          <Typography
            variant="caption"
            sx={ { mb: 1, display: 'block', color: 'text.secondary' } }
          >
            { size.toUpperCase() }
          </Typography>
          <NavMenu
            items={ [
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'work', label: 'Work' },
            ] }
            activeId="home"
            size={ size }
            variant="pills"
          />
        </Box>
      )) }
    </Stack>
  ),
};
