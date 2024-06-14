"use strict";

function costume1(okC, okS, okD, coC, coS, coD) {
  // ДЛЯ ОБЫЧНЫХ КОСТЮМОВ
  if (okC !== "-") {
    let cssCC = `div[style*="${okC}"] {background-image: url("${coC}") !important;}
`;
    $('#textForCSS1').append(cssCC);
  };
  if (okS !== "-") {
    let cssCS = `div[style*="${okS}"] {background-image: url("${coS}") !important;}
`;
    $('#textForCSS1').append(cssCS);
  };
  if (okD !== "-") {
    let cssCD = `div[style*="${okD}"] {background-image: url("${coD}") !important;}
`;
    $('#textForCSS1').append(cssCD);
  };

  // ДЛЯ ВАТЕРМАРОК
  // Используем глобальную переменную для хранения селекторов
  if (!window.watermarkSelectors) {
    window.watermarkSelectors = [];
  }
  if (okC !== "-") {
    window.watermarkSelectors.push(`div[style*="${okC}"]::before`);
  }
  if (okS !== "-") {
    window.watermarkSelectors.push(`div[style*="${okS}"]::before`);
  }
  if (okD !== "-") {
    window.watermarkSelectors.push(`div[style*="${okD}"]::before`);
  }
};

function costume2(okC, okS, okD, coC, coS, coD) {
  // ДЛЯ ОБЫЧНЫХ КОСТЮМОВ
  if (okC !== "-") {
    let cssCC = `div[style*="${okC}"] {background-image: url("${coC}"), url("${okC}") !important;}
`;
    $('#textForCSS1').append(cssCC);
  };
  if (okS !== "-") {
    let cssCS = `div[style*="${okS}"] {background-image: url("${coS}"), url("${okS}") !important;}
`;
    $('#textForCSS1').append(cssCS);
  };
  if (okD !== "-") {
    let cssCD = `div[style*="${okD}"] {background-image: url("${coD}"), url("${okD}") !important;}
`;
    $('#textForCSS1').append(cssCD);
  };

  // ДЛЯ ВАТЕРМАРОК
  // Используем глобальную переменную для хранения селекторов
  if (!window.watermarkSelectors) {
    window.watermarkSelectors = [];
  }
  if (okC !== "-") {
    window.watermarkSelectors.push(`div[style*="${okC}"]::before`);
  }
  if (okS !== "-") {
    window.watermarkSelectors.push(`div[style*="${okS}"]::before`);
  }
  if (okD !== "-") {
    window.watermarkSelectors.push(`div[style*="${okD}"]::before`);
  }
};

var inputText = localStorage.getItem("inputText");
if (inputText) {
  $("#textFromForm").val(inputText);
}

function processText() {
  var inputText = $("#textFromForm").val();
  var outputText = "";
  var lines = inputText.split("\n");

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    line = line.replace(/^\"\s*|\s*\"$/g, "");
    line = line.replace(/""/g, "\"");
    outputText += line + "\n";
  }
  localStorage.setItem("inputText", inputText);
  $("#textForJS").val(outputText);

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    line = line.replace(/^\"\s*|\s*\"$/g, "");
    line = line.replace(/""/g, "\"");
    eval(line); // Осторожно!
  }

  // Выводим правило с ватермаркой после всех других
  let cssCW = `${window.watermarkSelectors.join(', 
')} {
content: var(--svgFile) !important;
position: absolute;
bottom: -27px;
left: -9px;
transform: scale(44%); }`;
  $('#textForCSS2').append(cssCW);
  // Сбрасываем массив селекторов для следующего вызова
  window.watermarkSelectors = [];

  // Очищаем лишние селекторы
  var cssCode = $("#textForCSS2").val().replace(/, div\[style\*="-"]::before/g, "");
  $("#textForCSS2").val(cssCode);
}

$("#convert-button").click(processText);
