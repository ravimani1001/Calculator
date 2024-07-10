let b=document.querySelectorAll(".btn");
let expression = document.getElementById("exp");
let ans = 0;


let btns = Array.from(b);
console.log(btns);

for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",(e)=>{
        // console.log(e.target.id);
        
        if(e.target.id=="ac")
        {
            expression.innerText="0";
        }
        else if(e.target.id=="backspace")
        {
            if(expression.innerText.length==1 || expression.innerText=="")
            {
                expression.innerText="0";
            }
            else
            {
                expression.innerText = expression.innerText.slice(0,expression.innerText.length-1);
            }
        }
        else if(e.target.id=="equal")
        {
            try
            {
                ans = eval(expression.innerText);
                expression.innerText = ""+ans;
            }
            catch(err)
            {
                expression.innerText="ERROR";
            }
        }
        else
        {
            if(expression.innerText=="0" || expression.innerText=="ERROR")
            {
                expression.innerText=e.target.innerText;
            }
            else
            {
                expression.innerText+=e.target.innerText;
            }
            
        }
    });
}

