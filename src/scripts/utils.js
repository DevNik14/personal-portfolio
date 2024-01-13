const clearActiveElements = (elements) => [...elements].forEach(link => link.classList.remove('active'));

export default clearActiveElements;