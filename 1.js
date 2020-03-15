//312
alert('Введите значение числа n');
var n=prompt(n);
var s=[],s1=[],k=1,k1=1,l1=0,l=0;
alert('Введите символы');
for (var i=0;i<n;i++) {
    s[i] = prompt(s[i]);
    s1[i]=s[i];
    if (s[i] == "*") {
        k=0;l=i;
    }
    if (s1[i] == "*") {
        k1=0;l1=i;
    }
}
if(k==1&&k1==1) {
    for (var i = 0; i < n; i++) {
        alert(s[i] + '');
    }
}
else {
    alert('a');
    for (var i = 0; i < l; i++) {
        if (s[i] == "/") {
            s[i] = ","
        }
    }
    for (var i = 0; i < n; i++) {
        alert(s[i] + '');
    }
    alert('б');
    for (var i = 0; i < l1; i++) {
        if (s1[i] == "/") {
            for (var j = i; j < n; j++)
                s1[j] = s1[j + 1];
            i--;
        }

    }
    for (var i = 0; i < n-l1; i++) {
        alert(s1[i] + '');
    }
}