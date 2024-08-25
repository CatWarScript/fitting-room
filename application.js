function costume1(okC, okS, okD, coC, coS, coD, un, me, mer) {
  const targetDiv = getDiv(un);
if (mer === false) {
  if (okC !== "-") {
    let cssCC = `div[style*="${okC}"] {background-image: url("${coC}") !important;}\n`;
    $(`${targetDiv} #${getTargetField(me, un)}`).append(cssCC); 
  };
  if (okS !== "-") {
    let cssCS = `div[style*="${okS}"] {background-image: url("${coS}") !important;}\n`;
    $(`${targetDiv} #${getTargetField(me, un)}`).append(cssCS);
  };
  if (okD !== "-") {
    let cssCD = `div[style*="${okD}"] {background-image: url("${coD}") !important;}\n`;
    $(`${targetDiv} #${getTargetField(me, un)}`).append(cssCD);
  };
}

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
  } else {
    if (!window.watermarkSelectors0) { window.watermarkSelectors0 = []; }
    if (!window.watermarkSelectors1) { window.watermarkSelectors1 = []; }
    if (!window.watermarkSelectors2) { window.watermarkSelectors2 = []; }

    if (okC !== "-") {
      window[`watermarkSelectors${me}`].push(`div[style*="${okC}"]::before`);
    }
    if (okS !== "-") {
      window[`watermarkSelectors${me}`].push(`div[style*="${okS}"]::before`);
    }
    if (okD !== "-") {
      window[`watermarkSelectors${me}`].push(`div[style*="${okD}"]::before`);
    }

    let cssCW0 = window.watermarkSelectors0 ? `${window.watermarkSelectors0.join(', ')} {content: var(--svgFile) !important;position: absolute;bottom: -27px;left: -9px;transform: scale(44%); }` : '';
    let cssCW1 = window.watermarkSelectors1 ? `${window.watermarkSelectors1.join(', ')} {content: var(--svgFile) !important;position: absolute;bottom: -27px;left: -9px;transform: scale(44%); }` : '';
    let cssCW2 = window.watermarkSelectors2 ? `${window.watermarkSelectors2.join(', ')} {content: var(--svgFile) !important;position: absolute;bottom: -27px;left: -9px;transform: scale(44%); }` : '';

    if (me === 0) {
      $(${targetDiv} #${getTargetFieldW(0, un)}).append(cssCW0);
    } else if (me === 1) {
      $(${targetDiv} #${getTargetFieldW(1, un)}).append(cssCW1); 
    } else if (me === 2) {
      $(${targetDiv} #${getTargetFieldW(2, un)}).append(cssCW2);
    }

    window.watermarkSelectors0 = [];
    window.watermarkSelectors1 = [];
    window.watermarkSelectors2 = [];
  }
}

function costume2(okC, okS, okD, coC, coS, coD, un, me, mer) {
  const targetDiv = getDiv(un);
  const targetField = getTargetField(me, un);
if (mer === false) {
  if (okC !== "-") {
    let cssCC = `div[style*="${okC}"] {background-image: url("${coC}"), url("${okC}") !important;}\n`;
    $(`${targetDiv} #${targetField}`).append(cssCC);
  };
  if (okS !== "-") {
    let cssCS = `div[style*="${okS}"] {background-image: url("${coS}"), url("${okS}") !important;}\n`;
    $(`${targetDiv} #${targetField}`).append(cssCS);
  };
  if (okD !== "-") {
    let cssCD = `div[style*="${okD}"] {background-image: url("${coD}"), url("${okD}") !important;}\n`;
    $(`${targetDiv} #${targetField}`).append(cssCD);
  };
}

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
  } else {
    if (!window.watermarkSelectors0) { window.watermarkSelectors0 = []; }
    if (!window.watermarkSelectors1) { window.watermarkSelectors1 = []; }
    if (!window.watermarkSelectors2) { window.watermarkSelectors2 = []; }

    if (okC !== "-") {
      window[`watermarkSelectors${me}`].push(`div[style*="${okC}"]::before`);
    }
    if (okS !== "-") {
      window[`watermarkSelectors${me}`].push(`div[style*="${okS}"]::before`);
    }
    if (okD !== "-") {
      window[`watermarkSelectors${me}`].push(`div[style*="${okD}"]::before`);
    }

    let cssCW0 = window.watermarkSelectors0 ? `${window.watermarkSelectors0.join(', ')} {content: var(--svgFile) !important;position: absolute;bottom: -27px;left: -9px;transform: scale(44%); }` : '';
    let cssCW1 = window.watermarkSelectors1 ? `${window.watermarkSelectors1.join(', ')} {content: var(--svgFile) !important;position: absolute;bottom: -27px;left: -9px;transform: scale(44%); }` : '';
    let cssCW2 = window.watermarkSelectors2 ? `${window.watermarkSelectors2.join(', ')} {content: var(--svgFile) !important;position: absolute;bottom: -27px;left: -9px;transform: scale(44%); }` : '';

    if (me === 0) {
      $(${targetDiv} #${getTargetFieldW(0, un)}).append(cssCW0);
    } else if (me === 1) {
      $(${targetDiv} #${getTargetFieldW(1, un)}).append(cssCW1); 
    } else if (me === 2) {
      $(${targetDiv} #${getTargetFieldW(2, un)}).append(cssCW2);
    }

    window.watermarkSelectors0 = [];
    window.watermarkSelectors1 = [];
    window.watermarkSelectors2 = [];
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
  }
}
function getTargetFieldW(me, un) {
  if (me === 0) {
    return `costumesW-${getDivName(un)}`; 
  } else if (me === 1) {
    return `costumesWM-${getDivName(un)}`; 
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
