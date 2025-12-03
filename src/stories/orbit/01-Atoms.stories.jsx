import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { MetricCard } from '../../components/orbit/cards/MetricCard';
import { AssetCard } from '../../components/orbit/cards/AssetCard';
import { ProjectCard } from '../../components/orbit/cards/ProjectCard';
import { StatusBadge } from '../../components/orbit/data/StatusBadge';
import { SearchBar } from '../../components/orbit/input/SearchBar';
import { metricData, assetData, projectData } from '../../components/orbit/data/mock';
import { DocumentTitle, PageContainer, SectionTitle } from '../../components/storybookDocumentation';

export default {
  title: 'Orbit Project/01. Atoms & Wrappers',
  parameters: {
    layout: 'padded',
  },
};

export const AllAtoms = {
  render: () => (
    <>
      <DocumentTitle
        title="Orbit Atoms"
        status="Ready"
        note="Wrapper components for Orbit Project"
        brandName="Orbit"
        systemName="Design System"
        version="1.0"
      />
      <PageContainer>
        
        {/* 1. Metric Cards */}
        <SectionTitle title="Metric Cards" description="Dashboard key indicators" />
        <Stack direction="row" spacing={2} sx={{ mb: 4, overflowX: 'auto', pb: 1 }}>
          {metricData.map((item) => (
            <Box key={item.id} sx={{ width: 280, flexShrink: 0 }}>
              <MetricCard data={item} />
            </Box>
          ))}
        </Stack>

        {/* 2. Asset Cards */}
        <SectionTitle title="Asset Cards" description="Gallery media items" />
        <Stack direction="row" spacing={2} sx={{ mb: 4, overflowX: 'auto', pb: 1 }}>
          {assetData.slice(0, 4).map((item) => (
            <Box key={item.id} sx={{ width: 280, flexShrink: 0 }}>
              <AssetCard data={item} />
            </Box>
          ))}
        </Stack>

        {/* 3. Project Cards */}
        <SectionTitle title="Project Cards" description="Kanban/Grid project items" />
        <Stack direction="row" spacing={2} sx={{ mb: 4, overflowX: 'auto', pb: 1 }}>
          {projectData.slice(0, 4).map((item) => (
            <Box key={item.id} sx={{ width: 320, flexShrink: 0 }}>
              <ProjectCard data={item} />
            </Box>
          ))}
        </Stack>

        {/* 4. Status Badges */}
        <SectionTitle title="Status Badges" description="Semantic status indicators" />
        <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
          {['Completed', 'In Progress', 'Review', 'Delayed', 'Urgent', 'Planning'].map((status) => (
            <StatusBadge key={status} status={status} />
          ))}
        </Stack>

        {/* 5. Input */}
        <SectionTitle title="Inputs" description="Search and form inputs" />
        <Box sx={{ width: 400, mb: 4 }}>
          <SearchBar />
        </Box>

      </PageContainer>
    </>
  ),
};

