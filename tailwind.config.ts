import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0b0b0c',
          pink: '#ff4d9a',
          pinkSoft: '#ffb3d0',
          border: 'rgba(255,255,255,0.08)'
        }
      }
    }
  },
  plugins: []
}
export default config
