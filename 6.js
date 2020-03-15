//832
alert('Введите год');
var n=prompt(n);
var date=new Date(n,0),lastmounth,running;
lastmounth=date.getMonth();
while (date.getFullYear()<Number(n)+Number(1))
{
    date.setDate((date.getDate()+1));
    if(date.getMonth()>lastmounth) {
        alert(running.getDate()+' ');
        lastmounth++;
    }
    if(date.getDay()==4) {
        running = new Date(date);
    }
}
alert(running.getDate()+' ');