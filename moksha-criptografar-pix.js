import { pqc } from '@pqc-sdk/core';

async function encryptOnly() {
    const message = `{
  "key": "08072026050",
  "name": "Mario Henrique",
  "city": "Sao Paulo",
  "amount": 150.00,
  "transactionId": "PEDIDO09111989"
}`;

    console.log('ORIGINAL MESSAGE:', message);
    console.log('\n[1] Generating keys...');
    const keyPair = await pqc.keys.generate();

    console.log('[2] Encrypting message...');
    const ciphertext = await pqc.encrypt(message, keyPair.publicKey);

    const publicKeyBase64 = pqc.keys.serialize(keyPair.publicKey);
    const privateKeyBase64 = pqc.keys.serialize(keyPair.secretKey);

    console.log('\n=== PUBLIC KEY (base64) ===');
    console.log(publicKeyBase64);

    console.log('\n=== PRIVATE KEY (base64) ===');
    console.log(privateKeyBase64);

    console.log('\n=== CIPHERTEXT (base64) ===');
    console.log(Buffer.from(ciphertext).toString('base64'));
}

encryptOnly();
