const butInstall = document.getElementById('buttonInstall');


window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.remove('hidden');
});

butInstall.addEventListener('click', async () => {

const promptEvent = window.deferredPrompt;

if (!promptEvent) {
 return;
}

// Show prompt
promptEvent.prompt();

// Reset the deferred prompt variable, it can only be used once.
window.deferredPrompt = null;
butInstall.classList.add('hidden');
});

window.addEventListener('appinstalled', (event) => {
// Clear prompt
window.deferredPrompt = null;
// hide the install button if sw is installed
butInstall.classList.add('hidden');
}); 