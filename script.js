$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

var email_match_text = ["@gmail.com","@yahoo.com"];
var email_space= false;
var pass_result_num=false;

$(".gmail_input").on("change",function(){
  let email_string = $(this).val();
	var gmailLength = $(this).val().length;
	var value1 = gmailLength-10;
	var  slice_email = email_string.slice(value1,gmailLength);
  for(let i=0; i<gmailLength; i++)
	{
		if(email_string[i]!=" ")
		{
			email_space = true;
			$(this).css({border:'1px solid #4CAF50'});
      $(this).parent().children('button').css({'pointer-events':'unset'});
		}
		else
		{
			email_space=false;
			$(this).css({border:'1px solid rgba(100,0,0,0.5)'});
      $(this).parent().children('button').css({'pointer-events':'none'});
		}
	}
  if(email_space==true)
	{
		if(email_match_text[0]===slice_email || email_match_text[1]===slice_email)
		{
			email_result_num = true;
			$(this).css({border:'1px solid #4CAF50'});
      $(this).parent().children('button').css({'pointer-events':'unset'});
		}
		else
		{
			email_result_num = false;
			$(this).css({border:'1px solid rgba(250,0,0,0.8)'});
      $(this).parent().children('button').css({'pointer-events':'none'});
		}
	}
});

$(".password_input")
.on('change',function() 
{
  var pass_str = $(this).val();
	if(pass_str.length>5)
	{
		pass_result_num=true;
		$(this).css({border:'1px solid #4CAF50'});
    $(this).parent().children('button').css({'pointer-events':'unset'});
	}
	else
	{
		pass_result_num=false;
		$(this).css({border:'1px solid rgba(250,0,0,0.8)'});
    $(this).parent().children('button').css({'pointer-events':'none'});
	}
});

var isType=false;
$('.type_chan').on('click',function(){
  if(isType==false)
    {
      $('.password_input').attr('type','text');
      isType=true;
    }
  else
    {
      $('.password_input').attr('type','password');
      isType=false;
    }
});