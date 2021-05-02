var btnInput = document.querySelector('#btn-input');
var input = document.querySelector('#txt-input');
var output = document.querySelector('#txt-output');

// console.log(text);
output.innerText = 'Here, translated text will appear';

btnInput.addEventListener('click', () => {
  translate(input.value);
});

const URLgenerator = (text) => {
  return `https://api.funtranslations.com/translate?text=${text}`;
};

const translate = (text) => {
  fetch(URLgenerator(text))
    .then((res) => res.json())
    .then((resJSON) => (output.innerText = resJSON.contents.translated))
    .catch(
      (err) =>
        (output.innerText =
          'Rate limited, this api is.Again after an hour, try.')
    );
};
