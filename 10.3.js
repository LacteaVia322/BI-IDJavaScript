//1027
var st1 = '(((()())))',st2 = '(()((()))))';
alert(f(st1));
alert(f(st2));
function f(a) {
    var
        arr = a.split(''),
        count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '(') {
            count++;
        }
    }
    for (var i = count; i > 0; i--) {
        arr = fun(arr);
    }
    if (arr == null)
        return true;
    return false;
}
function fun(a) {
    var
        start = -1,
        finish = -1;
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] == '(') {
            start = i;
            break;
        }
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] == ')' && i > start) {
            fin = i;
            break;
        }
    }
    if (fin == -1) {
        return a;
    }
    if ((a.length - 2) == 0) {
        return null;
    }
    var
        arr = new Array(a.length - 2);
    for (var i = 0, j = 0; i < arr.length; i++, j++) {
        if (j == start || j == finish) {
            j++;
        }
        arr[i] = a[j];
    }
    var st = '';
    arr.forEach(el => {
        st += el;
    });
    alert(st);
    return arr;
}