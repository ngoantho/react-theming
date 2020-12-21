/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" }
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    "@prefresh/snowpack",
    "@snowpack/plugin-babel"
  ],
  devOptions: {
    open: "none"
  },
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat"
  }
};
