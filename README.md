## Install

Install the package NPM:

```bash
$ npm i encryptor-js --save
```

or install the package YARN:

```bash
yarn add encryptor-js
```

## Usage

```javascript
var Encryptor = require('encryptor-js');

var encryptedMessage = new Encryptor().encrypt('message', 'secret');
var decryptedMessage = new Encryptor().decrypt(encryptedMessage, 'secret');

console.log(encryptedMessage); // 8cfa1d25147d06730fb91f162fecf8d0
console.log(decryptedMessage); // secret
```

## Author

[Anderson Costa](http://linkedin.com/in/andcosta)

## License

MIT
