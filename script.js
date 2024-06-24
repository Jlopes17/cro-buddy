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

const descriptions = {
    style: "Change the style of the selected element. Example: 'color: red;'.",
    innerHTML: "Change the inner HTML content of the selected element.",
    outerHTML: "Change the outer HTML content of the selected element.",
    textContent: "Change the text content of the selected element.",
    attribute: "Change an attribute of the selected element. Example: 'src: new_image.jpg'.",
    remove: "Remove the selected element from the DOM.",
    click: "Add a click event to the selected element. Example: 'alert('Clicked!');'.",
    before: "Insert HTML content before the selected element.",
    after: "Insert HTML content after the selected element.",
    prepend: "Insert HTML content at the beginning of the selected element.",
    append: "Insert HTML content at the end of the selected element."
};

function formatHTML() {
    let htmlCodeElement = document.getElementById('htmlCode');
    let formattedHTML = html_beautify(htmlCodeElement.value, {
        indent_size: 2,
        space_in_empty_paren: true
    });
    htmlCodeElement.value = formattedHTML;
}

function updateDescription() {
    let changeType = document.getElementById('changeType').value;
    let descriptionArea = document.getElementById('descriptionArea');
    descriptionArea.textContent = descriptions[changeType] || '';
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
                jsCode += `let element = document.querySelector('.${selector}');\n`;
                break;
            case 'data':
                jsCode += `let element = document.querySelector('[data-${selector}]');\n`;
                break;
            default:
                alert('Invalid selector type.');
                return;
        }
    }

    switch (changeType) {
        case 'style':
            jsCode += `element.style.cssText = '${changeValue}';`;
            break;
        case 'innerHTML':
            jsCode += `element.innerHTML = \`${changeValue}\`;`;
            break;
        case 'outerHTML':
            jsCode += `element.outerHTML = \`${changeValue}\`;`;
            break;
        case 'textContent':
            jsCode += `element.textContent = \`${changeValue}\`;`;
            break;
        case 'attribute':
            const [attr, value] = changeValue.split(':').map(str => str.trim());
            if (attr && value) {
                jsCode += `element.setAttribute('${attr}', '${value}');`;
            } else {
                alert('Please enter a valid attribute and value in the format "attribute: value".');
                return;
            }
            break;
        case 'remove':
            jsCode += `element.remove();`;
            break;
        case 'click':
            jsCode += `element.addEventListener('click', function() { ${changeValue} });`;
            break;
        case 'before':
            jsCode += `element.insertAdjacentHTML('beforebegin', \`${changeValue}\`);`;
            break;
        case 'after':
            jsCode += `element.insertAdjacentHTML('afterend', \`${changeValue}\`);`;
            break;
        case 'prepend':
            jsCode += `element.insertAdjacentHTML('afterbegin', \`${changeValue}\`);`;
            break;
        case 'append':
            jsCode += `element.insertAdjacentHTML('beforeend', \`${changeValue}\`);`;
            break;
        default:
            alert('Invalid change type.');
            return;
    }

    // Output the generated code
    document.getElementById('jsCode').textContent = jsCode;
}

function copyCode() {
    let jsCodeElement = document.getElementById('jsCode');
    let range = document.createRange();
    range.selectNode(jsCodeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Code copied to clipboard!');
}

function getSelectorString(type, value) {
    switch (type) {
        case 'id':
            return `#${value}`;
        case 'class':
            return `.${value}`;
        case 'data':
            return `[data-${value}]`;
        default:
            return '';
    }
}

// Add event listeners
document.getElementById('selector').addEventListener('input', countSelectorOccurrences);
document.getElementById('selectorType').addEventListener('change', countSelectorOccurrences);
document.getElementById('selectorList').addEventListener('change', countSelectorOccurrences);
