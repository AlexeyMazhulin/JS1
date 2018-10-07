var q,a,b,res,q,s,spred,isRun,diap,var1,var2,var3,var4,pr
isRun = true;
max = 1000000;
diap = 10;
s=100;
spred = 0;

while (isRun && s<=max){

a=Math.round(Math.random()*diap);
b=Math.round(Math.random()*2*a*0.1-a*0.1);
res = a+b;
pr = Math.round(Math.random()*3);

switch (pr){
    case 0:var1 = res;
           var2 = Math.round(Math.random()*60-30)+res;
           var3 = Math.round(Math.random()*60-30)+res;
           var4 = Math.round(Math.random()*60-30)+res;
           break;
    case 1:var2 = res;
           var1 = Math.round(Math.random()*60-30)+res;
           var3 = Math.round(Math.random()*60-30)+res;
           var4 = Math.round(Math.random()*60-30)+res;
           break;      
    case 2:var3 = res;
           var1 = Math.round(Math.random()*60-30)+res;
           var2 = Math.round(Math.random()*60-30)+res;
           var4 = Math.round(Math.random()*60-30)+res;
           break;
    case 3:var4 = res;
           var2 = Math.round(Math.random()*60-30)+res;
           var3 = Math.round(Math.random()*60-30)+res;
           var1 = Math.round(Math.random()*60-30)+res;
           break;
    }

var zn
if (b>=0){
    zn = "+";
    }
   else {
     zn = "";
   } 

q=prompt("сумма в банке:" + spred + "\n" +
         " вопрос на " + s + " руб." + "\n" +  
         "сколько будет " + a + zn + b + "\n" + 
         "варианты ответа: \n" +
                          "1. " + var1 + "\n" +
                          "2. " + var2 + "\n" + 
                          "3. " + var3 + "\n" +
                          "4. " + var4 + "\n" +         
         " ,qq забрать деньги");

if (res==q) {
    alert("правильно");
    diap = diap*2;
    spred = s;
    if(spred == max){
        alert("поздравляем, вы выиграли");
        break;
    }
    }
    else if (q=="qq"){
        alert("выигрыш " + spred + "руб.")
        isRun = false;
    }
    else {
         alert("Не угадал, выигрыш 0 руб.")
         isRun = false;
        }   

s=s*2;
if (s>max) {
    s=max;
   }


}
