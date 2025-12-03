import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PageContainer } from '../../components/container/PageContainer';
import { SectionContainer } from '../../components/container/SectionContainer';
import { DocumentTitle } from '../../components/storybookDocumentation';

export default {
  title: 'Custom Component/Container/Page & Section',
  component: PageContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => (
    <Box>
      <DocumentTitle
        title="Page & Section Container"
        status="Ready"
        note="Layout containers for consistent spacing"
        brandName="Component"
        systemName="Container"
        version="1.0"
      />
      
      <PageContainer>
        <SectionContainer sx={{ border: '1px dashed grey', bgcolor: 'grey.50' }}>
          <Typography variant="h5" gutterBottom>Page Container (maxWidth="xl")</Typography>
          <Typography paragraph>
            This container centers your content and applies horizontal padding.
            Inside is a Section Container with default vertical padding.
          </Typography>
        </SectionContainer>

        <SectionContainer sx={{ border: '1px dashed grey', bgcolor: 'primary.50' }}>
          <Typography variant="h6">Another Section</Typography>
          <Typography>
            Sections stack vertically with consistent spacing.
          </Typography>
        </SectionContainer>
      </PageContainer>
    </Box>
  ),
};

