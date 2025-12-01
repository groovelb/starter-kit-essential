import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import { DocumentTitle, PageContainer } from '../../components/storybookDocumentation';

export default {
  title: 'Style/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 타이포그래피 시스템

프로젝트에서 사용하는 폰트와 텍스트 스타일입니다.

### 폰트 패밀리
- 본문: Pretendard Variable
- 헤드라인 (영문): Outfit
- 헤드라인 (한글): Pretendard (Black)
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const theme = useTheme();

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

          <TableContainer>
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
        </PageContainer>
      </>
    );
  },
};
