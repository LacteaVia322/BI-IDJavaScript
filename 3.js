//1014
//сумма столбцов
function sum(a,i,n) {
    var s=0;
    for (var j = 0; j < n; j++) {
        s += a[i][j];
    }
    return s;
}
//сумма строк
function summa(a,j,n) {
    var s=0;
    for (var i = 0; i < n; i++) {
        s += a[i][j];
    }
    return s;
}
//сумма гл диаголнали
function su(a,n) {
    var s=0;
    for (var i = 0; i < n; i++) {
        s += a[i][i];
    }
    return s;
}
//сумма второй диаголнали
function su2(a,n) {
    var s=0;
    for (var i = n-1; i >= 0; i--) {
        s += a[i][i];
    }
    return s;
}
//проверка на правильность цифр
function testing(a,n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (a[i][j] < 1 && a[i][j] > n * n) {
                test = 0;
                break;
            }
        }
    }
}

alert('Введите значение числа n');
var n=prompt(n);
//alert('n=5');
//var n=5;
var a=[],test=1,s0=0,s=0;
//a=[[17,24,1,8,15],[23,5, 7,14 ,16],[4,6,13 ,20,22],[10,12,19,21,3],[11,18,25,2,9]]
for(var i=0;i<n;i++) {
    for (var j = 0; j < n; j++) {
        a[i][j] = Math.random() * (n * n);
        // a[i][j]=prompt(a[i][j]);
        a[i][j] = Math.floor(a[i][j]);
        alert(a[i][j]+' ');

    }
    alert();
}
testing(a,n);
s0=sum(a,0,n);
alert('сумма= '+s0);
for (var i=1;i<n;i++) {
    s=sum(a,i,n);
    if(s!=s0)
    {test=0;
        break;}
}
for (var j=0;j<n;j++) {
    s=summa(a,j,n);
    if(s!=s0)
    {test=0;
        break;}
}
for(var i=0;i<n;i++) {
    s=su(a,n);
    if(s!=s0)
    {test=0;
        break;}
}
for(var i=0;i<n;i++) {
    s=su2(a,n);
    if(s!=s0)
    {test=0;
        break;}
}
if(test==1)
    alert('Yes');
else alert('No');

