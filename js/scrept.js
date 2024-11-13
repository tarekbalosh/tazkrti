window.onscroll = ()=>
{
   if(this.scrollY > 200 )
   {
      $(".imagesindex .col-sm-3").fadeIn(1000);
    }
    else 
   {
    $(".imagesindex .col-sm-3").fadeOut();
   }
   if(this.scrollY > 1100)
   {
      $(".imagesindex2 .col-sm-3").fadeIn(1000);
    
    }
    else 
   {
    $(".imagesindex2 .col-sm-3").fadeOut();
   }
   if(this.scrollY > 1100)
   {
      $(".subs").css({
          "animation" : "moveleft 1s ease-in-out"
      })
      $(".indexinput").css({
          "animation" : "moveright 1s ease-in-out"
      })
    }
  
  
  
}

$(".see").click(function(){
    $(this).fadeOut();
    $(".showmore").fadeIn();
})



$(".ul1 li .fa-search").click(function(){
    $(".ul1 li .ser").toggle(100);
})

$(".mu").click(function(){
    $(".ph").fadeIn();
    $(this).addClass('active');
    $(".mov , .thera , .fam").removeClass('active');
})
$(".mov").click(function(){
    $(".col1 ,.col2,.col3 ,.col4").fadeOut();
    $(".col5 ,.col8,.col6, .col7").fadeIn();
    $(this).addClass('active');
    $(".mu , .thera , .fam").removeClass('active');
})
$(".thera").click(function(){
    $(".col4,.col5,.col6 ,.col7").fadeOut();
    $(".col1,.col2,.col3 , .col8").fadeIn();
    $(this).addClass('active');
    $(".mov , .mu , .fam").removeClass('active');
})
$(".fam").click(function(){
    $(".col1,.col2 , .col3 , .col7").fadeOut();
    $(".col6,.col8 , .col4 ,.col5").fadeIn();
    $(this).addClass('active');
    $(".mov , .thera , .mu").removeClass('active');
});

/*------------2-event----------*/

   $(".eventplus").click(function(){
      alert("hi");
  let typetiket = $(".type-tiket").val();
    
    // Get the current total from the text and remove the "$" sign, then parse it as a float
    let currentTotal = parseFloat($(".total-tiket").text().replace('$', ''));

    // Determine the ticket price based on the selected option
    let ticketPrice = 0;
    if (typetiket === "29") {
        ticketPrice = 29;
    } else if (typetiket === "24") {
        ticketPrice = 24;
    } else {
        ticketPrice = 20;
    }

    // Update the total by adding the selected ticket price
    let newTotal = currentTotal + ticketPrice;

    // Update the total displayed on the page
    $(".total-tiket").text(`$${newTotal.toFixed(2)}`);
})

/*----sign up ----------------*/
$(".pas1").click(function(){
    $(".fa1").fadeIn(1000)
})
$(".pas2").click(function(){
    $(".fa2").fadeIn(1000)
})


$(".hid").click(function(){
    $(".formup").fadeOut(1000);
})



$(".check").click(function(){
    if( $(".pas1").val() != $(".pas2").val())
    {
        alert("error in password")
    }
})
var u = 0;
$(".contactform .fa1").click(function(){
    if(u==0)
    {
        $(".contactform .pas1").attr({
            "type" : "text"
        })
        $(".fa1").css("opacity" , "0.9")
        u=1;
    }
    else if(u==1)
    {
        $(".contactform .pas1").attr({
            "type" : "password"
        })
        $(".fa1").css("opacity" , "0.3")
        u=0;
    }
});
var m = 0;
$(".contactform .fa2").click(function(){
    if(m==0)
    {
        $(".contactform .pas2").attr({
            "type" : "text"
        })
        $(".fa2").css("opacity" , "0.9")
        m=1;
    }
    else if(m==1)
    {
        $(".contactform .pas2").attr({
            "type" : "password"
        })
        $(".fa2").css("opacity" , "0.3")
        m=0;
    }
})
/*------faqs-----------------*/
$(".d1").click(function(){
    $(this).fadeOut();
    $(".up1").fadeIn();
     $(".down1").fadeIn();
    $(".down1").slidDown(3000);
})
$(".up1").click(function(){
    $(this).fadeOut();
    $(".d1").fadeIn();
     $(".down1").fadeOut();
    $(".down1").slidUp(3000);
})
/*-----------------*/
$(".d2").click(function(){
    $(this).fadeOut();
    $(".up2").fadeIn();
     $(".down2").fadeIn();
    $(".down2").slidDown(3000);
})
$(".up2").click(function(){
    $(this).fadeOut();
    $(".d2").fadeIn();
     $(".down2").fadeOut();
    $(".down2").slidUp(3000);
})

$(".d3").click(function(){
    $(this).fadeOut();
    $(".up3").fadeIn();
     $(".down3").fadeIn();
    $(".down3").slidDown(3000);
})
$(".up3").click(function(){
    $(this).fadeOut();
    $(".d3").fadeIn();
     $(".down3").fadeOut();
    $(".down3").slidUp(3000);
})

$(".d4").click(function(){
    $(this).fadeOut();
    $(".up4").fadeIn();
     $(".down4").fadeIn();
    $(".down4").slidDown(3000);
})
$(".up4").click(function(){
    $(this).fadeOut();
    $(".d4").fadeIn();
     $(".down4").fadeOut();
    $(".down4").slidUp(3000);
})

