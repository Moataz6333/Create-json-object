
//obj for story
let obj ={
  "storyname": "",
  "brief": "",
  "image20": "",
  "no": ""
};
//obj for chapters
let obj2 ={"1n":null,"1s":null,"2n":null,"2s":null,"3n":null,"3s":null,"4n":null,"4s":null,"5n":null,"5s":null,"6n":null,"6s":null,"7n":null,"7s":null,"8n":null,"8s":null,"9n":null,"9s":null,"10n":null,"10s":null,"11n":null,"11s":null,"12n":null,"12s":null,"13n":null,"13s":null,"14n":null,"14s":null,"15n":null,"15s":null,"16n":null,"16s":null,"17n":null,"17s":null,"18n":null,"18s":null,"19n":null,"19s":null,"20n":null,"20s":null,"21n":null,"21s":null,"22n":null,"22s":null,"23n":null,"23s":null,"24n":null,"24s":null,"25n":null,"25s":null};
let keys = Object.keys(obj2); //keys storyname , breif ...

  for(let i=0;i<Object.keys(obj2).length;i++){
    if(obj2[Object.keys(obj2)[i]]===null){
      obj2[Object.keys(obj2)[i]]="";
    }
  }


let container=document.querySelector(".container");
//MAKING the page content for story
function make_story_content(){
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

}
//function to make chapters content
function makeContent_for_Chapter(n){
  for(let i=0;i<n;i++){
    let h2_1=document.createElement("h2");
    let h2_2=document.createElement("h2");
    h2_1.textContent=`The Header Of The Chapter ${i+1} : `;
    h2_2.textContent=`The Story Of The Chapter ${i+1} : `;
    let Header_field= document.createElement("textarea");
    Header_field.className="headers";
    let Story_field= document.createElement("textarea");
    Story_field.className="storyContent";
    Header_field.rows=4;
    Header_field.cols=50;
    Header_field.dir="rtl";
    Header_field.id="Header_field";
  
    Story_field.rows=4;
    Story_field.cols=50;
    Story_field.dir="rtl";
    Story_field.id="Story_field";
   
    let div = document.createElement("div");
  
    div.appendChild(h2_1); 
    div.appendChild(Header_field);
  
    div.appendChild(h2_2);
    div.appendChild(Story_field);
  
    container.appendChild(div);
  }

  


 

  
  
}
let n=0; //the number of stroy
let flag=1;
let no_of_chapters_he_will_add=0;

let jsonStr ="";//the result

     let submit =document.getElementById("Submit_btn");
      
      // Provide a way to save the modified content for story contnet flag =0
      submit.addEventListener('click', function() {
        if(flag===0){
          //create the obj
        for(let i=0; i< Object.keys(obj).length;i++){
            let f =document.getElementById(`${Object.keys(obj)[i]}_field`);
            if(f.value!==""){
                obj[Object.keys(obj)[i]]=f.value;
            }
        }
        jsonStr =JSON.stringify(obj); //the obj string

        }else{
          jsonStr=createChapters(n,no_of_chapters_he_will_add);


        //create the obj
        //n=1
       

        }
        
       
      submit.style.display="none";

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
  //********************************* */

  //choosing div
  let choosingDiv =document.querySelector(".choosing");
  let create_storyBtn =document.getElementById("create_story");
  let add_chapterBtn =document.getElementById("add_chapter");
  let startDiv =document.querySelector(".start");

  //create story senario
  create_storyBtn.addEventListener("click",function(){
    choosingDiv.style.display="none";
    make_story_content();
    container.style.display="flex";
    submit.style.display="block";
    flag=0;



  });
  add_chapterBtn.addEventListener("click",function(){
    choosingDiv.style.display="none";
  
    startDiv.style.display="flex";


  });
  


 //the function to create the json
 function createChapters(storyId,no_of_chapters){
 
   let headers =document.querySelectorAll(".headers");
   let storyContent=document.querySelectorAll(".storyContent");
   
  let jsonOfChapters="";
  for(let i=0;i<no_of_chapters;i++){
    obj2[`${storyId}n`]=headers[i].value;
    obj2[`${storyId}s`]=storyContent[i].value;
jsonOfChapters=jsonOfChapters+JSON.stringify(obj2)+",";
  }
  jsonOfChapters=jsonOfChapters.substring(0,jsonOfChapters.length-1);
  return jsonOfChapters;

 }

 let n_input =document.getElementById("n");
  let Okbtn=document.getElementById("ok_btn");
  let h1Text =document.getElementById("h1Text");
  // ////
    //takes the number of chapters he will add
 let nOfChapters = document.getElementById("nOfChapters");//inp
 let ok_btn2 =document.getElementById("ok_btn2");//btn2

// //////////////////
  Okbtn.addEventListener("click",function(){
     n=n_input.value;
     n_input.style.display="none"
     Okbtn.style.display="none";
     h1Text.textContent="Enter the no. of Chapters you'll add";
    
     nOfChapters.style.display="block";
     ok_btn2.style.display="block";

   
  });
  ok_btn2.addEventListener("click",function(){
    no_of_chapters_he_will_add=nOfChapters.value;

    makeContent_for_Chapter(no_of_chapters_he_will_add);
    startDiv.style.display="none";
    container.style.display="flex";
    flag=1;
    submit.style.display="block";
  });
  



  







