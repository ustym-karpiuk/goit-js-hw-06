const fontSizeControl = document.getElementById('font-size-control');
    const textSpan = document.getElementById('text');
function updateFontSize() {
      const fontSize = fontSizeControl.value + 'px';
      textSpan.style.fontSize = fontSize;
    }
 fontSizeControl.addEventListener('input', updateFontSize);
updateFontSize();
