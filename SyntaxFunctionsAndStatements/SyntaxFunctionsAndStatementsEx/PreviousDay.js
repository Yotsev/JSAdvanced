function previus(year, month, day){
    let dateAsString = year+'-'+month+'-'+day; 
    let date = new Date(dateAsString);

    date.setDate(date.getDate()-1);

    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
previus(2016, 9, 30)
previus(2016, 10, 1)
previus(2016, 11, 1)