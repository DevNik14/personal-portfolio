import domElements from "./domElements";

const contacts = (() => {
  domElements.copyEmailElement.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') {
      const emailText = copyEmailElement.parentNode.parentNode.querySelector('a').textContent;
      navigator.clipboard.writeText(emailText);

      const tooltipElement = document.createElement('span');
      tooltipElement.textContent = 'Copied';
      tooltipElement.classList.add('show-copied-message');
      document.querySelector('.email-info').appendChild(tooltipElement);

      const timeoutId = setTimeout(() => {
        tooltipElement.remove();
      }, 2000)
    }
  })
})

export default contacts;