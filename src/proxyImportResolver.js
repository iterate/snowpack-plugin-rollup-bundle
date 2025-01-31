// https://github.com/pikapkg/snowpack/blob/master/plugins/plugin-webpack/plugins/proxy-import-resolve.js
export function proxyImportResolver(source) {
  const regex = /import.*['"].*\.(\w+)\.proxy\.js['"]/g;
  return source.replace(regex, (fullMatch, originalExt) => {
    // no JSON plugin loaded
    if (originalExt === "json") {
      return fullMatch;
    }
    if (originalExt === "css") {
      return fullMatch;
    }

    return fullMatch.replace(".proxy.js", "");
  });
}
