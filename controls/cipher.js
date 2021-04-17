import CryptoJS from "crypto-js"
import sha256 from 'crypto-js/sha256';


const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');   //十六位十六进制数作为密钥偏移量


function decrypt(encrypted, key, iv) {
  var decrypted = CryptoJS.AES.decrypt(encrypted, key,
    { iv: iv, mode: CryptoJS.mode.CBC });
  return decrypted.toString(CryptoJS.enc.Utf8).toString()
}

function encrypt(message, key, iv) {
  var encrypted = CryptoJS.AES.encrypt(message, key,
    { iv: iv, mode: CryptoJS.mode.CBC });
  console.log(message.length, encrypted.ciphertext.sigBytes)
  return encrypted
}

function hash(message) {
  return sha256(message)
}

function get_vi() {
  return CryptoJS.lib.WordArray.random(16)
}

export {
  key,
  iv,
  decrypt,
  encrypt,
  hash,
  get_vi
}
