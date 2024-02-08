const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', (message) => {
	if (message.body === "!pedra" || "!papel" || "!tesoura") {
        let response = ["PEDRA", "PAPEL", "TESOURA"];
        response = response[Math.floor(Math.random * 3)];
        
		client.sendMessage(message.from, response);
	}
});

client.initialize();