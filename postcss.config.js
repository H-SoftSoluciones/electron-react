module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: ["last 2 versions"]
    }),
    require("postcss-pxtorem")({
      rootValue: 100,
      unitPrecision: 5,
      propList: [
        "*",
        "!border-bottom",
        "!border-top",
        "!border-left",
        "!border-right"
      ]
    })
  ]
};
