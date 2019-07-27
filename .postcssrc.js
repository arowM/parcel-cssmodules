module.exports =
  {
    "modules": true,
    "plugins": {
      "postcss-modules": {
        "generateScopedName": "[name]__[local]",
        "getJSON": () => null
      }
    }
  }
