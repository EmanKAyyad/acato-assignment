$(document).ready(function($){


    $.getJSON("employees.json",function(data){
        var employees = data["employees"];
        for(var i=0;i<employees.length;i++){
            var singleEmployee = $("<div class='single-emp'></div>");
            var name = $("<h1>" +employees[i].name+ "</h1>");
            var job = $("<h3>" + employees[i].job + "</h3>");
            var email = $("<h6>"+ employees[i].email +"</h6>");
            var image = $("<img class='emp-img' src='assets/img/" + employees[i]["image-name"] + ".jpg' alt='"+ employees[i].name +"image in acato!' />");
            singleEmployee.append(name);
            singleEmployee.append(job);
            singleEmployee.append(email);
            singleEmployee.append(image);
            
            singleEmployee.appendTo($(".employees-carousel"));
        }
        
        $(".employees-carousel").slick({
            centerMode: true,
            slidesToShow : 7,
            slidesToScroll: 3,
            autoplay: true,
            speed: 300,
              responsive: [
                {
                  breakpoint: 1420,
                  settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },{
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },{
                  breakpoint: 1060,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },{
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            
        });
        
        
        $(".single-emp").on("mouseenter",function(e){
            var singleEmp = $(e.currentTarget);
            singleEmp.addClass("hovered");
            var name = singleEmp.children("h1");
            var job = singleEmp.children("h3");
            var email = singleEmp.children("h6");
            
            $(".single-emp:not(.hovered)").children("img").css({
                filter: "blur(2px)"
            });
            
            
            name.css({
                "transform" : "translateY(-80px) scale(1.3)"

            });
            job.css({
                "transform" : "translateY(50px) scale(1.3)"

            });
            
            email.css({
                "transform" : "translateY(50px) scale(1.3)"

            });        
        });
        
        
        $(".single-emp").on("mouseout",function(e){
            var singleEmp = $(e.currentTarget);
            singleEmp.removeClass("hovered");
            var name = singleEmp.children("h1");
            var job = singleEmp.children("h3");
            var email = singleEmp.children("h6");
            $(".single-emp:not(.hovered)").children("img").css({
                filter: "blur(0)"
            });
            
            name.css({
                "transform" : "translateY(0) scale(1)"
            });
            
            job.css({
                "transform" : "translateY(0) scale(1)"
            });
            
            email.css({
                "transform" : "translateY(0) scale(1)"
            });
            
        });
    });    
    
    
    
    

    
});