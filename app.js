var btnInput = document.querySelector('#btn-input');
var input = document.querySelector('#txt-input');
var output = document.querySelector('#txt-output');

// console.log(text);

btnInput.addEventListener('click', () => {
  translate(input.value);
});

const URLgenerator = (text) => {
  return `https://api.funtranslations.com/translate/minion.json?text=${text}`;
};

const translate = (text) => {
  fetch(URLgenerator(text))
    .then((res) => res.json())
    .then((resJSON) => (output.innerText = resJSON.contents.translated))
    .catch(
      (err) =>
        (output.innerText = 'This API is ratelimited. Try again after an hour.')
    );
};
