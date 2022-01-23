function solve() {
  let text = document.getElementById('text').value;
  const modifier = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let line = text.toLowerCase().split(' ');

  console.log(text);
  console.log(modifier);
  console.log(line);

  let output = '';
  
  if (modifier === 'Camel Case') {
    
    output = line[0];
    for (let i = 1; i < line.length; i++) {
      let upper = line[i].split('')[0].toUpperCase();
      line[i] = upper+line[i].slice(1);
      output += line[i];
    }

    result.textContent = output;
  
  } else if (modifier === 'Pascal Case') {
    
    for (let i = 0; i < line.length; i++) {
      let upper = line[i].split('')[0].toUpperCase();
      line[i] = upper+line[i].slice(1);
      output += line[i];
    }

    result.textContent = output;
  
  } else {
    
    result.textContent = 'Error!';
  }
}