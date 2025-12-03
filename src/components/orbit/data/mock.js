import { testImages, testVideos } from '../../../utils/pexels-test-data';

/**
 * 1. Metric Data (Dashboard)
 * 대시보드 상단에 표시될 핵심 지표
 */
export const metricData = [
  {
    id: 'projects_due',
    label: 'Projects Due',
    value: '12',
    trend: 'up',
    trendValue: '+2',
    trendLabel: 'vs yesterday',
    iconType: 'work', // WorkIcon
    status: 'warning', // 아이콘/트렌드 색상용
  },
  {
    id: 'active_members',
    label: 'Active Members',
    value: '24',
    trend: 'up',
    trendValue: '+5',
    trendLabel: 'new this week',
    iconType: 'people', // PeopleIcon
    status: 'success',
  },
  {
    id: 'storage_used',
    label: 'Storage Used',
    value: '82%',
    trend: 'up',
    trendValue: '+12%',
    trendLabel: 'vs last month',
    iconType: 'storage', // StorageIcon
    status: 'warning',
  },
  {
    id: 'open_issues',
    label: 'Open Issues',
    value: '5',
    trend: 'down',
    trendValue: '-2',
    trendLabel: 'vs yesterday',
    iconType: 'bug', // BugReportIcon
    status: 'success', // 줄어든 것이 좋은 것
  },
];

/**
 * 2. Asset Data (Gallery)
 * Pexels 테스트 데이터를 확장하여 사용
 */
const extendAssetData = () => {
  const assets = [];
  
  // 이미지 데이터 확장
  Object.keys(testImages).forEach(category => {
    testImages[category].forEach((img, index) => {
      assets.push({
        id: `img-${category}-${index}`,
        type: 'image',
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Shot ${index + 1}`,
        category: category,
        resolution: index % 2 === 0 ? '4K' : 'HD',
        url: img.src.medium,
        thumbnail: img.src.small,
        author: img.photographer,
        downloadCount: Math.floor(Math.random() * 1000) + 100,
        date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
        aspectRatio: img.aspectRatio,
      });
    });
  });

  // 비디오 데이터 확장
  Object.keys(testVideos).forEach(category => {
    testVideos[category].forEach((vid, index) => {
      assets.push({
        id: `vid-${category}-${index}`,
        type: 'video',
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Clip ${index + 1}`,
        category: category,
        resolution: '4K',
        duration: vid.duration,
        url: vid.src.sd, // 썸네일용/미리보기용
        thumbnail: vid.poster,
        author: vid.photographer,
        downloadCount: Math.floor(Math.random() * 5000) + 500,
        date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
        aspectRatio: vid.aspectRatio,
      });
    });
  });

  return assets.sort(() => Math.random() - 0.5); // 셔플
};

export const assetData = extendAssetData();

/**
 * 3. Project Data (Table)
 * 프로젝트 관리 테이블용 데이터
 */
const users = [
  { name: 'Sarah Kim', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Mike Chen', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Jessica Lee', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Tom Wilson', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Alex Park', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150' },
];

const statuses = ['In Progress', 'Review', 'Completed', 'Delayed', 'Planning'];
const clients = ['TechCorp', 'FashionWeek', 'EcoLife', 'FutureLabs', 'GlobalMedia'];

export const projectData = Array.from({ length: 25 }, (_, i) => {
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  let progress = 0;
  
  if (status === 'Completed') progress = 100;
  else if (status === 'Planning') progress = 0;
  else progress = Math.floor(Math.random() * 80) + 10;

  return {
    id: `proj-${i + 1}`,
    name: `${clients[i % clients.length]} ${['Campaign', 'Website', 'App', 'Rebranding', 'Video'][i % 5]} ${Math.floor(i / 5) + 1}`,
    client: clients[i % clients.length],
    status: status,
    progress: progress,
    budget: `$${(Math.floor(Math.random() * 50) + 10) * 1000}`,
    dueDate: new Date(Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    assignees: users.slice(0, Math.floor(Math.random() * 3) + 1), // 1~3명 랜덤 배정
  };
});

/**
 * 4. User/Config Data (Settings)
 * 사용자 설정 및 프로필 데이터
 */
export const userData = {
  profile: {
    name: 'Sarah Kim',
    role: 'Creative Director',
    email: 'sarah.kim@orbit.design',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Leading the creative vision at Orbit. Passionate about minimal design and efficiency.',
  },
  settings: {
    theme: 'light',
    notifications: {
      email_digest: true,
      push_notifications: false,
      project_updates: true,
      mentions: true,
    },
    privacy: {
      profile_visibility: 'team', // public, team, private
      show_activity: true,
    },
  },
};

