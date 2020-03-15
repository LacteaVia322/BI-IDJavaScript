//374б
alert('Введите значение числа n');
var n=prompt(n);
var k=0, a=[];
for (var i=0;i<n;i++) {
    a[i]=[];
    for (var j = 0; j < n; j++) {
        a[i][j] = Math.cos(i * i + n);
        if (a[i][j] >0){
            k++;
        }
        alert(a[i][j]+' ');
    }
    alert(' ');
}
alert(k+' ');
