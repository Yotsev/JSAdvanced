function solve(year, month, day){
    let dateAsString = year+'-'+month+'-'+day; 
    let date = new Date(dateAsString);

    date.setDate(date.getDate()-1);

    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}