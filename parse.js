const fs = require('fs');

fs.readFile('twitterAccs.txt', 'utf8', (err, text) => {
  if (err) {
    console.error("Ошибка чтения файла:", err);
    return;
  }

  const authTokens = text.match(/auth_token:\s*([a-f0-9]+)/g)
	.map(token => token.replace('auth_token:', '').trim());

	fs.writeFileSync('tokens.txt', authTokens.join('\n'));
})