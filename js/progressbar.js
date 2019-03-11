$(document).ready(function()
{
   
      var progressbar1 = $('#progressbar'),
            max = progressbar1.attr('max'),
            time = (1000/max)*5,    
            value = progressbar1.val();
            
        var progressbar2 = $('#progressbar2');
        var progressbar3 = $('#progressbar3');
        var progressbar4 = $('#progressbar4');
        

            var loading = function(progressbar,i) 
            {
                value += 1;
                addValue = progressbar.val(value);
                if(i==1)
                    $("#progressnum1").html(value+1+"%");
                if(i==2)
                    $("#progressnum2").html(value+1+"%");
                if(i==3)
                     $("#progressnum3").html(value+2+"%");
                if(i==4)
                    $("#progressnum4").html(value+"%");
 

                if (value == 79) 
                    clearInterval(animate);                    

                if(value==90)
                    clearInterval(animate2);       
                
                if(value==69)
                    clearInterval(animate3);       
                if(value==92)
                    clearInterval(animate4);       
                
                
            };
 
            var animate = setInterval(function() {
                loading(progressbar1,1);
           }, time);
          var animate2 = setInterval(function() {
       
              loading(progressbar2,2);
            }, time);
        var animate3 = setInterval(function() {
                loading(progressbar3,3);
            }, time);
        var animate4 = setInterval(function() {
                loading(progressbar4,4);     
            }, time);


});