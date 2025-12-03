import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

/**
 * SearchBar
 * 검색 입력 컴포넌트
 */
export const SearchBar = ({ placeholder = "Search...", sx, ...props }) => {
  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      size="small"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        sx: {
          borderRadius: 2,
          backgroundColor: 'background.paper',
          '& fieldset': { borderColor: 'divider' },
        }
      }}
      sx={{
        maxWidth: 400,
        ...sx
      }}
      {...props}
    />
  );
};

