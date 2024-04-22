
function escape(str){
   
    return str.replace(/"/g,'\\"');
}
let obj ={
  "storyname": null,
  "brief": null,
  "image20": null,
  "no": null,
  "1n": null,
  "1s": null,
  "2n": null,
  "2s": null,
  "3n": null,
  "3s": null,
  "4n": null,
  "4s": null,
  "5n": null,
  "5s": null,
  "6n": null,
  "6s": null,
  "7n": null,
  "7s": null,
  "8n": null,
  "8s": null,
  "9n": null,
  "9s": null,
  "10n": null,
  "10s": null,
  "11n": null,
  "11s": null,
  "12n": null,
  "12s": null,
  "13n": null,
  "13s": null,
  "14n": null,
  "14s": null,
  "15n": null,
  "15s": null,
  "16n": null,
  "16s": null,
  "17n": null,
  "17s": null,
  "18n": null,
  "18s": null,
  "19n": null,
  "19s": null,
  "20n": null,
  "20s": null,
  "21n": null,
  "21s": null,
  "22n": null,
  "22s": null,
  "23n": null,
  "23s": null,
  "24n": null,
  "24s": null,
  "25n": null,
  "25s": null
};
for(let i=0; i< Object.keys(obj).length;i++){
obj[Object.keys(obj)[i]] ="";
}

let container=document.querySelector(".container");
//MAKING the page content
for(let i=0; i< Object.keys(obj).length;i++){
let h2=document.createElement("h2");
h2.textContent=`${Object.keys(obj)[i]} : `;
let field= document.createElement("textarea");
field.rows=4;
field.cols=50;
field.dir="rtl";
field.id=`${Object.keys(obj)[i]}_field`;
let field_div= document.createElement("div");

field_div.appendChild(h2);
field_div.appendChild(field);
container.appendChild(field_div);

}
let submit = document.getElementById("Submit_btn");
let jsonStr ="";//the result

     
      
      // Provide a way to save the modified content
      submit.addEventListener('click', function() {
        
        //create the obj
        for(let i=0; i< Object.keys(obj).length;i++){
            let f =document.getElementById(`${Object.keys(obj)[i]}_field`);
            if(f.value!==""){
                obj[Object.keys(obj)[i]]=f.value;
            }
        }
       
      jsonStr =JSON.stringify(obj); //the obj string
      console.log(jsonStr);
      container.style.display="none";
      resultDiv.style.display="flex";
      textArae_result.value=jsonStr;

  });
   //result div
   let resultDiv=document.querySelector(".result");
  let textArae_result =document.getElementById("textToCopy");
  let copybtn=document.getElementById("copyButton");
  //when copy btn pressed
  document.addEventListener('DOMContentLoaded',function(){
    let copyButton =document.getElementById("copyButton");
    let textToCopy =document.getElementById("textToCopy");
    
    copyButton.addEventListener("click",function(){
      textToCopy.select();
      document.execCommand('copy');
      
    });
  });
  



  







