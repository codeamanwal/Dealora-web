module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#7C3AED",
          blue: "#2563EB",
          accent: "#22D3EE",
          dark: "#020617",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, rgba(124,58,237,1) 0%, rgba(37,99,235,1) 50%, rgba(34,211,238,1) 100%)",
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(56,189,248,0.35)",
      },
    },
  },
  plugins: [],
}
