CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    "target" : "serverless",
    webpack5: true,
    webpack: function(config, {dev, isServer}){
        if (!isServer){
            config.resolve.fallback.fs = false
        }
        if (!dev){
            config.plugins.push(
                new CopyPlugin({
                    patterns: [{from : 'posts', to: 'posts'}],
                })
            )
        }
        return config},
    async redirects() {
      return [
        {
          source: '/admin',
          destination: '/admin/index.html',
          permanent: true,
        },
      ]
    },
  }