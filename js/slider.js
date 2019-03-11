  var slider=$('#slider');
  var dotItems = $('#dots').children('li');
  var i=1;

  var s="background-size: cover;overflow: hidden; height: 860px;width: 100%;background-size: cover;background-position: 50% 50%; position: relative;";
  var arr=["img/slider1.png","img/slider2.png","img/slider3.png"];
  var len=arr.length;
  var timeInterval=3000;
  /*window.setInterval(NextSlide,timeInterval);*/
  setTimeout(NextSlide,  timeInterval);

  function NextSlide()
  {

     if(i==len)
      {
        i=0;
        var s2="background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) , transparent url("+arr[i]+") center center ;"+s;  
        slider.css('cssText',s2);
        dotItems.removeClass('active').eq(i).addClass('active');
        
     }
    else
     {

        var s2="background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) , transparent url("+arr[i]+") center center;"+s;
        slider.css('cssText',s2);
        dotItems.removeClass('active').eq(i).addClass('active');
     }
     i++;
     timeInterval=timeInterval+1000
     setTimeout(NextSlide,  timeInterval);

  }

function PrevSlide()
{
  if(i==0)
  {
     i=len-1;
     var s2="background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) , transparent url("+arr[i]+") center center;"+s;  
      slider.css('cssText',s2);
     dotItems.removeClass('active').eq(i).addClass('active');
  }
  else
  {
      i=i-1;
      var s2="background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) , transparent url("+arr[i]+") center center;"+s;  
      slider.css('cssText',s2);
      dotItems.removeClass('active').eq(i).addClass('active');
  }

}

 $("#dots li").click(function () {
     i = $('#dots li').index(this);

     NextSlide();
  });

 $("#next").click(function () {

      NextSlide();
  });

$("#prev").click(function () {

      PrevSlide();
  });

