import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppShell } from '../../../components/navigation/AppShell';
import { NavMenu } from '../../../components/navigation/NavMenu';

/**
 * Story 컴포넌트: Basic 데모
 */
function BasicDemo() {
  const [activeId, setActiveId] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Box sx={ { height: 500, border: '1px solid', borderColor: 'divider', borderRadius: 2, overflow: 'hidden' } }>
      <AppShell
        logo={
          <Typography variant="h6" sx={ { fontWeight: 700 } }>
            Brand
          </Typography>
        }
        headerPersistent={
          <IconButton size="small">
            <AccountCircleIcon />
          </IconButton>
        }
        headerCollapsible={
          <NavMenu
            items={ menuItems }
            activeId={ activeId }
            onItemClick={ (item) => setActiveId(item.id) }
          />
        }
        breakpoint="md"
      >
        <Box sx={ { p: 4 } }>
          <Typography variant="h4" sx={ { mb: 2 } }>
            Welcome to { activeId.charAt(0).toUpperCase() + activeId.slice(1) }
          </Typography>
          <Typography color="text.secondary">
            Resize the window to see responsive behavior.
            On mobile, the navigation moves to a drawer menu.
          </Typography>
        </Box>
      </AppShell>
    </Box>
  );
}

/**
 * Story 컴포넌트: Full Featured 데모
 */
function FullFeaturedDemo() {
  const [activeId, setActiveId] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Box sx={ { height: 600, border: '1px solid', borderColor: 'divider', borderRadius: 2, overflow: 'hidden' } }>
      <AppShell
        logo={
          <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
            <Box
              sx={ {
                width: 32,
                height: 32,
                borderRadius: 1,
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: 14,
              } }
            >
              SK
            </Box>
            <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
              Starter Kit
            </Typography>
          </Box>
        }
        headerPersistent={
          <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
            <IconButton size="small">
              <SearchIcon />
            </IconButton>
            <Button variant="contained" size="small" sx={ { display: { xs: 'none', sm: 'flex' } } }>
              Get Started
            </Button>
          </Box>
        }
        headerCollapsible={
          <NavMenu
            items={ menuItems }
            activeId={ activeId }
            variant="underline"
            onItemClick={ (item) => setActiveId(item.id) }
          />
        }
        drawerFooter={
          <Button variant="contained" fullWidth>
            Get Started
          </Button>
        }
        breakpoint="lg"
      >
        <Box
          sx={ {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey.50',
          } }
        >
          <Box sx={ { textAlign: 'center', p: 4 } }>
            <Typography variant="h3" sx={ { fontWeight: 700, mb: 2 } }>
              { activeId.charAt(0).toUpperCase() + activeId.slice(1) } Page
            </Typography>
            <Typography color="text.secondary" sx={ { maxWidth: 400 } }>
              This is the main content area. The AppShell provides a
              responsive header with automatic drawer conversion on mobile.
            </Typography>
          </Box>
        </Box>
      </AppShell>
    </Box>
  );
}

export default {
  title: 'Custom Component/Navigation/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## AppShell

A responsive application shell with header and main content areas.
Automatically converts navigation to a drawer menu on mobile.

### Features
- Responsive header with breakpoint customization
- Automatic mobile drawer conversion
- Sticky header option
- Transparent header mode for hero sections
- Slot-based architecture for flexible composition
        `,
      },
    },
  },
  argTypes: {
    breakpoint: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Responsive breakpoint for drawer conversion',
    },
    headerHeight: {
      control: { type: 'number', min: 48, max: 96 },
      description: 'Header height in pixels',
    },
    drawerWidth: {
      control: { type: 'number', min: 200, max: 400 },
      description: 'Drawer width in pixels',
    },
    hasHeaderBorder: {
      control: 'boolean',
      description: 'Show header bottom border',
    },
    isHeaderSticky: {
      control: 'boolean',
      description: 'Make header sticky on scroll',
    },
    isHeaderTransparent: {
      control: 'boolean',
      description: 'Transparent header background',
    },
  },
};

/**
 * Basic usage
 */
export const Default = {
  render: () => <BasicDemo />,
};

/**
 * Full featured example
 */
export const FullFeatured = {
  render: () => <FullFeaturedDemo />,
};

/**
 * Transparent header (for hero sections)
 */
export const TransparentHeader = {
  render: () => (
    <Box sx={ { height: 500, borderRadius: 2, overflow: 'hidden' } }>
      <AppShell
        logo={
          <Typography variant="h6" sx={ { fontWeight: 700, color: 'white' } }>
            Brand
          </Typography>
        }
        headerCollapsible={
          <NavMenu
            items={ [
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' },
            ] }
            activeId="home"
            sx={ { '& button': { color: 'white' } } }
          />
        }
        isHeaderTransparent
        hasHeaderBorder={ false }
      >
        <Box
          sx={ {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            color: 'white',
          } }
        >
          <Typography variant="h2" sx={ { fontWeight: 700 } }>
            Hero Section
          </Typography>
        </Box>
      </AppShell>
    </Box>
  ),
};
