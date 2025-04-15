/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta de colores personalizada
        cameo: '#deb39e',
        'blue-bayoux': '#426477',
        'cocoa-brown': '#201919',
        'almond-frost': '#8d766d',
        iroko: '#483522',
        'cape-cod': '#393b3d',
        juniper: '#6a8e90',
        nepal: '#82a2b8',
        'medium-carmine': '#b54a32',
        'tower-gray': '#9ab6b4',
        
        // Colores principales (redefiniendo el azul para usar tu paleta)
        primary: '#426477', // blue-bayoux
        secondary: '#6a8e90', // juniper
        accent: '#b54a32', // medium-carmine
        neutral: '#393b3d', // cape-cod
        light: '#deb39e', // cameo
        dark: '#201919', // cocoa-brown
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}