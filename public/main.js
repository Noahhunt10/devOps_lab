// const Rollbar = require('rollbar')
// const rollbar = new Rollbar({
//   accessToken: '311f1a54f5484766b1694f8301ae4b24',
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// })


const errorBtn = document.getElementById('error')


function sendErrorMessage(evt){
    alert('sheesh')
    // rollbar.error('This is an error')
}








errorBtn.addEventListener('click', sendErrorMessage)