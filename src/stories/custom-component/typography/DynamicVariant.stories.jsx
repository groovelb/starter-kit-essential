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
import { DynamicVariant, DynamicVariantWord } from '../../../components/typography/dynamic-variant';

export default {
  title: 'Custom Component/Typography/DynamicVariant',
  component: DynamicVariant,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## DynamicVariant

Variable font의 axis를 동적으로 애니메이션하는 Kinetic Typography 컴포넌트.

### 용도
- Variable font의 weight/width 애니메이션
- 인터랙티브 타이포그래피 효과
- 스크롤/호버 반응형 텍스트
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: '표시할 텍스트',
    },
    animation: {
      control: 'select',
      options: ['none', 'breathe', 'wave', 'hover', 'scroll'],
      description: '애니메이션 유형',
    },
    duration: {
      control: { type: 'range', min: 500, max: 5000, step: 100 },
      description: '애니메이션 주기 (ms)',
    },
    stagger: {
      control: 'boolean',
      description: '글자별 시차 애니메이션',
    },
    baseWeight: {
      control: { type: 'range', min: 100, max: 900, step: 100 },
      description: '기본 weight',
    },
  },
};

/** 기본 사용 */
export const Default = {
  args: {
    text: 'KINETIC',
    animation: 'breathe',
    duration: 2000,
    stagger: false,
    baseWeight: 400,
  },
};

