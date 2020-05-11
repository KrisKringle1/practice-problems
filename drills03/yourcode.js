

function getPath(path) {
  const newArray = [];
  console.log(path.length)
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

function getPathParts() {

}

function getCapitalCount() {

}

function correctCalcChecker() {

}

function doMath() {

}
