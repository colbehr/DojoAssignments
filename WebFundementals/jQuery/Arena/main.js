$(document).ready(function(){
    var backgroundName = 0;
    $("#player1").hide();
    $("#player2").hide();
    
    $("#beachbtn").hover(function(){
        $("body").css({"background": "url('img/beach.jpg') no-repeat center / cover"});
        backgorundName="beach.jpg";
    }, function(){
        $("body").css({"background": "black"})
    })
    $("#plantbtn").hover(function(){
        $("body").css({"background": "url('img/earth.jpg') no-repeat center / cover"});
        backgorundName="earth.jpg";
    }, function(){
        $("body").css({"background": "black"})
    })
    $("#dojobtn").hover(function(){
        $("body").css({"background": "url('img/dojo.jpg') no-repeat center / cover"});
        backgorundName="dojo.jpg";
    }, function(){
        $("body").css({"background": "black"})
    })
    $("#forestbtn").hover(function(){
        $("body").css({"background": "url('img/forest.jpg') no-repeat center / cover"});
        backgorundName="forest.jpg";
    }, function(){
        $("body").css({"background": "black"})
    })
    $("#matrixbtn").hover(function(){
        $("body").css({"background": "url('img/matrix.jpg') no-repeat center / cover"});
        backgorundName="matrix.jpg";
    }, function(){
        $("body").css({"background": "black"})
    })
    $("#snowbtn").hover(function(){
        $("body").css({"background": "url('img/snow.jpg') no-repeat center / cover"});
        backgorundName="snow.jpg";
    }, function(){
        $("body").css({"background": "black"})
    })

    $("button").click(function(){
        $(".menu").hide();
        var setBackground = function(){
        $("body").css({"background": "url('img/"+backgorundName+"') no-repeat center / cover"});
        };
    setTimeout (setBackground, 200);
        $(".secmenu").show();
    })

    $("#player1Sel").change(function(){
        var player1ImgName = $("#player1Sel").find(":selected").attr("value");
        $("#player1").attr("src", "img/"+player1ImgName+".png");
        $("#player1").show();

    })
     $("#player2Sel").change(function(){
        var player2ImgName = $("#player2Sel").find(":selected").attr("value");
        $("#player2").attr("src", "img/"+player2ImgName+".png");
        $("#player2").show();
    })

})