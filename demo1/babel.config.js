const presets = [
  ["@babel/preset-env",
    {
      targets: {
        browsers: ["> 1%", "last 2 versions"]
      },
      useBuiltIns: "usage"
    }
  ]
];

module.exports = { presets };
