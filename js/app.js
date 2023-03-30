var date = new Date();

var seher = 'Seher smeni';
var gunorta = 'Gunorta smeni';
var axsham = 'Axsham smeni';
var error = 'Bele bir smen yoxdur';
var zero = null;

function Search() {
    var input = document.getElementById('code').value;
    var gr = Number(input.slice(-3,-2));

    switch (gr) {
        case 1:
            document.getElementById('group').innerHTML = seher;
            document.body.style.backgroundImage = 'url(https://cdn2.hubspot.net/hubfs/2936356/maxresdefault.jpg)';
            break;
        case 2:
            document.getElementById('group').innerHTML = gunorta;
            document.body.style.backgroundImage = 'url(https://s7d2.scene7.com/is/image/TWCNews/mostly_sunny_skymustcreditrickbeachamjpg)';
            break;
        case 3:
            document.getElementById('group').innerHTML = axsham;
            document.body.style.backgroundImage = 'url(https://www.bviddm.com/wp-content/uploads/2017/06/night-time_forecast.jpg)';
            break;
        default:
            document.getElementById('group').innerHTML = error;
            document.body.style.backgroundImage = 'url(https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1)';
            break;
    }
}