/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            backgroundImage: {
        'hero-pattern': "url('/src/assets/hero.svg')",
        "subscribe-pattern":"url('/src/assets/subscribe.svg')",
        "hero_bg":"url('/src/assets/Home/heroSection2.png')",
        "signup_image":"url('src/assets/sigupimage.svg')"
      },
    },
  },
  plugins: [],
}