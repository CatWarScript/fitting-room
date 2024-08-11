function costume1(okC, okS, okD, coC, coS, coD, un, me, mer) {
  const targetDiv = getDiv(un);
  const targetField = getTargetField(me, un);

  if (okC !== "-") {
    let cssCC = `div[style*="${okC}"] {background-image: url("${coC}") !important;}`;
    $(`${targetDiv} #${targetField}`).append(cssCC);
  };
  if (okS !== "-") {
    let cssCS = `div[style*="${okS}"] {background-image: url("${coS}") !important;}`;
    $(`${targetDiv} #${targetField}`).append(cssCS);
  };
  if (okD !== "-") {
    let cssCD = `div[style*="${okD}"] {background-image: url("${coD}") !important;}`;
    $(`${targetDiv} #${targetField}`).append(cssCD);
  };

  if (mer) {
    let cssCode = '';
    if (okC !== "-") {
      cssCode += `div[style*="${okC}"] {background-image: url("${coC}") !important;}\n`;
    }
    if (okS !== "-") {
      cssCode += `div[style*="${okS}"] {background-image: url("${coS}") !important;}\n`;
    }
    if (okD !== "-") {
      cssCode += `div[style*="${okD}"] {background-image: url("${coD}") !important;}\n`;
    }
    $('#costumesMER').append(cssCode);
  } else { // Добавляем ватермарку, если mer=false
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

    let cssCW = `${window.watermarkSelectors.join(', ')} {content: var(--svgFile) !important;position: absolute;bottom: -27px;left: -9px;transform: scale(44%); }`;
    $(`${targetDiv} #${getTargetField(me + 1, un)}`).append(cssCW); 
    window.watermarkSelectors = [];
  }
}

function costume2(okC, okS, okD, coC, coS, coD, un, me, mer) {
  const targetDiv = getDiv(un);
  const targetField = getTargetField(me, un);

  if (okC !== "-") {
    let cssCC = `div[style*="${okC}"] {background-image: url("${coC}"), url("${okC}") !important;}`;
    $(`${targetDiv} #${targetField}`).append(cssCC);
  };
  if (okS !== "-") {
    let cssCS = `div[style*="${okS}"] {background-image: url("${coS}"), url("${okS}") !important;}`;
    $(`${targetDiv} #${targetField}`).append(cssCS);
  };
  if (okD !== "-") {
    let cssCD = `div[style*="${okD}"] {background-image: url("${coD}"), url("${okD}") !important;}`;
    $(`${targetDiv} #${targetField}`).append(cssCD);
  };

  if (mer) {
    let cssCode = '';
    if (okC !== "-") {
      cssCode += `div[style*="${okC}"] {background-image: url("${coC}"), url("${okC}") !important;}\n`;
    }
    if (okS !== "-") {
      cssCode += `div[style*="${okS}"] {background-image: url("${coS}"), url("${okS}") !important;}\n`;
    }
    if (okD !== "-") {
      cssCode += `div[style*="${okD}"] {background-image: url("${coD}"), url("${okD}") !important;}\n`;
    }
    $('#costumesMER').append(cssCode);
  } else { // Добавляем ватермарку, если mer=false
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

    let cssCW = `${window.watermarkSelectors.join(', ')} {content: var(--svgFile) !important;position: absolute;bottom: -27px;left: -9px;transform: scale(44%); }`;
    $(`${targetDiv} #${getTargetField(me + 1, un)}`).append(cssCW); 
    window.watermarkSelectors = [];
  }
}

function getDiv(un) {
  switch (un) {
    case 0:
      return '#lakeUniverse';
    case 1:
      return '#seaUniverse';
    case 2:
      return '#creatorUniverse';
    default:
      return '';
  }
}

function getTargetField(me, un) {
  if (me === 0) {
    return `costumes-${getDivName(un)}`; 
  } else if (me === 1) {
    return `costumesM-${getDivName(un)}`; 
  } else {
    return `costumesWM-${getDivName(un)}`; // Исправлено:  costumesWM, а не costumesW
  }
}

function getDivName(un) {
  switch (un) {
    case 0:
      return 'lake';
    case 1:
      return 'sea';
    case 2:
      return 'creator';
    default:
      return '';
  }
}

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
    eval(line);
  }
}

$("#convert-button").click(processText);
