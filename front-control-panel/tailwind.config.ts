import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-color': '#F6F6F6',
        'background': '#FEFEFE',
        'line-color': '#818484',
        'dashboard-color': '#1C2126',
        'primary-color': '#F36246',
      }
    },
  },
  plugins: [],
}
export default config
