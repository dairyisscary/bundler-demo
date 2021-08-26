import sanitizeHTML from "sanitize-html";

export function convertToNumber(input) {
  return Number(input.value.trim());
}

export function setOutputHtml(element, { numA, numB, result }) {
  const sanitizedContent = sanitizeHTML(numA);
  element.innerHTML = `
    <span class="font-semibold">${sanitizeHTML(numA)}</span>
    +
    <span class="font-semibold">${sanitizeHTML(numB)}</span>
    =
    <span class="font-semibold">${sanitizeHTML(result)}</span>
  `;
}
