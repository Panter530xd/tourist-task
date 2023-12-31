import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "input-box": "0px 13px 30px 0px rgba(27, 27, 27, 0.06)",
      },
      backgroundImage: {
        checkmark: "url('/photos/svg/8541612_check_tick_mark_icon 1.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
