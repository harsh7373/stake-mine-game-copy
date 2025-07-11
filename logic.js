let array=["bomb","diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond","bomb"]

let points_store=0
let point=document.getElementById("points")
let blocks=document.querySelectorAll(".blocks")
let DPH_diamond=document.querySelectorAll(".DPH_diamond_img")

blocks.forEach(function applying_event_lisener_on_all_blocks_with_for_each(all_blocks){
 all_blocks.addEventListener("click",function open_block(){
    all_blocks.removeEventListener("click",open_block)

    let random_number=Math.floor(Math.random()*16)
    let result=array[random_number]

    if(result=="diamond"){
        let diamond_image=all_blocks.querySelector(".diamond_img")
        diamond_image.style.display="block"
        points_store++
        point.innerHTML=points_store
        if(points_store==1){
           DPH_diamond[0].style.display="block"
        }

        if(points_store==2){
            DPH_diamond[1].style.display="block"
         }

         if(points_store==3){
            DPH_diamond[2].style.display="block"
         }

         if(points_store==4){
            DPH_diamond[3].style.display="block"
         }

         if(points_store==5){
            DPH_diamond[4].style.display="block"
         }
         if(points_store==16){
            let bomb_image=all_blocks.querySelector(".bomb_img")
        bomb_image.style.display="block"
        let clicked_diamond=all_blocks.querySelector(".diamond_img")
        clicked_diamond.style.display="none"
        points_store--
         }

    }
    else{
        let bomb_image=all_blocks.querySelector(".bomb_img")
        bomb_image.style.display="block"

        let diamond_images=document.querySelectorAll(".diamond_img")

        diamond_images.forEach(function opening_all_diamonds(a){
        a.style.display="block"
        })

        let clicked_diamond=all_blocks.querySelector(".diamond_img")
        clicked_diamond.style.display="none"

        blocks.forEach(function disableAllEventListener(blocks_divs){
                blocks_divs.style.pointerEvents="none"
        })    
    }
 })
})


