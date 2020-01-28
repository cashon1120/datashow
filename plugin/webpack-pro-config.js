class WebpackProConfig {
  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      compilation.chunks.forEach(chunk => {
        chunk.files.forEach(filename => {
          let source = compilation.assets[filename].source()
          source = source.replace(/api/g, '')
          compilation.assets[filename]={
            source: () => source,
            size: () => source.lengtht
          }
        })
      })
      callback()
    })
  };
}

module.exports = WebpackProConfig