// Suggestions database
const suggestions = {
    style: [
        "alignContent",
        "alignItems",
        "alignSelf",
        "animation",
        "animationDelay",
        "animationDirection",
        "animationDuration",
        "animationFillMode",
        "animationIterationCount",
        "animationName",
        "animationTimingFunction",
        "animationPlayState",
        "background",
        "backgroundAttachment",
        "backgroundColor",
        "backgroundImage",
        "backgroundPosition",
        "backgroundRepeat",
        "backgroundClip",
        "backgroundOrigin",
        "backgroundSize",
        "backfaceVisibility",
        "border",
        "borderBottom",
        "borderBottomColor",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderBottomStyle",
        "borderBottomWidth",
        "borderCollapse",
        "borderColor",
        "borderImage",
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth",
        "borderLeft",
        "borderLeftColor",
        "borderLeftStyle",
        "borderLeftWidth",
        "borderRadius",
        "borderRight",
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth",
        "borderSpacing",
        "borderStyle",
        "borderTop",
        "borderTopColor",
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderTopStyle",
        "borderTopWidth",
        "borderWidth",
        "bottom",
        "boxDecorationBreak",
        "boxShadow",
        "boxSizing",
        "captionSide",
        "caretColor",
        "clear",
        "clip",
        "color",
        "columnCount",
        "columnFill",
        "columnGap",
        "columnRule",
        "columnRuleColor",
        "columnRuleStyle",
        "columnRuleWidth",
        "columns",
        "columnSpan",
        "columnWidth",
        "content",
        "counterIncrement",
        "counterReset",
        "cursor",
        "direction",
        "display",
        "emptyCells",
        "filter",
        "flex",
        "flexBasis",
        "flexDirection",
        "flexFlow",
        "flexGrow",
        "flexShrink",
        "flexWrap",
        "cssFloat",
        "font",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "fontSizeAdjust",
        "fontStretch",
        "hangingPunctuation",
        "height",
        "hyphens",
        "icon",
        "imageOrientation",
        "isolation",
        "justifyContent",
        "left",
        "letterSpacing",
        "lineHeight",
        "listStyle",
        "listStyleImage",
        "listStylePosition",
        "listStyleType",
        "margin",
        "marginBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "maxHeight",
        "maxWidth",
        "minHeight",
        "minWidth",
        "navDown",
        "navIndex",
        "navLeft",
        "navRight",
        "navUp",
        "objectFit",
        "objectPosition",
        "opacity",
        "order",
        "orphans",
        "outline",
        "outlineColor",
        "outlineOffset",
        "outlineStyle",
        "outlineWidth",
        "overflow",
        "overflowX",
        "overflowY",
        "padding",
        "paddingBottom",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "pageBreakAfter",
        "pageBreakBefore",
        "pageBreakInside",
        "perspective",
        "perspectiveOrigin",
        "position",
        "quotes",
        "resize",
        "right",
        "scrollBehavior",
        "tableLayout",
        "tabSize",
        "textAlign",
        "textAlignLast",
        "textDecoration",
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle",
        "textIndent",
        "textJustify",
        "textOverflow",
        "textShadow",
        "textTransform",
        "top",
        "transform",
        "transformOrigin",
        "transformStyle",
        "transition",
        "transitionProperty",
        "transitionDuration",
        "transitionTimingFunction",
        "transitionDelay",
        "unicodeBidi",
        "userSelect",
        "verticalAlign",
        "visibility",
        "whiteSpace",
        "width",
        "wordBreak",
        "wordSpacing",
        "wordWrap",
        "widows",
        "zIndex"
        // Add more style properties as needed
    ],
    attribute: [
        'src',
        'href',
        'alt',
        'title',
        'data-*',
        // Add more attribute options as needed
    ],
    before: [
        '<div>HTML Code</div>',
        '<p>Paragraph</p>',
        '<h2>Header</h2>',
        // Add more HTML snippet options for before insertion
    ],
    after: [
        '<div>HTML Code</div>',
        '<p>Paragraph</p>',
        '<h2>Header</h2>',
        // Add more HTML snippet options for after insertion
    ],
    prepend: [
        '<div>HTML Code</div>',
        '<p>Paragraph</p>',
        '<h2>Header</h2>',
        // Add more HTML snippet options for prepend insertion
    ],
    append: [
        '<div>HTML Code</div>',
        '<p>Paragraph</p>',
        '<h2>Header</h2>',
        // Add more HTML snippet options for append insertion
    ],
};

function formatHTML() {
    let htmlCodeElement = document.getElementById('htmlCode');
    let formattedHTML = html_beautify(htmlCodeElement.value, {
        indent_size: 2,
        space_in_empty_paren: true
    });
    htmlCodeElement.value = formattedHTML;
}

function suggestAttributes() {
    let changeType = document.getElementById('changeType').value;
    let suggestionArea = document.getElementById('suggestionArea');

    // Clear previous suggestions
    suggestionArea.innerHTML = '';

    // Check if there are suggestions for the selected change type
    if (suggestions.hasOwnProperty(changeType) && suggestions[changeType].length > 0) {
        // Create a label for suggestions
        let label = document.createElement('div');
        label.textContent = 'Suggestions';
        label.classList.add('suggestion-label');
        suggestionArea.appendChild(label);

        // Populate suggestions
        suggestions[changeType].forEach(attr => {
            let suggestion = document.createElement('div');
            suggestion.textContent = attr;
            suggestion.classList.add('suggestion');
            suggestion.addEventListener('click', function() {
                document.getElementById('changeValue').value = attr;
            });
            suggestionArea.appendChild(suggestion);
        });

        // Show the suggestion area
        suggestionArea.style.display = 'block';
    } else {
        // Hide the suggestion area if no suggestions
        suggestionArea.style.display = 'none';
    }
}

