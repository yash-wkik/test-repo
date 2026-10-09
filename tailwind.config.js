/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#202522', muted: '#858b85', paper: '#f7f7f4', leaf: '#578269',
        'leaf-dark': '#426b53', 'leaf-pale': '#eaf1eb', line: '#eceeea'
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 12px 38px rgba(35, 47, 38, .055)' }
    }
  },
  plugins: []
};
