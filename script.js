// Select the button and the paragraph elements
const changeTextButton = document.getElementById('changeTextButton');
const dynamicText = document.getElementById('dynamicText');

// Add an event listener to the button
changeTextButton.addEventListener('click', () => {
    // Change the text content of the paragraph
    dynamicText.textContent = 'The text has been changed dynamically!';

    // Modify the CSS style of the paragraph
    dynamicText.style.color = 'blue';
    dynamicText.style.fontWeight = 'bold';

    // Add a new element dynamically
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added dynamically!';
    newElement.style.color = 'green';
    newElement.style.marginTop = '10px';
    document.body.appendChild(newElement);
});

// Add functionality for the "Contact" section
const contactSection = document.createElement('section');
contactSection.id = 'contact';
contactSection.innerHTML = `
    <h2>Contact Us</h2>
    <p>For more information, email us at <a href="mailto:info@ireneiroha.com">info@ireneiroha.com</a>.</p>
`;
document.querySelector('main').appendChild(contactSection);