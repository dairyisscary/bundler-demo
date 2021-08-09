import sanitizeHTML from "sanitize-html";

export function convertToNumber(input) {
  return Number(input.value.trim());
}

export function setOutputHtml(element, content) {
  const sanitizedContent = sanitizeHTML(content);
  element.innerHTML = `The result is <strong>${sanitizedContent}</strong>.`;
}
