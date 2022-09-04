import createTag from "./createTag.js";

export default function header(parent,...listName){
  const header = document.createElement("header");    
    header.style.width="100%";
    header.style.height="100px";
    header.style.display="flex";
    header.style.justifyContent="center";
    header.style.alignContent="center";
    header.style.flexDirection = "column"
  const ul = document.createElement("ul");
    ul.style.width = "50%";
    ul.style.height = "100%";
    ul.style.display="flex";
    ul.style.justifyContent = "spaceAround"
    ul.style.alignItems="center";
    ul.style.flexDirection = "row";
    header.appendChild(ul);

  const hr = document.createElement("hr");
    hr.style.width = "1300px";
    hr.style.height = "5px";
    hr.style.backgroundColor = "#555555";
    hr.style.marginLeft = "50px";

    header.appendChild(hr);
  
  ul.innerHTML=`${liTag("li",...listName)}`;

  parent.appendChild(header);
}

function liTag(tagName,...listName){ //인자를 배열로 받아옴
  const list = [...listName]; //받아온 배열 list에 저장
  const element = [];
  for(let i=0;i<list.length;i++){
    element.push(`<${tagName}>${list[i]}</${tagName}>`); 
  }
  return element.join("");
}