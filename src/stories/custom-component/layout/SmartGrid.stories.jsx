import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DocumentTitle, PageContainer, SectionTitle } from '../../../components/storybookDocumentation';
import { SmartGrid, SmartGridItem } from '../../../components/layout/SmartGrid';

export default {
  title: 'Custom Component/Layout/SmartGrid',
  component: SmartGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## SmartGrid

CSS Grid의 auto-fit/auto-fill을 활용한 자동 반응형 그리드.

### 용도
- 카드 리스트, 갤러리
- 브레이크포인트 없이 자동 반응형
- 컨테이너 쿼리 스타일 레이아웃
        `,
      },
    },
  },
  argTypes: {
    minItemWidth: {
      control: 'text',
      description: '아이템 최소 너비',
    },
    mode: {
      control: 'select',
      options: ['fit', 'fill'],
      description: '그리드 모드',
    },
    gap: {
      control: { type: 'range', min: 0, max: 8 },
      description: '아이템 간 간격',
    },
  },
};

// 데모용 카드 컴포넌트
const DemoCard = ({ index, height = 120, color = 'primary.main' }) => (
  <Box
    sx={ {
      height,
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 600,
      fontSize: 16,
    } }
  >
    Item { index }
  </Box>
);

/** 기본 사용 */
export const Default = {
  args: {
    minItemWidth: '200px',
    mode: 'fit',
    gap: 2,
  },
  render: (args) => (
    <SmartGrid { ...args }>
      { Array.from({ length: 6 }, (_, i) => (
        <DemoCard key={ i } index={ i + 1 } />
      )) }
    </SmartGrid>
  ),
};

/** 문서 및 데모 */
export const Documentation = {
  render: () => (
    <>
      <DocumentTitle
        title="SmartGrid"
        status="Available"
        note="자동 반응형 그리드 레이아웃"
        brandName="Layout"
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          SmartGrid
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          CSS Grid의 auto-fit/auto-fill을 활용하여 브레이크포인트 없이
          컨테이너 크기에 따라 자동으로 열 개수가 조정되는 반응형 그리드입니다.
        </Typography>

        <SectionTitle title="Props" description="SmartGrid 컴포넌트의 Props 목록입니다." />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600 } }>Prop</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Type</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Default</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>minItemWidth</TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>&apos;280px&apos;</TableCell>
                <TableCell>아이템 최소 너비</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>maxItemWidth</TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>&apos;1fr&apos;</TableCell>
                <TableCell>아이템 최대 너비</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>mode</TableCell>
                <TableCell>&apos;fit&apos; | &apos;fill&apos;</TableCell>
                <TableCell>&apos;fit&apos;</TableCell>
                <TableCell>그리드 모드 (auto-fit/auto-fill)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>gap</TableCell>
                <TableCell>number | string</TableCell>
                <TableCell>2</TableCell>
                <TableCell>아이템 간 간격</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>maxColumns</TableCell>
                <TableCell>number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>최대 열 개수 제한</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>alignItems</TableCell>
                <TableCell>string</TableCell>
                <TableCell>&apos;stretch&apos;</TableCell>
                <TableCell>아이템 수직 정렬</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Fit vs Fill Mode" description="auto-fit과 auto-fill의 차이입니다." />
        <Stack spacing={ 4 }>
          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              mode=&quot;fit&quot; (기본) - 아이템이 남은 공간을 채움
            </Typography>
            <Box sx={ { border: '1px dashed', borderColor: 'divider', p: 2 } }>
              <SmartGrid minItemWidth="150px" mode="fit" gap={ 2 }>
                <DemoCard index={ 1 } color="#667eea" />
                <DemoCard index={ 2 } color="#764ba2" />
              </SmartGrid>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              mode=&quot;fill&quot; - 빈 공간이 남을 수 있음
            </Typography>
            <Box sx={ { border: '1px dashed', borderColor: 'divider', p: 2 } }>
              <SmartGrid minItemWidth="150px" mode="fill" gap={ 2 }>
                <DemoCard index={ 1 } color="#667eea" />
                <DemoCard index={ 2 } color="#764ba2" />
              </SmartGrid>
            </Box>
          </Box>
        </Stack>

        <SectionTitle title="Different Min Widths" description="다양한 최소 너비 설정입니다." />
        <Stack spacing={ 4 }>
          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              minItemWidth=&quot;150px&quot; - 좁은 카드
            </Typography>
            <SmartGrid minItemWidth="150px" gap={ 2 }>
              { Array.from({ length: 8 }, (_, i) => (
                <DemoCard key={ i } index={ i + 1 } height={ 80 } color="#f093fb" />
              )) }
            </SmartGrid>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={ { mb: 1, color: 'text.secondary' } }>
              minItemWidth=&quot;300px&quot; - 넓은 카드
            </Typography>
            <SmartGrid minItemWidth="300px" gap={ 2 }>
              { Array.from({ length: 4 }, (_, i) => (
                <DemoCard key={ i } index={ i + 1 } height={ 100 } color="#4facfe" />
              )) }
            </SmartGrid>
          </Box>
        </Stack>

        <SectionTitle title="With SmartGridItem" description="특정 아이템의 span을 조절할 수 있습니다." />
        <SmartGrid minItemWidth="200px" gap={ 2 }>
          <SmartGridItem colSpan={ 2 }>
            <DemoCard index="Wide" height={ 150 } color="#00c6fb" />
          </SmartGridItem>
          <DemoCard index={ 2 } height={ 150 } color="#005bea" />
          <DemoCard index={ 3 } height={ 150 } color="#005bea" />
          <DemoCard index={ 4 } height={ 150 } color="#005bea" />
          <SmartGridItem colSpan={ 2 }>
            <DemoCard index="Wide" height={ 150 } color="#00c6fb" />
          </SmartGridItem>
        </SmartGrid>

        <SectionTitle title="Card Gallery Example" description="실제 카드 갤러리 예시입니다." />
        <SmartGrid minItemWidth="250px" gap={ 3 }>
          { [
            { title: 'Mountain View', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop' },
            { title: 'Forest Path', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop' },
            { title: 'Ocean Sunset', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop' },
            { title: 'Desert Dunes', img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop' },
            { title: 'City Lights', img: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop' },
            { title: 'Northern Lights', img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop' },
          ].map((item, i) => (
            <Box
              key={ i }
              sx={ {
                borderRadius: 1,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
              } }
            >
              <Box
                sx={ {
                  height: 160,
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                } }
              />
              <Box sx={ { p: 2 } }>
                <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
                  { item.title }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Beautiful landscape photography
                </Typography>
              </Box>
            </Box>
          )) }
        </SmartGrid>

        <SectionTitle title="Usage Example" description="코드 사용 예시입니다." />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            p: 3,
            fontSize: 13,
            fontFamily: 'monospace',
            overflow: 'auto',
            lineHeight: 1.6,
          } }
        >
          { `// 기본 사용 - 최소 280px 카드
<SmartGrid minItemWidth="280px" gap={3}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</SmartGrid>

// fill 모드 - 고정 크기 유지
<SmartGrid minItemWidth="200px" mode="fill">
  {items.map(item => <Card key={item.id} {...item} />)}
</SmartGrid>

// 특정 아이템 span 지정
<SmartGrid minItemWidth="200px">
  <SmartGridItem colSpan={2}>
    <FeaturedCard />
  </SmartGridItem>
  <Card>Normal</Card>
  <Card>Normal</Card>
</SmartGrid>` }
        </Box>
      </PageContainer>
    </>
  ),
};
