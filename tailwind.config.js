/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      padding: ['hover'],
    }
  },
  theme: {
    extend: {
      fontFamily: {
        'jeju-gothic': ['JejuGothic', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['32px', '20px'],
      },
      fontWeight: {},
      lineHeight: {},
      borderRadius: {},
      colors: {
        "text-color": "#979797",
      },
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

