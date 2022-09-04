const styleSet = {
  size: (element,widthValue,heightValue)=>{
    element.style.width=widthValue;
    element.style.height=heightValue;
  }
}

export const domStyling = {
  body : {
    width:"100vw",
    height:"100vh"   
  },  
  header : {
    width:"100%",
    height: "100px"   
  },
  hr : {
    width:"1300px",
    height: "5px",
    marginLeft: "50px"
    
  },
  ul : {
    width:"50%",
    height:"100%",   
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection: "row"    
  }  
}

export default domStyling;