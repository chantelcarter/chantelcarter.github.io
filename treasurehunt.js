// alert("Am I connected?")
const changeToEmoji = (typeOfGems) => {
    if(typeOfGems === 'diamond'){
    document.getElementById('diamond').innerHTML = "💎"}
    else if(typeOfGems === 'gold'){
    document.getElementById('gold').innerHTML = "👑"}
    else if(typeOfGems === 'scarlet'){
    document.getElementById('scarlet').innerHTML = "♦️"}
}
// changeToEmoji(diamond)
// const treasure = (location) => {
//     if(location === '0')
//     document.getElementById(location).innerHTML = "🌴"}

// const treasure = (location) => {
//     if(location === '0')
//     document.getElementById('0').
//     innerHTML = "🌴"
//     if(location === '1')
//     document.getElementById('1').
//     innerHTML = "🌴"
//     if(location === '2')
//     document.getElementById('2').
//     innerHTML = "🌴"
//     if(location === '3')
//     document.getElementById('3').
//     innerHTML = "🌴"
//     if(location === '4')
//     document.getElementById('4').
//     innerHTML = "🌴"
//     if(location === '5')
//     document.getElementById('5').
//     innerHTML = "🌴"
//     if(location === '6')
//     document.getElementById('6').
//     innerHTML = "🌴"
//     if(location === '7')
//     document.getElementById('7').
//     innerHTML = "🌴"
//     if(location === '8')
//     document.getElementById(8').
//     innerHTML = "🌴"

    
     const treasure = (mainTarget) => {
        if(mainTarget === '0'){
        document.getElementById('0').innerHTML = "🌴"}
        else if(mainTarget === '1'){
        document.getElementById('1').innerHTML = "🌴"}
        else if(mainTarget === '2'){
        document.getElementById('2').innerHTML = "🌴"}
        else if(mainTarget === '3'){
        document.getElementById('3').innerHTML = "🌴"}
        else if(mainTarget === '4'){
        document.getElementById('4').innerHTML = "🌴"}
        else if(mainTarget === '5'){
        document.getElementById('5').innerHTML = "🌴"}
        else if(mainTarget === '6'){
        document.getElementById('6').innerHTML = "🌴"}
        else if(mainTarget === '7'){
        document.getElementById('7').innerHTML = "🌴"}
        else if(mainTarget === '8'){
        document.getElementById('8').innerHTML = "🌴"}
      }

      var theTreasure = Math.floor(Math.random()*9)
      var theBomb = Math.floor(Math.random()*9)
        const map = (clickedLocation) => {
            if(clickedLocation === theTreasure){
            document.getElementById(theTreasure).innerHTML = "💎"}
            else if(clickedLocation === theBomb)
           { document.getElementById(theBomb).innerHTML = "💣"}
            else 
           { document.getElementById(clickedLocation).innerHTML = "🌴"}

        }














