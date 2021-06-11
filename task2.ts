type a = {
  [x: string]: number;
};
const createOccurenceMap = (str: string): {} => {
  const charMap : a = str
    .split("")
    .reduce((acc: {}, char: string) => Object.assign(acc, { [char]: 0 }), {});

  for (let i = 0; i < str.length; i++) {
    const char: string = str[i];
    charMap[char] += 1;
  }
  return charMap;
};

const getOccurence = (str: string): string => {
  const map: a = createOccurenceMap(str);

  let newStr = "";
  for (let char in map) {
    newStr += `${char}${map[char]}`;
  }

  return newStr;
};
console.log(getOccurence("occurrences"));
