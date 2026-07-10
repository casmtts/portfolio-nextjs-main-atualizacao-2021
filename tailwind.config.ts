import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        md: '425px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1440px',
        '3xl': '2560px',
      },
      minWidth: {
        320: '320px',
      },
      maxWidth: {
        content: '1440px',
      },
      spacing: {
        sidebar: '4rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        footer: '#1E2019',
        primary: '#9BFF06',
        accent: '#00FF80',
        'accent-dark': '#53DA00E6',
        'text-muted': '#363537',
      },
    },
  },
  plugins: [],
}

export default config
