$('#rock').click(function(){
    $('#computer').empty()
    var computer = Math.floor(Math.random() * 3 + 1)
    var user = 1
    if(computer === 2) {
        $('#computer').text('Paper, you lose!');
    } else if(computer = user) {
        $('#computer').text('Rock, we tie!');
    } else {
        $('#computer').text('Scissors, you win you lucky duck.')
    }
})

$('#paper').click(function(){
    $('#computer').empty()
    var computer = Math.floor(Math.random() * 3 + 1)
    var user = 2
    if(computer === 3) {
        $('#computer').text('Scissors, you lose so hard!');
    } else if(computer === 1) {
        $('#computer').text('Rock, you won, but that means nothing!');
    } else {
        $('#computer').text('Paper, we tie.')
    }
})

$('#scissors').click(function(){
    $('#computer').empty()
    var computer = Math.floor(Math.random() * 3 + 1)
    var user = 3
    if(computer === 2) {
        $('#computer').text('Paper, I guess you won!');
    } else if(computer === 1) {
        $('#computer').text('Rock, you lose teehee!');
    } else {
        $('#computer').text('Scissors, looks like we tie again.')
    }
})