import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SearchBar } from '../../../components/input/SearchBar';
import { FileDropzone } from '../../../components/input/FileDropzone';
import { TagInput } from '../../../components/input/TagInput';
import { CollectionDropdown } from '../../../components/input/CollectionDropdown';

export default {
  title: 'Custom Component/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Input Components

MUSE 프로젝트를 위한 입력 컴포넌트 모음.

### 컴포넌트 목록
- **SearchBar**: 키워드 검색 입력 필드
- **FileDropzone**: 드래그 앤 드롭 파일 업로드 영역
- **TagInput**: 태그 입력 및 관리 필드
- **CollectionDropdown**: 무드보드 선택 드롭다운
        `,
      },
    },
  },
};

/**
 * SearchBar 기본 사용 예시
 */
export const SearchBarDefault = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
          SearchBar
        </Typography>
        <SearchBar
          value={value}
          onChange={setValue}
          placeholder="Search references..."
          onSearch={(v) => console.log('Search:', v)}
        />
      </Box>
    );
  },
};

/**
 * SearchBar 변형 비교
 */
export const SearchBarVariants = {
  render: () => {
    const [values, setValues] = useState({ outlined: '', filled: '', minimal: '' });

    const handleChange = (variant, value) => {
      setValues((prev) => ({ ...prev, [variant]: value }));
    };

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 400 }}>
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Outlined (Default)
          </Typography>
          <SearchBar
            value={values.outlined}
            onChange={(v) => handleChange('outlined', v)}
            variant="outlined"
            placeholder="Outlined variant..."
          />
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Filled
          </Typography>
          <SearchBar
            value={values.filled}
            onChange={(v) => handleChange('filled', v)}
            variant="filled"
            placeholder="Filled variant..."
          />
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            Minimal
          </Typography>
          <SearchBar
            value={values.minimal}
            onChange={(v) => handleChange('minimal', v)}
            variant="minimal"
            placeholder="Minimal variant..."
          />
        </Box>
      </Box>
    );
  },
};

/**
 * SearchBar with Filter
 */
export const SearchBarWithFilter = {
  render: () => {
    const [value, setValue] = useState('');
    const [filterActive, setFilterActive] = useState(false);

    return (
      <Box sx={{ maxWidth: 500 }}>
        <SearchBar
          value={value}
          onChange={setValue}
          placeholder="Search with filter..."
          hasFilter
          isFilterActive={filterActive}
          onFilterToggle={() => setFilterActive(!filterActive)}
          isFullWidth
        />
        {filterActive && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              border: '1px dashed',
              borderColor: 'primary.main',
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Filter panel is active
            </Typography>
          </Box>
        )}
      </Box>
    );
  },
};

/**
 * FileDropzone 기본 사용 예시
 */
export const FileDropzoneDefault = {
  render: () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleSelect = (selectedFile) => {
      setFile(selectedFile);
      if (selectedFile.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(selectedFile));
      }
    };

    const handleRemove = () => {
      setFile(null);
      if (preview) URL.revokeObjectURL(preview);
      setPreview(null);
    };

    return (
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
          FileDropzone
        </Typography>
        <FileDropzone
          onFileSelect={handleSelect}
          onFileRemove={handleRemove}
          selectedFile={file}
          previewUrl={preview}
        />
      </Box>
    );
  },
};

/**
 * FileDropzone 변형
 */
export const FileDropzoneVariants = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 400 }}>
      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
          Default
        </Typography>
        <FileDropzone onFileSelect={(f) => console.log(f)} variant="default" />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
          Compact
        </Typography>
        <FileDropzone onFileSelect={(f) => console.log(f)} variant="compact" />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
          Minimal
        </Typography>
        <FileDropzone onFileSelect={(f) => console.log(f)} variant="minimal" />
      </Box>
    </Box>
  ),
};

/**
 * FileDropzone 업로드 상태
 */
export const FileDropzoneUploading = {
  render: () => (
    <Box sx={{ maxWidth: 400 }}>
      <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
        Uploading State
      </Typography>
      <FileDropzone
        onFileSelect={() => {}}
        selectedFile={{ name: 'sample-image.jpg', size: 2500000 }}
        previewUrl="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&w=600"
        isUploading
        uploadProgress={65}
      />
    </Box>
  ),
};

/**
 * TagInput 기본 사용 예시
 */
export const TagInputDefault = {
  render: () => {
    const [tags, setTags] = useState(['minimal', 'dark']);

    return (
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
          TagInput
        </Typography>
        <TagInput
          tags={tags}
          onChange={setTags}
          placeholder="Add tags..."
          maxTags={8}
          label="Style Keywords"
        />
      </Box>
    );
  },
};

/**
 * TagInput with Suggestions
 */
export const TagInputWithSuggestions = {
  render: () => {
    const [tags, setTags] = useState([]);
    const suggestions = ['minimal', 'bold', 'colorful', 'dark', 'light', 'retro', 'modern', 'organic', 'geometric', 'playful'];

    return (
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
          TagInput with Suggestions
        </Typography>
        <TagInput
          tags={tags}
          onChange={setTags}
          placeholder="Type to see suggestions..."
          suggestions={suggestions}
          maxTags={5}
        />
      </Box>
    );
  },
};

/**
 * CollectionDropdown 기본 사용 예시
 */
export const CollectionDropdownDefault = {
  render: () => {
    const [selected, setSelected] = useState(null);

    const collections = [
      { id: '1', name: 'Tech Product Shots', count: 24 },
      { id: '2', name: 'Summer Campaign', count: 18 },
      { id: '3', name: 'Brand Identity', count: 42 },
      { id: '4', name: 'UI References', count: 31 },
    ];

    return (
      <Box sx={{ maxWidth: 300 }}>
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
          CollectionDropdown
        </Typography>
        <CollectionDropdown
          collections={collections}
          selectedId={selected}
          onSelect={setSelected}
          onCreate={(name) => console.log('Create:', name)}
        />
        {selected && (
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
            Selected: {collections.find((c) => c.id === selected)?.name}
          </Typography>
        )}
      </Box>
    );
  },
};

/**
 * CollectionDropdown 변형
 */
export const CollectionDropdownVariants = {
  render: () => {
    const collections = [
      { id: '1', name: 'Moodboard A', count: 12 },
      { id: '2', name: 'Moodboard B', count: 8 },
    ];

    return (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <CollectionDropdown
          collections={collections}
          onSelect={(id) => console.log('Selected:', id)}
          buttonLabel="Add to Board"
          variant="contained"
        />
        <CollectionDropdown
          collections={collections}
          onSelect={(id) => console.log('Selected:', id)}
          buttonLabel="Select Board"
          variant="outlined"
        />
        <CollectionDropdown
          collections={collections}
          onSelect={(id) => console.log('Selected:', id)}
          buttonLabel="Choose"
          variant="text"
          size="small"
        />
      </Box>
    );
  },
};
