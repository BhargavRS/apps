function myFunction() {
var var1=document.getElementById("name1").value;
var var2=document.getElementById("name2").value;
var n1=var1.length;
var n2=var2.length;
var var3="The length of " +var1+" is "+n1+" and the length of "+var2+" is "+n2;
var i;
var v1 = var1.split("");
var v2 = var2.split("");
var total=0;
for(i=0;i<n1;i++)
for(j=0;j<n2;j++)
{
  if(v1[i]==v2[j])
  {
  v1[i]='*';
  v2[i]='*';
  total+=2;
  }
}
var flamescount=n1+n2-total;
var flames="flames";

while(flames.length>1)
{

  var i=(flamescount)%(flames.length);
  if(i==0)
  {
  var flames1=flames.substring(i,(flames.length)-1);
  flames=flames1;
  }
  else if(i==1)
  {
  var flames1=flames.substring(1,(flames.length));
  flames=flames1;
  }
  else
  {
  var flames1=flames.substring(i,(flames.length));
  var flames2=flames.substring(0,i-1);
  flames=flames1+flames2;
  }
}

switch(flames)
{
  case 'f':
  flames="Friends";
  break;
  case 'l':
  flames="Lovers";
  break;
  case 'a':
  flames="Affectionate";
  break;
  case 'm':
  flames="Married";
  break;
  case 'e':
  flames="Enemies";
  break;
  case 's':
  flames="Sisters";
  break;
}

var var3="The length of " +var1+" is "+n1+" and the length of "+var2+" is "+n2+" and flames count is "+flamescount+" "+flames;
var var4=var1.toUpperCase() + " and "+var2.toUpperCase() +" are "+flames;
document.getElementById("demo").innerHTML =var4;
window.alert(var4);

}
