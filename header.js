import createTag from "./createTag";

export default function header(parent,...listName){
  const header = document.createElement("header");
    header.style.backgroundColor="lightyellow";
    header.style.width="inherit";
    header.style.height="5vh";
    header.style.display="flex";
    header.style.justifyContent="center";
    header.style.alignContent="center";
  const ul = document.createElement("ul");
    ul.style.display="flex";
    ul.style.gap ="5vw";
    ul.style.alignItems="center";
    header.appendChild(ul);
  
  ul.innerHTML=`${createTag("li",...listName)}`;

  parent.appendChild(header);
}

