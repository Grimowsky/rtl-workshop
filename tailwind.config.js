/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'border-click': '#F4F4F4',
        'border-hover': '#E1E1E1',
        'primary-color': '#6C36DA',
        'primary-hover': '#854EF5',
        'primary-click': '#BEA1F7',
        'secondary-color': '#F9C80E',
        'secondary-hover': '#FFD638',
        'secondary-click': '#FFE375',
        'tertiary-color': '#CE1244',
        'tertiary-hover': '#EB1E55',
        'tertiary-click': '#EF4371',
        'gray-color': '#F3F3F3',
        'light-gray-color': '#F4F4F4',
        'dark-gray-color': '#E1E1E1',
        dark: '#202020',
        darker: '#161616',
        'grey-hover': '#E0E0E0',
      },
      textColor: {
        gray: '#D9D9D9',
        error: '#FF0000',
        'grey-hover': '#E0E0E0',
        'grey-dark': '#4A4A4A',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        10: '10px',
      },
      backgroundColor: {
        white: '#FFF',
        primary: '#6C36DA',
        grey: '#FAFAFA',
      },
      boxShadow: {
        1: '0px 20px 15px -15px rgba(0, 0, 0, 0.05)',
      },
      borderColor: {
        gray: '#F3F3F3',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
