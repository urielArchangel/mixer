/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    extend:{
      colors:{
        "primary-light":"var(--primary-light)",
        "primary-mid":"var(--primary-mid)",
        "primary-dark":"var(--primary-dark)"


      }
    }
  },
  plugins: [],
}
