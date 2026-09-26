import { pqc } from '@pqc-sdk/core';

async function testPQC() {
    console.log('Generating keys...');
    const pair = await pqc.keys.generate();

    const originalMessage = `{"counterparty": {
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

    console.log('Original message:', originalMessage);

    console.log('Encrypting...');
    const ciphertext = await pqc.encrypt(originalMessage, pair.publicKey);

    console.log('Decrypting...');
    const plaintext = await pqc.decrypt(ciphertext, pair.secretKey);

    const decryptedMessage = new TextDecoder().decode(plaintext);
    console.log('Decrypted message:', decryptedMessage);
    console.log('Integrity:', originalMessage === decryptedMessage ? 'OK' : 'FAIL');
}

testPQC();