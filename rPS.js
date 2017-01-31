$('#rock').click(function(){
    $('#computer').empty()
    var computer = Math.floor(Math.random() * 3 + 1)
    var user = 1
    var scoreComp = 0
    var scoreYou = 0
    if(computer === 2) {
        $('#computer').text('Paper, you lose!');
        $('#scoreComp').value(parseInt(this.innerHTML) + 1);
    } else if(computer = user) {
        $('#computer').text('Rock, we tie!');
    } else {
        $('#computer').text('Scissors, you win you lucky duck.');
        $('#scoreUser').value(parseInt(this.innerHTML) + 1);
    }
})

$('#paper').click(function(){
    $('#computer').empty()
    var computer = Math.floor(Math.random() * 3 + 1)
    var user = 2
    if(computer === 3) {
        $('#computer').text('Scissors, you lose so hard!');
        $('#scoreComp').value(parseInt(this.innerHTML) + 1);
    } else if(computer === 1) {
        $('#computer').text('Rock, you won, but that means nothing!');
        $('#scoreUser').value(parseInt(this.innerHTML) + 1);
    } else {
        $('#computer').text('Paper, we tie.');
    }
})

$('#scissors').click(function(){
    $('#computer').empty()
    var computer = Math.floor(Math.random() * 3 + 1)
    var user = 3
    if(computer === 2) {
        $('#computer').text('Paper, I guess you won!');
        $('#scoreUser').value(parseInt(this.innerHTML) + 1);
    } else if(computer === 1) {
        $('#computer').text('Rock, you lose teehee!');
        $('#scoreComp').value(parseInt(this.innerHTML) + 1);
    } else {
        $('#computer').text('Scissors, looks like we tie again.');
    }
})