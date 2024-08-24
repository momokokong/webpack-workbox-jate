const butInstall = document.getElementById('buttonInstall');


window.addEventListener('beforeinstallprompt', (event) => {
  console.log("before");

  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.remove('hidden');
});

butInstall.addEventListener('click', async () => {
  console.log("click");

const promptEvent = window.deferredPrompt;

if (!promptEvent) {
 return;
}

// Show prompt
promptEvent.prompt();

// Reset the deferred prompt variable, it can only be used once.
window.deferredPrompt = null;
console.log("click2")
butInstall.classList.add('hidden');
});

window.addEventListener('appinstalled', (event) => {
// Clear prompt
window.deferredPrompt = null;
console.log("appinstalled");
}); 