function extractText() {
   const liElements = document.querySelectorAll('ul#items li');
  const textAreaElement = document.querySelector('#result');

  for (const element of liElements) {
      textAreaElement.value += element.textContent + '\n';
  }
}