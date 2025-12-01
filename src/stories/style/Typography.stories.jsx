import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import { DocumentTitle, PageContainer, SectionTitle } from '../../components/storybookDocumentation';

export default {
  title: 'Style/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 타이포그래피 시스템

프로젝트에서 사용하는 폰트와 텍스트 스타일입니다.

### 구조
- Font Family: 폰트 패밀리 설정
- Typography Scale: variant별 크기와 용도
        `,
      },
    },
  },
};

/** 타이포그래피 문서 */
export const Default = {
  render: () => {
    const theme = useTheme();

    const fontFamilyData = [
      { role: '본문', font: 'Pretendard Variable', usage: '일반 텍스트, body, caption' },
      { role: '헤드라인 (영문)', font: 'Outfit', usage: 'h1-h6 영문 타이틀' },
      { role: '헤드라인 (한글)', font: 'Pretendard Black', usage: 'h1-h6 한글 타이틀' },
    ];

    const typographyData = [
      { variant: 'h1', sample: 'h1. Heading', usage: '페이지 메인 타이틀' },
      { variant: 'h2', sample: 'h2. Heading', usage: '섹션 타이틀' },
      { variant: 'h3', sample: 'h3. Heading', usage: '서브섹션 타이틀' },
      { variant: 'h4', sample: 'h4. Heading', usage: '카드 타이틀' },
      { variant: 'h5', sample: 'h5. Heading', usage: '작은 타이틀' },
      { variant: 'h6', sample: 'h6. Heading', usage: '레이블 타이틀' },
      { variant: 'subtitle1', sample: 'subtitle1. Lorem ipsum dolor sit amet', usage: '부제목' },
      { variant: 'subtitle2', sample: 'subtitle2. Lorem ipsum dolor sit amet', usage: '작은 부제목' },
      { variant: 'body1', sample: 'body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', usage: '본문 텍스트' },
      { variant: 'body2', sample: 'body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', usage: '보조 본문' },
      { variant: 'button', sample: 'BUTTON TEXT', usage: '버튼 텍스트' },
      { variant: 'caption', sample: 'caption text', usage: '캡션, 주석' },
      { variant: 'overline', sample: 'OVERLINE TEXT', usage: '레이블, 카테고리' },
    ];

    const fontWeightData = [
      { weight: 300, name: 'Light', token: 'fontWeightLight' },
      { weight: 400, name: 'Regular', token: 'fontWeightRegular' },
      { weight: 500, name: 'Medium', token: 'fontWeightMedium' },
      { weight: 700, name: 'Bold', token: 'fontWeightBold' },
    ];

    return (
      <>
        <DocumentTitle
          title="Typography"
          status="Available"
          note="폰트와 텍스트 스타일 시스템"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            타이포그래피 시스템
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            텍스트 스타일과 폰트 설정을 확인합니다.
          </Typography>

          <SectionTitle title="Font Family" description="프로젝트에서 사용하는 폰트 패밀리" />

          <TableContainer sx={ { mb: 6 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '20%' } }>역할</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '30%' } }>Font</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>적용 대상</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { fontFamilyData.map((row) => (
                  <TableRow key={ row.role }>
                    <TableCell sx={ { fontWeight: 600 } }>{ row.role }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.font }</TableCell>
                    <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.usage }</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Typography Scale" description="variant별 크기와 용도" />

          <TableContainer sx={ { mb: 6 } }>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '12%' } }>Variant</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '10%' } }>Size</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Sample</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>용도</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { typographyData.map((row) => (
                  <TableRow key={ row.variant }>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>
                      { row.variant }
                    </TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>
                      { theme.typography[row.variant]?.fontSize || '-' }
                    </TableCell>
                    <TableCell>
                      <Typography variant={ row.variant }>
                        { row.sample }
                      </Typography>
                    </TableCell>
                    <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>
                      { row.usage }
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="Font Weight" description="텍스트 굵기 토큰" />

          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '15%' } }>Weight</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '20%' } }>Name</TableCell>
                  <TableCell sx={ { fontWeight: 600, width: '25%' } }>Token</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Sample</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { fontWeightData.map((row) => (
                  <TableRow key={ row.weight }>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.weight }</TableCell>
                    <TableCell>{ row.name }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.token }</TableCell>
                    <TableCell>
                      <Box component="span" sx={ { fontWeight: row.weight } }>
                        The quick brown fox jumps
                      </Box>
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>
        </PageContainer>
      </>
    );
  },
};
