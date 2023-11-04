import { createTheme, PaletteMode } from '@mui/material';

// Define your base styles for light and dark themes based on the preferred theme mode
const baseStyles = {
  body: {
    [`@media (prefers-color-scheme: light)`]: {
      backgroundColor: '#F5F5F5',
      color: '#121212',
    },
    [`@media (prefers-color-scheme: dark)`]: {
      backgroundColor: '#121212',
      color: '#F5F5F5',
    },
  },
};

// Create your Material UI base theme with the base styles
const baseTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: baseStyles,
    },
  },
});

// Define your theme options here
const themeOptions = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
    },
  };
};

// Get the preferred theme mode based on the media query
const preferredThemeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Get the theme mode from localStorage, or use the preferred theme mode if it's not set
const themeMode = localStorage.getItem('themeMode') ?? preferredThemeMode;

// Create your Material UI theme by merging the base theme with the theme options
const theme = createTheme(baseTheme, themeOptions(themeMode as PaletteMode));

// Export the theme as the default export of the module
export default theme;
