var arr = [`
    <p>"Be yourself; everyone else is already taken."</p>
    <p>― Oscar Wilde</p>
    ` ,
`
    <p>"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."</p>
    <p>― Ralph Waldo Emerson</p>
    `,
`
    <p>"It is better to be hated for what you are than to be loved for what you are not."</p>
    <p>― Andre Gide</p>
    ` ,
`
    <p>"So many books, so little time."</p>
    <p>― Frank Zappa</p>
    `,
`
    <p>"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."</p>
    <p>― Albert Einstein</p>
    `]
var old = `` 
var cartona = ``    
function demo() {
    var x = Math.floor(Math.random() * 5);//Math.floor(Math.random() * 3);
    while (x == old) {
       x = Math.floor(Math.random() * 5); 
    }
    old = x;
    cartona = arr[x]; 
    document.getElementById("demo").innerHTML = cartona
}

