import domStyling from "./style.js";
import elementStyling from "./elementStyling.js";
import createTag from "./createTag.js";
import header from "./header.js";


const root = document.getElementById("root");

/*const text = ["shop", "about","contact","account","search","bag"];

const headerTag = `
<header>
<ul>
${text.map((text) => `<li>${text}</li>`).join("")}
</ul>
<hr>
      </header>    
      root.innerHTML = headerTag,
      `;*/
function elment(tagname){
if(typeof(tagname)==="string"){
  return `<${tagname}></${tagname}>`  
}
}
root.innerHTML = `
${elment("header")}
${elment("main")}
`;

/*function addElement(tagname, props, parent = document.body, childrenNode = ""){
  if(typeof (props)=== "object" && typeof(tagname)=== "string"){
    let element = document.createElement(tagname);
    element.innerHTML = childrenNode;
    for(const cssValue in props){      
      if(cssValue === "id"){
        element.id = props[cssValue];
      } else{
        element.style[cssValue] = props[cssValue];
      }
    }
    parent.appendChild(element);
  }
}

addElement("header",{
  id : "header",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  flexDirection : "column ",
  width : "100%",
  height : "100%"
},root, "");



const headerTag = document.getElementById("header");
console.log(headerTag);

styling.size(headerTag,"100%","100px",'');
styling.displaySet(headerTag,"flex","center","center");
styling.flexdirectionSet(headerTag,"column");

const hrTag = document.getElementsByTagName("hr");
console.log(hrTag);

styling.size(hrTag,"1300px","5px","#555555");*/


header(root,"home","menu","market");






