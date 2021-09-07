// import forge from 'node-forge';
var forge = require('node-forge')

const rsa = forge.pki.rsa;

let generatedKeypair = null

rsa.generateKeyPair({ bits: 2048, workers: 2 }, function (err, keypair) {
  // keypair.privateKey, keypair.publicKey
  generatedKeypair = keypair
  
  const PEM_privateKey = forge.pki.privateKeyToPem(generatedKeypair.privateKey)
  const PEM_publicKey = forge.pki.publicKeyToPem(generatedKeypair.publicKey)
  
  console.log(PEM_privateKey)
  console.log(PEM_publicKey)
});