$(".d5").click(function(){
    $(this).fadeOut();
    $(".up5").fadeIn();
     $(".down5").fadeIn();
    $(".down5").slidDown(3000);
})
$(".up5").click(function(){
    $(this).fadeOut();
    $(".d5").fadeIn();
     $(".down5").fadeOut();
    $(".down5").slidUp(3000);
})

$(".d6").click(function(){
    $(this).fadeOut();
    $(".up6").fadeIn();
     $(".down6").fadeIn();
    $(".down6").slidDown(3000);
})
$(".up6").click(function(){
    $(this).fadeOut();
    $(".d6").fadeIn();
     $(".down6").fadeOut();
    $(".down6").slidUp(3000);
})

$(".d7").click(function(){
    $(this).fadeOut();
    $(".up7").fadeIn();
     $(".down7").fadeIn();
    $(".down7").slidDown(3000);
})
$(".up7").click(function(){
    $(this).fadeOut();
    $(".d7").fadeIn();
     $(".down7").fadeOut();
    $(".down7").slidUp(3000);
})
$(".d8").click(function(){
    $(this).fadeOut();
    $(".up8").fadeIn();
     $(".down8").fadeIn();
    $(".down8").slidDown(3000);
})
$(".up8").click(function(){
    $(this).fadeOut();
    $(".d8").fadeIn();
     $(".down8").fadeOut();
    $(".down8").slidUp(3000);
})
$(".d9").click(function(){
    $(this).fadeOut();
    $(".up9").fadeIn();
     $(".down9").fadeIn();
    $(".down9").slidDown(3000);
})
$(".up9").click(function(){
    $(this).fadeOut();
    $(".d9").fadeIn();
     $(".down9").fadeOut();
    $(".down9").slidUp(3000);
})

$(".d10").click(function(){
    $(this).fadeOut();
    $(".up10").fadeIn();
     $(".down10").fadeIn();
    $(".down10").slidDown(3000);
})
$(".up10").click(function(){
    $(this).fadeOut();
    $(".d10").fadeIn();
     $(".down10").fadeOut();
    $(".down10").slidUp(3000);
})

$(".d11").click(function(){
    $(this).fadeOut();
    $(".up11").fadeIn();
     $(".down11").fadeIn();
    $(".down11").slidDown(3000);
})
$(".up11").click(function(){
    $(this).fadeOut();
    $(".d11").fadeIn();
     $(".down11").fadeOut();
    $(".down11").slidUp(3000);
})
/*-cart---*/
$(".cancel").click(function(){
    $(".cartborder").fadeOut(300);
    $(".shadow").css("opacity" , "0.9");
    $(".cartborder").animate({
        position : "absolute",
         top : "500px",
          
        },1000)
})
$(".checkoutcart").click(function(){

    $(".cartborder").css("display" , "block");

    $(".shadow").css("opacity" , "0.2");
    
    $(".cartborder").animate({
    position : "absolute",
     top : "100px",
      
    },1000)
})
/*---------evnts-----------*/
$(".one").click(function(){
    $(this).addClass('active');
    $(".tow , .three , .four , .five").removeClass('active');
    $(".my1").fadeIn();
    $(".my2 , .my3 , .my4 , .my5").fadeOut();

  
})
$(".tow").click(function(){
    $(this).addClass('active');
    $(".one , .three , .four , .five").removeClass('active');

    $(".my2").fadeIn();
    $(".my1 , .my3 , .my4 , .my5").fadeOut();
   
})
$(".three").click(function(){
    $(this).addClass('active');
    $(".tow , .one , .four , .five").removeClass('active');
    $(".my3").fadeIn();
    $(".my1 , .my2 , .my4 , .my5").fadeOut();
   
})
$(".four").click(function(){
    $(this).addClass('active');
    $(".tow , .three , .one , .five").removeClass('active');

    $(".my4").fadeIn();
    $(".my1 , .my2 , .my3 , .my5").fadeOut();
   
})
$(".five").click(function(){
    $(this).addClass('active');
    $(".tow , .three , .four , .one").removeClass('active');

    $(".my5").fadeIn();
    $(".my1 , .my2 , .my3 , .my4").fadeOut();
   
})

$(".rad1").click(function(){
    $(".list3 .up").css("border" , "1px solid gold");
    $(".list3 .vesa").css("border" , "1px solid gray")
})
$(".rad2").click(function(){
    $(".list3 .vesa").css("border" , "1px solid gold");
    $(".list3 .up").css("border" , "1px solid gray");
}),
/*-------BUY -------------------------------------------*/
$(".ul1 .by").click(function(){
    $(".buy1").fadeIn();
    $(this).addClass('activeli');
    $(".sell2 , .sell3").fadeOut();
    $(".sell").removeClass('activeli');
  
   
})
$(".ul1 .sell").click(function(){
    $(".buy1").fadeOut();
    $(".by").removeClass('activeli');
    $(".sell2").fadeIn();
    $(this).addClass('activeli');
    $(".pageby  .bg").css({
        "height" : "350px"
    });
    $(".pageby  .bg").css({
        "animation" : "movetop 1s ease-in-out"
    })

})

$(".col-xs-12 .continue").click(function(){
  
    $(".sell3").fadeIn();
    $(".sell2").fadeOut();
    $(".pageby  .bg").css({
        "height" : "410px"
    })
})
