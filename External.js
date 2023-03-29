/*Definition des elements */
window.onload=function(){
    let textbutton1 = document.getElementById("textbutton1");
    let textbutton2  = document.getElementById("textbutton2");
    let textbutton3  = document.getElementById("textbutton3");
    let textbutton4 = document.getElementById("textbutton4");
    let textbutton5 = document.getElementById("textbutton5");
    let textbutton6 = document.getElementById("textbutton6");
    let textbutton7  = document.getElementById("textbutton7");
    let textbutton8 = document.getElementById("textbutton8");
    let textbutton9 = document.getElementById("textbutton9");
    let textbutton12 = document.getElementById("textbutton12");
    let textbutton14 = document.getElementById("textbutton14");
    let textbutton15 = document.getElementById("textbutton15");
    let textbutton16 = document.getElementById("textbutton16");
    let textbutton17 = document.getElementById("textbutton17");
    let textbutton18 = document.getElementById("textbutton18");
    let textbutton19 = document.getElementById("textbutton19");
    let textbutton20 = document.getElementById("textbutton20");
    let textbutton21 = document.getElementById("textbutton21");


    let textbox1 = document.getElementById("textbox1");
    let textbox2  = document.getElementById("textbox2");
    let textbox3  = document.getElementById("textbox3");
    let textbox4  = document.getElementById("textbox4");
    let textbox5 = document.getElementById("textbox5");
    let textbox6  = document.getElementById("textbox6");
    let textbox7  = document.getElementById("textbox7");
    let textbox8  = document.getElementById("textbox8");
    let textbox9  = document.getElementById("textbox9");
    let textbox10  = document.getElementById("textbox10");
    let textbox11  = document.getElementById("textbox11");
    let textbox12  = document.getElementById("textbox12");
    let textbox13  = document.getElementById("textbox13");
    let textbox14  = document.getElementById("textbox14");
    let textbox15  = document.getElementById("textbox15");
    let textbox16  = document.getElementById("textbox16");
    let textbox17  = document.getElementById("textbox17");
    let textbox18  = document.getElementById("textbox18");
    let textbox19  = document.getElementById("textbox19");
    let textbox20  = document.getElementById("textbox20");

    let nom  = document.getElementById("nom");
    let photo1 = document.getElementById("photo1");
    let photo2 = document.getElementById("photo2");
    let photo3 = document.getElementById("photo3");
    let photo4 = document.getElementById("photo4");
    

    let choix1 = document.getElementById("choix1")
    let choix2 = document.getElementById("choix2")
    let choix3 = document.getElementById("choix3")
    let choix4 = document.getElementById("choix4")
    let choix5 = document.getElementById("choix5")
    let choix6 = document.getElementById("choix6")
    let choix7 = document.getElementById("choix7")
    let choix8 = document.getElementById("choix8")
    let choix9 = document.getElementById("choix9")
    let choix10 = document.getElementById("choix10")
    let choix11 = document.getElementById("choix11")
    let choix12 = document.getElementById("choix12")
    let choix13 = document.getElementById("choix13")
    let choix14 = document.getElementById("choix14")
    let choix15 = document.getElementById("choix15")
    let choix16 = document.getElementById("choix16")
    let choix17 = document.getElementById("choix17")
    let choix18 = document.getElementById("choix18")
    let choix19 = document.getElementById("choix19")
    let choix20 = document.getElementById("choix20")
    let choix21 = document.getElementById("choix21")
    let choix22 = document.getElementById("choix22")
    let choix23 = document.getElementById("choix23")
    let choix24 = document.getElementById("choix24")
    let choix25 = document.getElementById("choix25")
    let choix26 = document.getElementById("choix26")
    let choix27 = document.getElementById("choix27")
    let choix28 = document.getElementById("choix28")
    let choix29 = document.getElementById("choix29")
    let choix30 = document.getElementById("choix30")
    let choix31 = document.getElementById("choix31")
    let choix32 = document.getElementById("choix32")
    let choix33 = document.getElementById("choix33")
    let choix34 = document.getElementById("choix34")
    let choix35 = document.getElementById("choix35")
    let choix36 = document.getElementById("choix36")
    let choix37 = document.getElementById("choix37")
    let choix38 = document.getElementById("choix38")
    let choix39 = document.getElementById("choix39")
    let choix40 = document.getElementById("choix40")


/*  Textbutton
none = disparition du block 
block = affichage du block
Chaque fonction ce fait disparaitre lui meme puis affiche les block suivants et si besoin des choix associé
Il est donc necessaire de prevoir a l'avance ou va ce diriger notre block afin de faire l'affiche des boutons/choix associées*/

    textbutton1.addEventListener("click", () => {
      if(getComputedStyle(textbox1).display != "none"){
        nom.style.display = "none";
        textbox1.style.display = "none";
        textbox2.style.display = "block";
        photo1.style.display = "none";

      } 
    })

      textbutton2.addEventListener("click", () => {
        if(getComputedStyle(textbox2).display != "none"){
            textbox2.style.display = "none";
            textbox3.style.display = "block";
            choix1.style.display = "block";
            choix2.style.display = "block";
            choix3.style.display = "block";
        } 
      })

      textbutton3.addEventListener("click", () => {
        if(getComputedStyle(textbox3).display != "none"){
            textbox3.style.display = "none";
            textbox3.style.display = "block"; 
        } 
      })

      textbutton4.addEventListener("click", () => {
        if(getComputedStyle(textbox4).display != "none"){
            textbox4.style.display = "none";
            textbox4.style.display = "block";
            
          
        } 
      })

      textbutton5.addEventListener("click", () => {
        if(getComputedStyle(textbox5).display != "none"){
          textbox5.style.display = "none";
          textbox5.style.display = "block";
        } 
      })
        textbutton6.addEventListener("click", () => {
          if(getComputedStyle(textbox6).display != "none"){
              textbox6.style.display = "none";
              textbox3.style.display = "block";
              choix1.style.display = "block";
              choix2.style.display = "block";
              choix3.style.display = "block";

          }
        })
        textbutton7.addEventListener("click", () => {
          if(getComputedStyle(textbox7).display != "none"){
              textbox7.style.display = "none";
              textbox7.style.display = "block";
              
              
          }
        })
        textbutton8.addEventListener("click", () => {
          if(getComputedStyle(textbox8).display != "none"){
            textbox8.style.display = "none";
            textbox3.style.display = "block";
            choix1.style.display = "block";
            choix2.style.display = "block";
            choix3.style.display = "block";

            
          }
        })

        textbutton10.addEventListener("click", () => {
          if(getComputedStyle(textbox10).display != "none"){
            textbox10.style.display = "none";
            textbox3.style.display = "block";
            choix1.style.display = "block";
            choix2.style.display = "block";
              
          }
        })

        textbutton12.addEventListener("click", () => {
          if(getComputedStyle(textbox12).display != "none"){
              
          }
        })

        textbutton14.addEventListener("click", () => {
          if(getComputedStyle(textbox14).display != "none"){
            textbox14.style.display = "none";
            textbox3.style.display = "block";
            choix1.style.display = "block";
            choix2.style.display = "block";
              
          }
        })

        textbutton16.addEventListener("click", () => {
          if(getComputedStyle(textbox16).display != "none"){
            textbox16.style.display = "none";
            textbox3.style.display = "block";
            choix1.style.display = "block";
            choix2.style.display = "block";
              
         
              
          }
        })

        textbutton18.addEventListener("click", () => {
          if(getComputedStyle(textbox18).display != "none"){
            textbox3.style.display = "none";
            textbox18.style.display = "block";
            choix26.style.display = "block";
            choix27.style.display = "block";

              
         
              
          }
        })
        /* Choix*/
        choix1.addEventListener("click", () => {
          if(getComputedStyle(textbox3).display != "none"){
              textbox3.style.display = "none";
              textbox4.style.display = "block";
              choix1.style.display = "none";
              choix2.style.display = "none";
              choix3.style.display = "none";
              choix4.style.display = "block";
              choix5.style.display = "block";
            }
        })
        choix2.addEventListener("click", () => {
          if(getComputedStyle(textbox3).display != "none"){
              textbox3.style.display = "none";
              textbox18.style.display = "block";
              choix1.style.display = "none";
              choix2.style.display = "none";
              choix3.style.display = "none";
              choix26.style.display = "block";
              choix27.style.display = "block";
          }
          
        })
        choix3.addEventListener("click", () => {
          if(getComputedStyle(textbox3).display != "none"){
              textbox3.style.display = "none";
              textbox20.style.display = "block";
              choix1.style.display = "none";
              choix2.style.display = "none";
              choix3.style.display = "none";
              
          }
          
        })
        
        
        
        choix4.addEventListener("click", () => {
          if(getComputedStyle(textbox4).display != "none"){
              textbox4.style.display = "none";
              textbox5.style.display = "block";
              choix4.style.display = "none";
              choix5.style.display = "none";
              choix6.style.display = "block";
              choix7.style.display = "block";
              choix8.style.display = "block";
              choix9.style.display = "block";
          
              
          }
        })
        choix5.addEventListener("click", () => {
          if(getComputedStyle(textbox4).display != "none"){
              textbox4.style.display = "none";
              textbox6.style.display = "block";
              choix4.style.display = "none";
              choix5.style.display = "none";
              photo1.style.display = "block";


          
              
          }
        })
        choix6.addEventListener("click", () => {
          if(getComputedStyle(textbox5).display != "none"){
            textbox5.style.display = "none";
            textbox7.style.display = "block";
            choix6.style.display = "none";
            choix7.style.display = "none";
            choix8.style.display = "none";
            choix9.style.display = "none";
            choix10.style.display = "block";
            choix11.style.display = "block";
            choix12.style.display = "block";
            choix13.style.display = "block";
            
              
          }
        })
        choix7.addEventListener("click", () => {
          if(getComputedStyle(textbox5).display != "none"){
            textbox5.style.display = "none";
            textbox9.style.display = "block";
            choix6.style.display = "none";
            choix7.style.display = "none";
            choix8.style.display = "none";
            choix9.style.display = "none";
            choix14.style.display = "block";
            choix15.style.display = "block";
            choix16.style.display = "block";
            choix17.style.display = "block";

           
          }
        })
        choix8.addEventListener("click", () => {
          if(getComputedStyle(textbox5).display != "none"){
            textbox5.style.display = "none";
            textbox13.style.display = "block";
            choix6.style.display = "none";
            choix7.style.display = "none";
            choix8.style.display = "none";
            choix9.style.display = "none";
            choix18.style.display = "block";
            choix19.style.display = "block";
            choix20.style.display = "block";
            choix21.style.display = "block";

           
          }
        })
        choix9.addEventListener("click", () => {
          if(getComputedStyle(textbox5).display != "none"){
            textbox5.style.display = "none";
            textbox15.style.display = "block";
            choix6.style.display = "none";
            choix7.style.display = "none";
            choix8.style.display = "none";
            choix9.style.display = "none";
            choix22.style.display = "block";
            choix23.style.display = "block";
            choix24.style.display = "block";
            choix25.style.display = "block";

           
          }
        })
        
        

        
        choix8.addEventListener("click", () => {
          if(getComputedStyle(textbox22).display != "none"){
              
          }
        })
        choix10.addEventListener("click", () => {
          if(getComputedStyle(textbox7).display != "none"){
              textbox7.style.display = "none";
              textbox8.style.display = "block";
              choix10.style.display = "none";
              choix11.style.display = "none";
              choix12.style.display = "none";
              choix13.style.display = "none";
          


          
              
          }
        })
        
        choix11.addEventListener("click", () => {
          if(getComputedStyle(textbox7).display != "none"){
              textbox7.style.display = "none";
              textbox6.style.display = "block";
              choix10.style.display = "none";
              choix11.style.display = "none";
              choix12.style.display = "none";
              choix13.style.display = "none";
          


          
              
          }
        })
        choix12.addEventListener("click", () => {
          if(getComputedStyle(textbox7).display != "none"){
              textbox7.style.display = "none";
              textbox6.style.display = "block";
              choix10.style.display = "none";
              choix11.style.display = "none";
              choix12.style.display = "none";
              choix13.style.display = "none";


          
              
          }
        })
        choix13.addEventListener("click", () => {
          if(getComputedStyle(textbox7).display != "none"){
              textbox7.style.display = "none";
              textbox6.style.display = "block";
              choix10.style.display = "none";
              choix11.style.display = "none";
              choix12.style.display = "none";
              choix13.style.display = "none";


          
              
          }
        })
        choix14.addEventListener("click", () => {
          if(getComputedStyle(textbox9).display != "none"){
              textbox9.style.display = "none";
              textbox6.style.display = "block";
              choix14.style.display = "none";
              choix15.style.display = "none";
              choix16.style.display = "none";
              choix17.style.display = "none";


          
              
          }
        })
        choix15.addEventListener("click", () => {
          if(getComputedStyle(textbox9).display != "none"){
              textbox9.style.display = "none";
              textbox10.style.display = "block";
              choix14.style.display = "none";
              choix15.style.display = "none";
              choix16.style.display = "none";
              choix17.style.display = "none";


          
              
          }
        })
        choix16.addEventListener("click", () => {
          if(getComputedStyle(textbox9).display != "none"){
              textbox9.style.display = "none";
              textbox6.style.display = "block";
              choix14.style.display = "none";
              choix15.style.display = "none";
              choix16.style.display = "none";
              choix17.style.display = "none";


          
              
          }
        })
        choix17.addEventListener("click", () => {
          if(getComputedStyle(textbox9).display != "none"){
              textbox9.style.display = "none";
              textbox6.style.display = "block";
              choix14.style.display = "none";
              choix15.style.display = "none";
              choix16.style.display = "none";
              choix17.style.display = "none";

          
              
          }
        })
        choix18.addEventListener("click", () => {
          if(getComputedStyle(textbox13).display != "none"){
              textbox13.style.display = "none";
              textbox6.style.display = "block";
              choix18.style.display = "none";
              choix19.style.display = "none";
              choix20.style.display = "none";
              choix21.style.display = "none";

          
              
          }
        })
        choix19.addEventListener("click", () => {
          if(getComputedStyle(textbox13).display != "none"){
              textbox13.style.display = "none";
              textbox6.style.display = "block";
              choix18.style.display = "none";
              choix19.style.display = "none";
              choix20.style.display = "none";
              choix21.style.display = "none";

          
              
          }
        })
        choix20.addEventListener("click", () => {
          if(getComputedStyle(textbox13).display != "none"){
              textbox13.style.display = "none";
              textbox14.style.display = "block";
              choix18.style.display = "none";
              choix19.style.display = "none";
              choix20.style.display = "none";
              choix21.style.display = "none";

          
              
          }
        })
        choix21.addEventListener("click", () => {
          if(getComputedStyle(textbox13).display != "none"){
              textbox13.style.display = "none";
              textbox6.style.display = "block";
              choix18.style.display = "none";
              choix19.style.display = "none";
              choix20.style.display = "none";
              choix21.style.display = "none";

          
              
          }
        })
        choix22.addEventListener("click", () => {
          if(getComputedStyle(textbox15).display != "none"){
              textbox15.style.display = "none";
              textbox6.style.display = "block";
              choix22.style.display = "none";
              choix23.style.display = "none";
              choix24.style.display = "none";
              choix25.style.display = "none";


          
              
          }
        })
        choix23.addEventListener("click", () => {
          if(getComputedStyle(textbox15).display != "none"){
              textbox15.style.display = "none";
              textbox6.style.display = "block";
              choix22.style.display = "none";
              choix23.style.display = "none";
              choix24.style.display = "none";
              choix25.style.display = "none";


          
              
          }
        })
        choix24.addEventListener("click", () => {
          if(getComputedStyle(textbox15).display != "none"){
              textbox15.style.display = "none";
              textbox14.style.display = "block";
              choix22.style.display = "none";
              choix23.style.display = "none";
              choix24.style.display = "none";
              choix25.style.display = "none";


          
              
          }
        })
        choix25.addEventListener("click", () => {
          if(getComputedStyle(textbox15).display != "none"){
              textbox15.style.display = "none";
              textbox16.style.display = "block";
              choix22.style.display = "none";
              choix23.style.display = "none";
              choix24.style.display = "none";
              choix25.style.display = "none";

          
              
          }
        })
        choix26.addEventListener("click", () => {
          if(getComputedStyle(textbox18).display!= "none"){
            textbox18.style.display = "none";
            textbox19.style.display ="block";
            choix26.style.display = "none";
            choix27.style.display = "none";
            choix28.style.display = "block";
            choix29.style.display = "block";

            

            
          }
        })

        choix27.addEventListener("click", () => {
          if(getComputedStyle(textbox18).display!= "none"){
            textbox18.style.display = "none";
              textbox6.style.display = "block";
              choix26.style.display = "none";
              choix27.style.display = "none";
          }
        })
        choix28.addEventListener("click", () => {
          if(getComputedStyle(textbox19).display!= "none"){
            textbox19.style.display = "none";
            textbox5.style.display = "block";
            choix28.style.display = "none";
            choix29.style.display = "none";
            choix6.style.display = "block";
            choix7.style.display = "block";
            choix8.style.display = "block";
            choix9.style.display = "block";
            
          }
        })

        choix29.addEventListener("click", () => {
          if(getComputedStyle(textbox19).display!= "none"){
            textbox19.style.display = "none";
              textbox6.style.display = "block";
              choix28.style.display = "none";
              choix29.style.display = "none";
          }
        })

        
    }