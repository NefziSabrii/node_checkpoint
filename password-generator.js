const passwordGenerator = require('generate-password');

const password = passwordGenerator.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true
});

console.log(`Random Password: ${password}`);
