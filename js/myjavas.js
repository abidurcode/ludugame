result = () => {
    const diceone = Math.floor(Math.random() * 6) +1;
    const diceoneimage =`img/dice${diceone}.png`
    document.getElementById('player1').setAttribute(`src`, diceoneimage);

    const dicetwo = Math.floor(Math.random() * 6) +1;
    const dicetwoimage =`img/dice${dicetwo}.png`
    document.getElementById('player2').setAttribute(`src`, dicetwoimage);

    if (diceone>dicetwo) {
        document.getElementById('Ludo').innerHTML=`Player 1 Won :)`;
    }else if (diceone<dicetwo) {
        document.getElementById('Ludo').innerHTML=`Player 2 Won :)`;
    }else {
        document.getElementById('Ludo').innerHTML='Draw !';
    }
}