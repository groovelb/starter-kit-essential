import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { AdvancedTable } from '../orbit/data/AdvancedTable';
import { projectData } from '../orbit/data/mock';
import { SectionContainer } from '../container/SectionContainer';

/**
 * TaskTableBoard
 * 탭 네비게이션이 포함된 프로젝트 관리 보드 템플릿
 * 
 * @param {Array} data - Project 데이터 배열 (기본값: mock projectData)
 */
export const TaskTableBoard = ({ data = projectData }) => {
  const [currentTab, setCurrentTab] = useState(0);

  // 탭 설정
  const tabs = [
    { label: 'All Projects', value: 'all' },
    { label: 'In Progress', value: 'In Progress' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Urgent', value: 'Delayed' }, // Delayed를 Urgent 탭에서 보여줌 (예시)
  ];

  // 데이터 필터링
  const getFilteredData = () => {
    const statusFilter = tabs[currentTab].value;
    if (statusFilter === 'all') return data;
    return data.filter(item => item.status === statusFilter);
  };

  const filteredData = getFilteredData();

  return (
    <SectionContainer>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" fontWeight={700}>
          Campaign Manager
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          New Project
        </Button>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={currentTab} 
          onChange={(_, newValue) => setCurrentTab(newValue)}
          aria-label="project tabs"
        >
          {tabs.map((tab, index) => (
            <Tab key={tab.value} label={tab.label} />
          ))}
        </Tabs>
      </Box>

      {/* Table */}
      <AdvancedTable data={filteredData} />
    </SectionContainer>
  );
};
