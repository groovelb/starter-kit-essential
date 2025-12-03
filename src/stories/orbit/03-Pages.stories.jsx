import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppShell } from '../../components/navigation/AppShell';
import { NavMenu } from '../../components/navigation/NavMenu';
import { StatsOverview } from '../../components/templates/StatsOverview';
import { MediaGridGallery } from '../../components/templates/MediaGridGallery';
import { TaskTableBoard } from '../../components/templates/TaskTableBoard';
import { ConfigFormSection } from '../../components/templates/ConfigFormSection';
import { DocumentTitle } from '../../components/storybookDocumentation';
import { PageContainer } from '../../components/container/PageContainer';

// Mock Navigation Items
const navItems = [
  { id: 'dashboard', label: 'Team Pulse' },
  { id: 'assets', label: 'Asset Library' },
  { id: 'projects', label: 'Campaign Manager' },
  { id: 'settings', label: 'Studio Config' },
];

// Wrapper for Page Simulation
const PageWrapper = ({ title, children, activeId = 'dashboard' }) => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <DocumentTitle
      title={title}
      status="Live"
      note="Full page scenario simulation"
      brandName="Orbit"
      systemName="Scenario"
      version="1.0"
    />
    <AppShell
      logo={
        <Typography variant="h6" fontWeight={700} sx={{ letterSpacing: '-0.5px' }}>
          Orbit.
        </Typography>
      }
      headerCollapsible={
        <NavMenu
          items={navItems}
          activeId={activeId}
          variant="underline"
        />
      }
    >
      <PageContainer>
        {children}
      </PageContainer>
    </AppShell>
  </Box>
);

export default {
  title: 'Orbit Project/03. Pages',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Scenario_01_Dashboard = {
  render: () => (
    <PageWrapper title="Team Pulse (Dashboard)" activeId="dashboard">
      <Box sx={{ mb: 4, mt: 4 }}> {/* PageContainer 안에 있어서 mt 추가 */}
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Good Morning, Sarah!
        </Typography>
        <Typography color="text.secondary">
          Here's what's happening with your team today.
        </Typography>
      </Box>
      <StatsOverview />
      {/* 추가적인 Dashboard 컨텐츠(Activity Feed 등)가 여기에 들어갈 수 있음 */}
    </PageWrapper>
  ),
};

export const Scenario_02_Library = {
  render: () => (
    <PageWrapper title="Asset Library" activeId="assets">
      <MediaGridGallery />
    </PageWrapper>
  ),
};

export const Scenario_03_Manager = {
  render: () => (
    <PageWrapper title="Campaign Manager" activeId="projects">
      <TaskTableBoard />
    </PageWrapper>
  ),
};

export const Scenario_04_Settings = {
  render: () => (
    <PageWrapper title="Studio Config" activeId="settings">
      <ConfigFormSection />
    </PageWrapper>
  ),
};
