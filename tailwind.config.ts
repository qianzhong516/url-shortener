import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      cyan: '#2acfcf',
      red: '#f46262',
      gray: '#bfbfbf',
      'light-gray': '#eff1f7',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.15' }],
      },
      colors: {
        'dark-violet': '#3b3054',
        'darker-violet': '#232127',
        'gray-violet': '#9e9aa7',
        'dark-blue': '#35323e',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        lg: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
