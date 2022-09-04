import createTag from "./createTag";

export default function childElemSet(tagName, count, textNode) {
  let childElem = [];
  for(let i = 0; i < count; i++) {
    let temp = createTag(tagName, textNode); 
    childElem.push(temp);
  }
  return childElem.join('');
};

