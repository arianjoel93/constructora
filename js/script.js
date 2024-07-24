document.getElementById('phone-number').addEventListener('click', function() {
    // Get the text content of the phone number
    let phoneNumber = this.textContent;
    
    // Remove parentheses, spaces, and other non-digit characters
    phoneNumber = phoneNumber.replace(/\D/g, '');
    
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);

    // Select the text in the temporary input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Show the "copied" message
    const copiedMessage = document.getElementById('copied-message');
    copiedMessage.style.display = 'inline';
    setTimeout(() => {
      copiedMessage.style.display = 'none';
    }, 2000); // Hide the message after 2 seconds
  });

  