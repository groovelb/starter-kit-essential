import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import { DocumentTitle, PageContainer, SectionTitle } from '../../components/storybookDocumentation';

/** 스타일별 클래스명 매핑 */
const STYLE_CLASS_MAP = {
  outlined: 'material-symbols-outlined',
  rounded: 'material-symbols-rounded',
  sharp: 'material-symbols-sharp',
};

/**
 * MaterialSymbol 컴포넌트
 */
const MaterialSymbol = ({
  name,
  variant = 'outlined',
  size = 24,
  fill = false,
  weight = 400,
  color = 'inherit',
}) => (
  <span
    className={ STYLE_CLASS_MAP[variant] || STYLE_CLASS_MAP.outlined }
    style={ {
      fontSize: size,
      color,
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}`,
      lineHeight: 1,
      display: 'inline-block',
      verticalAlign: 'middle',
    } }
  >
    { name }
  </span>
);

export default {
  title: 'Style/Icons',
  component: MaterialSymbol,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Material Symbols

Google Material Symbols는 2,500개 이상의 아이콘을 제공하는 Variable Font 기반 아이콘 시스템입니다.

### 구조
- Style: Outlined, Rounded, Sharp
- Variable Font Axes: Fill, Weight, Grade, Optical Size

### 사용법
Controls 패널에서 아이콘 속성을 실시간으로 변경해보세요.
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: '아이콘 이름 (Material Symbols 이름)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'favorite' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'rounded', 'sharp'],
      description: '아이콘 스타일',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outlined' },
      },
    },
    size: {
      control: { type: 'range', min: 16, max: 96, step: 4 },
      description: '아이콘 크기 (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
    },
    fill: {
      control: 'boolean',
      description: '채움 여부 (Fill axis)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    weight: {
      control: { type: 'range', min: 100, max: 700, step: 100 },
      description: '굵기 (Weight axis)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 400 },
      },
    },
    color: {
      control: 'color',
      description: '아이콘 색상',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inherit' },
      },
    },
  },
};

/** 인기 아이콘 목록 */
const popularIcons = [
  'home', 'search', 'settings', 'person', 'favorite', 'star',
  'check_circle', 'delete', 'add', 'close', 'menu', 'more_vert',
  'arrow_back', 'arrow_forward', 'expand_more', 'visibility',
  'edit', 'content_copy', 'share', 'download', 'mail', 'notifications',
  'lock', 'warning', 'info', 'help', 'error', 'check',
];

/** 기본 아이콘 - Controls에서 스타일 확인 */
export const Default = {
  args: {
    name: 'favorite',
    variant: 'outlined',
    size: 48,
    fill: false,
    weight: 400,
    color: '#0000FF',
  },
};

/** 아이콘 문서 */
export const Documentation = {
  parameters: {
    layout: 'padded',
  },
  render: () => {
    const styleData = [
      { style: 'Outlined', className: 'material-symbols-outlined', description: '기본 스타일, 선으로 표현' },
      { style: 'Rounded', className: 'material-symbols-rounded', description: '둥근 모서리' },
      { style: 'Sharp', className: 'material-symbols-sharp', description: '날카로운 모서리' },
    ];

    const axisData = [
      { axis: 'Fill', range: '0-1', description: '채워진/빈 아이콘 전환' },
      { axis: 'Weight', range: '100-700', description: '획 굵기 (Thin ~ Bold)' },
      { axis: 'Grade', range: '-50~200', description: '미세한 두께 조정' },
      { axis: 'Optical Size', range: '20-48', description: '크기별 획 최적화' },
    ];

    const sizeData = [
      { size: '16-20px', usage: '인라인 텍스트, 작은 버튼, 태그' },
      { size: '24px', usage: '기본값, 버튼, 리스트 아이템, 네비게이션' },
      { size: '32-48px', usage: '카드 아이콘, 섹션 강조' },
      { size: '48px+', usage: '빈 상태, 히어로 섹션' },
    ];

    const colorData = [
      { name: 'Primary', token: 'primary.main', value: '#0000FF' },
      { name: 'Error', token: 'error.main', value: '#d32f2f' },
      { name: 'Warning', token: 'warning.main', value: '#ed6c02' },
      { name: 'Success', token: 'success.main', value: '#2e7d32' },
      { name: 'Info', token: 'info.main', value: '#0288d1' },
    ];

    return (
      <>
        <DocumentTitle
          title="Icons"
          status="Available"
          note="Material Symbols 아이콘 시스템"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Material Symbols
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            Google Material Symbols Variable Font 기반 아이콘 시스템입니다.
          </Typography>

          <SectionTitle title="Style" description="3가지 스타일 변형" />

          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Style</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '30%' } }>Class Name</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '25%' } }>설명</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Sample</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { styleData.map((row) => (
                  <TableRow key={ row.style }>
                    <TableCell sx={ { fontWeight: 600 } }>{ row.style }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>{ row.className }</TableCell>
                    <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.description }</TableCell>
                    <TableCell>
                      <Box sx={ { display: 'flex', gap: 2 } }>
                        <MaterialSymbol name="home" variant={ row.style.toLowerCase() } size={ 24 } />
                        <MaterialSymbol name="favorite" variant={ row.style.toLowerCase() } size={ 24 } />
                        <MaterialSymbol name="settings" variant={ row.style.toLowerCase() } size={ 24 } />
                      </Box>
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Variable Font Axes" description="Variable Font 속성" />

          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Axis</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Range</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '30%' } }>설명</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Sample</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Fill</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>0-1</TableCell>
                  <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>채워진/빈 아이콘 전환</TableCell>
                  <TableCell>
                    <Box sx={ { display: 'flex', gap: 2, alignItems: 'center' } }>
                      <MaterialSymbol name="favorite" size={ 24 } fill={ false } />
                      <Typography variant="caption" color="text.secondary">→</Typography>
                      <MaterialSymbol name="favorite" size={ 24 } fill={ true } />
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Weight</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>100-700</TableCell>
                  <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>획 굵기 (Thin ~ Bold)</TableCell>
                  <TableCell>
                    <Box sx={ { display: 'flex', gap: 2, alignItems: 'center' } }>
                      <MaterialSymbol name="settings" size={ 24 } weight={ 100 } />
                      <MaterialSymbol name="settings" size={ 24 } weight={ 400 } />
                      <MaterialSymbol name="settings" size={ 24 } weight={ 700 } />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Size Guide" description="크기별 권장 용도" />

          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Size</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '40%' } }>권장 용도</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Sample</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { sizeData.map((row) => (
                  <TableRow key={ row.size }>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.size }</TableCell>
                    <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.usage }</TableCell>
                    <TableCell>
                      <MaterialSymbol
                        name="favorite"
                        size={ parseInt(row.size) || 24 }
                        fill={ true }
                        color="#e91e63"
                      />
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Color" description="테마 색상 적용" />

          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Name</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '20%' } }>Token</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Value</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Sample</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { colorData.map((row) => (
                  <TableRow key={ row.name }>
                    <TableCell sx={ { fontWeight: 600 } }>{ row.name }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>{ row.token }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>{ row.value }</TableCell>
                    <TableCell>
                      <Box sx={ { display: 'flex', gap: 2 } }>
                        <MaterialSymbol name="favorite" size={ 24 } fill={ true } color={ row.value } />
                        <MaterialSymbol name="check_circle" size={ 24 } fill={ true } color={ row.value } />
                        <MaterialSymbol name="info" size={ 24 } fill={ true } color={ row.value } />
                      </Box>
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Usage" description="코드 사용법" />

          <Box
            component="pre"
            sx={ {
              backgroundColor: 'grey.100',
              p: 3,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
              mb: 4,
            } }
          >
{ `// 기본 사용
<span className="material-symbols-outlined">home</span>

// Variable Font 속성 적용
<span
  className="material-symbols-rounded"
  style={{
    fontSize: 24,
    fontVariationSettings: "'FILL' 1, 'wght' 400"
  }}
>
  favorite
</span>

// sx prop으로 색상 적용
<Box sx={{ color: 'primary.main' }}>
  <span className="material-symbols-outlined">star</span>
</Box>` }
          </Box>

          <SectionTitle title="Popular Icons" description="자주 사용되는 아이콘" />

          <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1 } }>
            { popularIcons.map((icon) => (
              <Box
                key={ icon }
                sx={ {
                  width: 80,
                  py: 2,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                } }
              >
                <MaterialSymbol name={ icon } size={ 24 } />
                <Typography
                  variant="caption"
                  display="block"
                  sx={ {
                    mt: 0.5,
                    fontSize: 10,
                    fontFamily: 'monospace',
                    color: 'text.secondary',
                  } }
                >
                  { icon }
                </Typography>
              </Box>
            )) }
          </Box>

          <Divider sx={ { my: 4 } } />

          <Typography variant="body2" color="text.secondary">
            전체 아이콘 목록은{' '}
            <a
              href="https://fonts.google.com/icons"
              target="_blank"
              rel="noopener noreferrer"
              style={ { color: '#0000FF' } }
            >
              Google Fonts Icons
            </a>
            에서 확인하세요.
          </Typography>
        </PageContainer>
      </>
    );
  },
};

/** Fill 활용 예시 */
export const FillUsage = {
  render: () => {
    const fillExamples = [
      { icon: 'favorite', label: '좋아요', activeColor: '#e91e63' },
      { icon: 'bookmark', label: '북마크', activeColor: '#1976d2' },
      { icon: 'star', label: '즐겨찾기', activeColor: '#ffc107' },
      { icon: 'thumb_up', label: '추천', activeColor: '#0000FF' },
      { icon: 'check_circle', label: '완료', activeColor: '#2e7d32' },
      { icon: 'visibility', label: '공개', activeColor: '#263238' },
    ];

    return (
      <>
        <DocumentTitle
          title="Icon Fill Usage"
          status="Available"
          note="Fill 속성 활용 패턴"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Fill 활용
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            Fill 속성으로 토글 상태를 표현합니다.
          </Typography>

          <SectionTitle title="Toggle Pattern" description="선택/미선택 상태 표현" />

          <TableContainer sx={ { mb: 4 } }>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '20%' } }>Icon</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '20%' } }>용도</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '30%' } }>Off (Fill: 0)</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>On (Fill: 1)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { fillExamples.map((item) => (
                  <TableRow key={ item.icon }>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ item.icon }</TableCell>
                    <TableCell>{ item.label }</TableCell>
                    <TableCell>
                      <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                        <MaterialSymbol name={ item.icon } size={ 28 } fill={ false } />
                        <Typography variant="caption" color="text.secondary">미선택</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                        <MaterialSymbol name={ item.icon } size={ 28 } fill={ true } color={ item.activeColor } />
                        <Typography variant="caption" color="text.secondary">선택됨</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Code Example" />

          <Box
            component="pre"
            sx={ {
              backgroundColor: 'grey.100',
              p: 3,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
            } }
          >
{ `// React 상태로 토글
const [isLiked, setIsLiked] = useState(false);

<span
  className="material-symbols-outlined"
  style={{
    fontVariationSettings: \`'FILL' \${isLiked ? 1 : 0}\`,
    color: isLiked ? '#e91e63' : 'inherit',
    cursor: 'pointer'
  }}
  onClick={() => setIsLiked(!isLiked)}
>
  favorite
</span>` }
          </Box>
        </PageContainer>
      </>
    );
  },
};
