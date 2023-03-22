/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage:{
        'hero-image':'url("https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        'contact-image':'url("https://images.pexels.com/photos/539694/pexels-photo-539694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'login-image':'url("../public/login-2.jpg")',
      }
    },
  },
  plugins: [],
}