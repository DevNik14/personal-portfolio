export const clearActiveElements = (elements) => [...elements].forEach(link => link.classList.remove('active'));

export const getParentSectionId = (childElement) => {
  if (childElement.tagName === 'ARTICLE') {
    return childElement.parentNode.parentNode.id;
  }
}