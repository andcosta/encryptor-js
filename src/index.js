var crypto = require('crypto');

function Encryptor() {
  this.encrypt = function encrypt(message, secret) {
    if (message == null) {
      throw new Error('message must not be null or undefined');
    }

    var cipher = crypto.createCipher('aes256', secret);
    return cipher.update(String(message), 'utf8', 'hex') + cipher.final('hex');
  };

  this.decrypt = function decrypt(message, secret) {
    if (message == null) {
      throw new Error('message must not be null or undefined');
    }

    var decipher = crypto.createDecipher('aes256', secret);
    return decipher.update(String(message), 'hex', 'utf8') + decipher.final('utf8');
  };
}

module.exports = Encryptor;
