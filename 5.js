//136л
alert('Введите значение числа n');
var n=prompt(n);
var a=[],res=1;
for (var i=0;i<n;i++)
{
    a[i]=Math.random()*(100);
    a[i]=Math.floor(a[i]);
    alert(a[i]+' ');
    res=res*a[i];
}
alert('res= '+ Math.sqrt(Math.abs(res)));