/** 문서 및 데모 */
export const Documentation = {
  render: () => (
    <>
      <DocumentTitle
        title="DynamicVariant"
        status="Available"
        note="Variable font axis 애니메이션 컴포넌트"
        brandName="Typography"
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          DynamicVariant
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          Variable font의 axis (weight, width 등)를 동적으로 애니메이션하는 Kinetic Typography 컴포넌트입니다.
          font-variation-settings를 활용하여 부드러운 전환 효과를 제공합니다.
        </Typography>

        <SectionTitle title="Props" description="DynamicVariant 컴포넌트의 Props 목록입니다." />
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
                <TableCell sx={ { fontFamily: 'monospace' } }>text</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>표시할 텍스트 (필수)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>animation</TableCell>
                <TableCell>&apos;none&apos; | &apos;breathe&apos; | &apos;wave&apos; | &apos;hover&apos; | &apos;scroll&apos;</TableCell>
                <TableCell>&apos;none&apos;</TableCell>
                <TableCell>애니메이션 유형</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>axisRange</TableCell>
                <TableCell>object</TableCell>
                <TableCell>{'{ wght: [300, 900] }'}</TableCell>
                <TableCell>Variable font axis 범위</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>duration</TableCell>
                <TableCell>number</TableCell>
                <TableCell>2000</TableCell>
                <TableCell>애니메이션 주기 (ms)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>stagger</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>글자별 시차 애니메이션</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>staggerDelay</TableCell>
                <TableCell>number</TableCell>
                <TableCell>50</TableCell>
                <TableCell>글자당 지연 (ms)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={ { fontFamily: 'monospace' } }>baseWeight</TableCell>
                <TableCell>number</TableCell>
                <TableCell>400</TableCell>
                <TableCell>기본 font-weight</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <SectionTitle title="Animation Types" description="다섯 가지 애니메이션 유형을 제공합니다." />
        <Stack spacing={ 6 }>
          <Box>
            <Typography variant="subtitle2" sx={ { mb: 2, color: 'text.secondary' } }>
              Breathe - 숨 쉬는 듯한 weight 변화
            </Typography>
            <Box sx={ { p: 4, backgroundColor: 'grey.50', textAlign: 'center' } }>
              <DynamicVariant
                text="BREATHE"
                animation="breathe"
                duration={ 2000 }
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 2, color: 'text.secondary' } }>
              Breathe with Stagger - 글자별 시차 적용
            </Typography>
            <Box sx={ { p: 4, backgroundColor: 'grey.50', textAlign: 'center' } }>
              <DynamicVariant
                text="STAGGER"
                animation="breathe"
                duration={ 2000 }
                stagger
                staggerDelay={ 100 }
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 2, color: 'text.secondary' } }>
              Wave - 파도처럼 흐르는 효과
            </Typography>
            <Box sx={ { p: 4, backgroundColor: 'grey.900', textAlign: 'center' } }>
              <DynamicVariant
                text="WAVE EFFECT"
                animation="wave"
                duration={ 1500 }
                staggerDelay={ 80 }
                sx={ { color: 'white' } }
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 2, color: 'text.secondary' } }>
              Hover - 마우스 호버 시 반응 (각 글자에 마우스를 올려보세요)
            </Typography>
            <Box sx={ { p: 4, backgroundColor: 'primary.main', textAlign: 'center' } }>
              <DynamicVariant
                text="HOVER ME"
                animation="hover"
                axisRange={ { wght: [300, 900] } }
                baseWeight={ 400 }
                sx={ { color: 'white' } }
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={ { mb: 2, color: 'text.secondary' } }>
              None - 애니메이션 없음 (정적)
            </Typography>
            <Box sx={ { p: 4, border: '1px solid', borderColor: 'divider', textAlign: 'center' } }>
              <DynamicVariant
                text="STATIC"
                animation="none"
                baseWeight={ 700 }
              />
            </Box>
          </Box>
        </Stack>

        <SectionTitle title="Scroll Animation" description="스크롤에 반응하는 weight 변화입니다. 아래로 스크롤해보세요." />
        <Box sx={ { height: 100 } } />
        <Stack spacing={ 8 }>
          <Box sx={ { p: 6, backgroundColor: 'grey.900', textAlign: 'center' } }>
            <DynamicVariant
              text="SCROLL DOWN"
              animation="scroll"
              axisRange={ { wght: [100, 900] } }
              fontSize="clamp(2rem, 8vw, 6rem)"
              sx={ { color: 'white' } }
            />
          </Box>
          <Box sx={ { p: 6, backgroundColor: 'primary.main', textAlign: 'center' } }>
            <DynamicVariant
              text="KINETIC TYPE"
              animation="scroll"
              axisRange={ { wght: [200, 800] } }
              fontSize="clamp(2rem, 8vw, 5rem)"
              sx={ { color: 'white' } }
            />
          </Box>
        </Stack>
        <Box sx={ { height: 200 } } />

        <SectionTitle title="Word-based Animation" description="DynamicVariantWord는 단어 단위로 애니메이션합니다." />
        <Stack spacing={ 4 }>
          <Box sx={ { p: 4, backgroundColor: 'grey.50', textAlign: 'center' } }>
            <DynamicVariantWord
              text="DESIGN SYSTEM TYPOGRAPHY"
              duration={ 3000 }
              wordDelay={ 300 }
            />
          </Box>
          <Box sx={ { p: 4, backgroundColor: 'grey.900', textAlign: 'center' } }>
            <DynamicVariantWord
              text="KINETIC WEB DESIGN"
              duration={ 2500 }
              wordDelay={ 200 }
              axisRange={ { wght: [200, 900] } }
              sx={ { color: 'white' } }
            />
          </Box>
        </Stack>

        <SectionTitle title="Custom Axis Range" description="axisRange로 weight 범위를 조절합니다." />
        <Stack spacing={ 4 }>
          <Box>
            <Typography variant="caption" sx={ { color: 'text.secondary' } }>
              wght: [100, 400] - 가벼운 변화
            </Typography>
            <Box sx={ { p: 4, border: '1px solid', borderColor: 'divider', textAlign: 'center' } }>
              <DynamicVariant
                text="SUBTLE"
                animation="breathe"
                axisRange={ { wght: [100, 400] } }
                duration={ 2000 }
              />
            </Box>
          </Box>
          <Box>
            <Typography variant="caption" sx={ { color: 'text.secondary' } }>
              wght: [400, 900] - 중간~굵은 변화
            </Typography>
            <Box sx={ { p: 4, border: '1px solid', borderColor: 'divider', textAlign: 'center' } }>
              <DynamicVariant
                text="MEDIUM"
                animation="breathe"
                axisRange={ { wght: [400, 900] } }
                duration={ 2000 }
              />
            </Box>
          </Box>
          <Box>
            <Typography variant="caption" sx={ { color: 'text.secondary' } }>
              wght: [100, 900] - 최대 범위
            </Typography>
            <Box sx={ { p: 4, border: '1px solid', borderColor: 'divider', textAlign: 'center' } }>
              <DynamicVariant
                text="DRAMATIC"
                animation="breathe"
                axisRange={ { wght: [100, 900] } }
                duration={ 2000 }
              />
            </Box>
          </Box>
        </Stack>

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
          {`// Breathe 애니메이션
<DynamicVariant
  text="BREATHE"
  animation="breathe"
  duration={2000}
/>

// Wave with stagger
<DynamicVariant
  text="WAVE EFFECT"
  animation="wave"
  staggerDelay={80}
/>

// Hover 반응
<DynamicVariant
  text="HOVER ME"
  animation="hover"
  baseWeight={400}
/>

// Scroll 반응
<DynamicVariant
  text="SCROLL DOWN"
  animation="scroll"
  axisRange={{ wght: [100, 900] }}
/>

// 단어 단위 애니메이션
<DynamicVariantWord
  text="KINETIC WEB DESIGN"
  duration={3000}
  wordDelay={300}
/>`}
        </Box>

        <SectionTitle title="Note: Variable Font Required" />
        <Typography variant="body2" color="text.secondary">
          이 컴포넌트는 Variable font를 사용합니다. 프로젝트에 Inter Variable, Pretendard Variable 등의
          Variable font가 로드되어 있어야 애니메이션이 부드럽게 작동합니다.
          일반 폰트에서는 weight 값이 가장 가까운 정수 값으로 반올림되어 끊기는 현상이 발생할 수 있습니다.
        </Typography>
      </PageContainer>
    </>
  ),
};
