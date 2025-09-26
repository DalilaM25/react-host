/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // укажите пути к вашим файлам
  ],
  theme: {
    extend: {
      // ===== ЦВЕТА =====
      colors: {
        // Фоновые цвета
        'bg-light': 'rgb(255, 255, 255)',
        'bg-shadow':'rgba(168, 168, 168, 0.158)',
        
        // Текстовые цвета
        'text': 'rgb(0, 0, 0)',
        'text-light': 'rgb(52, 52, 52)',

        //акценты
        'accent-lime':'rgb(174, 255, 54)',
        'accent-lime-light':'rgba(175, 255, 54, 0.517)',
        'accent-lilo': 'rgb(176, 161, 252)',
        'accent-lilo-light': 'rgba(176, 161, 252, 0.581)'
      },
      
      // ===== ШРИФТЫ =====
      fontFamily: {
        'title': ['Oswald', 'sans-serif'],
        'base': ['Inter', 'monospace'],
        'button': ['Oswald-Light', 'sans-serif']
      },
      
      // ===== Прочее =====
      borderRadius: {
        'radius': '0.5rem',
      },
      boxShadow: {
        'shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'glow': '0 0 20px rgba(168, 85, 247, 0.5)', // Фиолетовое свечение
        'glow-lg': '0 0 30px rgba(168, 85, 247, 0.7)', // Усиленное свечение
      },
      gridTemplateAreas: {
        'layout': [
          'header header header',
          'nav    main   main',
          'footer footer footer',
        ],
      },
      gridTemplateColumns: {
        'layout': '24rem 1fr 2rem',
      },
      gridTemplateRows: {
        'layout': '6rem 3rem 1fr auto',
      },
      transitionProperty: {
        'all': 'all', 
      }
   
  },
  plugins: [],
}
}
