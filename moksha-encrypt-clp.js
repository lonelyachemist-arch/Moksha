import { pqc } from '@pqc-sdk/core';

async function encryptOnly() {
    const message = `{"counterparty": {
    "holder_id": "21459179-0",
    "holder_name": "Felipe Molina",
    "account_number": "10081987",
     "type": "sight_account",
    "institution_id": "cl_banco_santander"
  },
  "amount": 50000,
  "currency": "CLP"
}
 
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