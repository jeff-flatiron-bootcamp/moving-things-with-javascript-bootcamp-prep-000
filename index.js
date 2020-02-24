const app = "I don't do much."

//<<<<<<< HEAD 
var dodger = document.getElementById('dodger');

function moveDodgerToLeft()
{
  var leftNumber = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumber, 10);
  
  if(left > 0)
  {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerToRight()
{
  var leftNumber = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumber, 10);
  
  if(left < 360)
  {
    dodger.style.left = `${left + 1}px`
  }
}


document.addEventListener('keydown', function(key)
  {
    if(key.which === 37)
    {
      moveDodgerToLeft();
    }
  }
);

document.addEventListener('keydown', function(key)
  {
    console.log(key.which);
    if(key.which === 39)
    {
      moveDodgerToRight();
    }
  }
);
//=======
/*
function moveDodgerToLeft()
{
  $('#dodger').on('keydown', 
    function(key)
    {
      if(key.which === 37)
      {
        var leftNumber = this.style.left.replace('px', '')
        var left = parseInt(leftNumber, 10)
        
        if(left > 0)
        {
          dodger.style.left = `${left}px`
        }
      }
    }
  );
}

$(document).ready(function()
{
  moveDodgerToLeft();
});
*/
// >>>>>>> 985641ec924376042389066ea9b32ae0d1d0c462
