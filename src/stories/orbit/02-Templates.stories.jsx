import { StatsOverview } from '../../components/templates/StatsOverview';
import { MediaGridGallery } from '../../components/templates/MediaGridGallery';
import { TaskTableBoard } from '../../components/templates/TaskTableBoard';
import { ConfigFormSection } from '../../components/templates/ConfigFormSection';
import { DocumentTitle, PageContainer, SectionTitle } from '../../components/storybookDocumentation';

export default {
  title: 'Orbit Project/02. Templates',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Dashboard_StatsOverview = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Stats Overview"
        status="Ready"
        note="Dashboard metric section template"
        brandName="Orbit"
        systemName="Template"
        version="1.0"
      />
      <StatsOverview />
    </PageContainer>
  ),
};

export const Gallery_MediaGrid = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Media Grid Gallery"
        status="Ready"
        note="Searchable asset library template"
        brandName="Orbit"
        systemName="Template"
        version="1.0"
      />
      <MediaGridGallery />
    </PageContainer>
  ),
};

export const Manager_TaskBoard = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Task Table Board"
        status="Ready"
        note="Project management table template"
        brandName="Orbit"
        systemName="Template"
        version="1.0"
      />
      <TaskTableBoard />
    </PageContainer>
  ),
};

export const Settings_ConfigForm = {
  render: () => (
    <PageContainer>
      <DocumentTitle
        title="Config Form Section"
        status="Ready"
        note="User settings form template"
        brandName="Orbit"
        systemName="Template"
        version="1.0"
      />
      <ConfigFormSection />
    </PageContainer>
  ),
};