function countSelectorOccurrences() {
    let htmlCode = document.getElementById('htmlCode').value.trim();
    let selectorType = document.getElementById('selectorType').value;
    let selector = document.getElementById('selector').value.trim();
    let count = 0;

    if (!htmlCode || !selector) {
        document.getElementById('selectorCount').textContent = '';
        return;
    }

    let parser = new DOMParser();
    let doc = parser.parseFromString(htmlCode, 'text/html');
    let elements;

    switch (selectorType) {
        case 'id':
            elements = doc.querySelectorAll(`#${selector}`);
            break;
        case 'class':
            elements = doc.querySelectorAll(`.${selector}`);
            break;
        case 'data':
            elements = doc.querySelectorAll(`[data-${selector}]`);
            break;
        default:
            alert('Invalid selector type.');
            return;
    }

    count = elements.length;
    document.getElementById('selectorCount').textContent = `This selector is being used: ${count} time(s).`;

    let selectorList = document.getElementById('selectorList');
    selectorList.innerHTML = '';

    if (count > 1) {
        elements.forEach((element, index) => {
            let option = document.createElement('option');
            option.value = index;
            option.textContent = `Instance ${index + 1}: ${element.outerHTML}`;
            selectorList.appendChild(option);
        });

        selectorList.style.display = 'block';
    } else {
        selectorList.style.display = 'none';
    }
}

function generateCode() {
    // Get values from form
    let htmlCode = document.getElementById('htmlCode').value.trim();
    let selectorType = document.getElementById('selectorType').value;
    let selector = document.getElementById('selector').value.trim();
    let changeType = document.getElementById('changeType').value;
    let changeValue = document.getElementById('changeValue').value.trim();
    let selectorList = document.getElementById('selectorList');
    let selectedInstance = selectorList.value;

    // Validate HTML code input
    if (!htmlCode) {
        alert('Please paste your HTML code.');
        return;
    }

    // Validate selector input
    if (!selector) {
        alert('Please enter a selector.');
        return;
    }

    // Validate change value input for certain types
    if ((changeType === 'innerHTML' || changeType === 'outerHTML' || changeType === 'textContent') && !changeValue) {
        alert(`Please enter a value for ${changeType}.`);
        return;
    }

    // Generate JavaScript code based on inputs
    let jsCode = '';
    if (selectedInstance !== '') {
        jsCode += `let element = document.querySelectorAll('${getSelectorString(selectorType, selector)}')[${selectedInstance}];\n`;
    } else {
        switch (selectorType) {
            case 'id':
                jsCode += `let element = document.getElementById('${selector}');\n`;
                break;
            case 'class':
                jsCode += `document.querySelectorAll('.${selector}').forEach(function(element) {\n`;
                break;
            case 'data':
                jsCode += `document.querySelectorAll('[data-${selector}]').forEach(function(element) {\n`;
                break;
            default:
                alert('Invalid selector type.');
                return;
        }
    }

    switch (changeType) {
        case 'style':
            jsCode += `    element.style.${changeValue};\n`;
            break;
        case 'innerHTML':
            jsCode += `    element.innerHTML = '${changeValue}';\n`;
            break;
        case 'outerHTML':
            jsCode += `    element.outerHTML = '${changeValue}';\n`;
            break;
        case 'textContent':
            jsCode += `    element.textContent = '${changeValue}';\n`;
            break;
        case 'attribute':
            let parts = changeValue.split(':');
            if (parts.length !== 2) {
                alert('Invalid attribute change format. Use "attributeName: value" format.');
                return;
            }
            let attributeName = parts[0].trim();
            let attributeValue = parts[1].trim();
            jsCode += `    element.setAttribute('${attributeName}', '${attributeValue}');\n`;
            break;
        case 'remove':
            jsCode += `    element.remove();\n`;
            break;
        case 'click':
            jsCode += `    element.onclick = function() { ${changeValue} };\n`;
            break;
        case 'before':
            jsCode += `    element.insertAdjacentHTML('beforebegin', '${changeValue}');\n`;
            break;
        case 'after':
            jsCode += `    element.insertAdjacentHTML('afterend', '${changeValue}');\n`;
            break;
        case 'prepend':
            jsCode += `    element.insertAdjacentHTML('afterbegin', '${changeValue}');\n`;
            break;
        case 'append':
            jsCode += `    element.insertAdjacentHTML('beforeend', '${changeValue}');\n`;
            break;
        default:
            alert('Unknown change type.');
            return;
    }

    if (selectorType !== 'id' && selectedInstance === '') {
        jsCode += `});\n`;
    }

    // Display generated JavaScript code
    document.getElementById('jsCode').textContent = jsCode;
}

function copyCode() {
    // Select the text inside the pre element
    let jsCode = document.getElementById('jsCode');
    let range = document.createRange();
    range.selectNode(jsCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copy the text to the clipboard
    try {
        document.execCommand('copy');
        alert('Code copied to clipboard');
    } catch (err) {
        alert('Failed to copy code');
    }

    // Deselect the text
    window.getSelection().removeAllRanges();
}

function getSelectorString(selectorType, selector) {
    switch (selectorType) {
        case 'id':
            return `#${selector}`;
        case 'class':
            return `.${selector}`;
        case 'data':
            return `[data-${selector}]`;
        default:
            return '';
    }
}

document.getElementById('selector').addEventListener('input', countSelectorOccurrences);
