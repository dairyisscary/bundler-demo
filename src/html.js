export function convertToNumber(input) {
  return Number(input.value.trim());
}

export function setOutputHtml(element, content) {
  // WARNING XSS DO NOT DO IN PRODUCTION
  element.innerHTML = `The result is <strong>${content}</strong>.`;
}
