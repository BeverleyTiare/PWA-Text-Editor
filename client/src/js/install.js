const butInstall = document.getElementById('buttonInstall');

console.log("butInstall = ", butInstall)
// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event: added
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('all fine', 'beforeinstallprompt', event)  
});

// TODO: Implement a click event handler on the `butInstall` element: added 
butInstall.addEventListener('click', async () => {
    console.log("install handle")
   const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('all fine', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event: added
window.addEventListener('appinstalled', (event) => {
    console.log('all fine', 'appinstalled', event);
});
