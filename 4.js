//442
function d(x1,x2,y1,y2) {
    var dl=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    return dl;
}

var n=10, x=[],y=[],p=0;
for  (var i=0;i<n;i++)
{
    x[i]=Math.random()*(10);
    x[i]=Math.floor(x[i]);
    y[i]=Math.random()*(10);
    y[i]=Math.floor(y[i]);
    alert('Точка №'+(i+1)+' с координатами ('+x[i]+','+y[i]+')');
}
for (var i=0;i<n-1;i++)
{
    p=(p+d(x[i],x[i+1],y[i],y[i+1]));
}
alert('P= '+p.toFixed(1));
