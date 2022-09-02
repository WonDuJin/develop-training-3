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
${elment("div")}
${elment("div")}
${elment("div")}  
`;

const headerTag = document.getElementsByTagName("header");
console.log(headerTag);
const ulTag = [];

function ull(tagName){
  ulTag.push(`<${tagName}></${tagName}>`);

}

ull("ul");

headerTag.innerHTML = ulTag;