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
## Typography System

Font and text style system used in the project.

### Structure
- Font Family: Font family configuration
- Typography Scale: Size and usage by variant
        `,
      },
    },
  },
};

/**
 * DocContent Component
 * Separated to use React hooks properly
 */
function DocContent() {
  const theme = useTheme();

  const fontFamilyData = [
    { role: 'Body', font: 'Pretendard Variable', usage: 'General text, body, caption' },
    { role: 'Headline (EN)', font: 'Outfit', usage: 'h1-h6 English titles' },
    { role: 'Headline (KR)', font: 'Pretendard Black', usage: 'h1-h6 Korean titles' },
  ];

  const typographyData = [
    { variant: 'h1', sample: 'h1. Heading', usage: 'Page main title' },
    { variant: 'h2', sample: 'h2. Heading', usage: 'Section title' },
    { variant: 'h3', sample: 'h3. Heading', usage: 'Subsection title' },
    { variant: 'h4', sample: 'h4. Heading', usage: 'Card title' },
    { variant: 'h5', sample: 'h5. Heading', usage: 'Small title' },
    { variant: 'h6', sample: 'h6. Heading', usage: 'Label title' },
    { variant: 'subtitle1', sample: 'subtitle1. Lorem ipsum dolor sit amet', usage: 'Subtitle' },
    { variant: 'subtitle2', sample: 'subtitle2. Lorem ipsum dolor sit amet', usage: 'Small subtitle' },
    { variant: 'body1', sample: 'body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', usage: 'Body text' },
    { variant: 'body2', sample: 'body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', usage: 'Secondary body' },
    { variant: 'button', sample: 'BUTTON TEXT', usage: 'Button text' },
    { variant: 'caption', sample: 'caption text', usage: 'Caption, notes' },
    { variant: 'overline', sample: 'OVERLINE TEXT', usage: 'Label, category' },
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
        note="Font and text style system"
        brandName="Design System"
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Typography System
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          Text styles and font configuration reference.
        </Typography>

        <SectionTitle title="Font Family" description="Font families used in the project" />

        <TableContainer sx={ { mb: 6 } }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '20%' } }>Role</TableCell>
                <TableCell sx={ { fontWeight: 600, width: '30%' } }>Font</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Usage</TableCell>
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

        <SectionTitle title="Typography Scale" description="Size and usage by variant" />

        <TableContainer sx={ { mb: 6 } }>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={ { fontWeight: 600, width: '12%' } }>Variant</TableCell>
                <TableCell sx={ { fontWeight: 600, width: '10%' } }>Size</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>Sample</TableCell>
                <TableCell sx={ { fontWeight: 600, width: '15%' } }>Usage</TableCell>
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

        <SectionTitle title="Font Weight" description="Text weight tokens" />

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
}

/** Documentation */
export const Doc = {
  render: () => <DocContent />,
};
