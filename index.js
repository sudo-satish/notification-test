

function displayNotification() {
    console.log('1');
    if(Notification.permission === 'granted') {

    console.log('2');
      navigator.serviceWorker.getRegistration().then(function(reg) {
        console.log('3');
        debugger;
        reg.showNotification('Hello World!');
        console.log('4');
      })
    }
}

Notification.requestPermission(function(status) {
  console.log(status);
})