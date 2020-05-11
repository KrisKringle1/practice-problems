

function getPath(path) {
  const newArray = [];
  let newString = ""
  for (let i = 0; i < path.length + 1; i++) {
    if (path[i] === '/' || path[i] === path[path.length]) {
      newArray.push(newString);
      newString = ""
    } else {
      newString += path[i];
    }
  }
  return newArray;

}

function getPathParts(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  console.log('url: ', url)
  console.log('parsedURL: ', parsedURL)
  if (!parsedURL) {
    return false;
  }
  const [, protocol, host, port, path, file] = parsedURL;

  return { protocol, host, port, path, file }

}

function getCapitalCount() {

}

function correctCalcChecker() {

}

function doMath() {

}
