
function fillBottle(cup) {
    let bottle = 0;

    if (bottle === 1000) {
        console.log('Bottle Full');
        return;
    }

    if (cup >= 250) {
        console.log('Filling the bottle with 250ml');
        bottle += 250;
        cup -= 250;
    } else {
        console.log('The cup is empty.');
        return;
    }

    fillBottle(cup);
}

fillBottle(1000); // You may specify the initial amount in the cup here
