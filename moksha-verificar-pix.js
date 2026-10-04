import { pqc } from '@pqc-sdk/core';

console.log('1. SDK imported');

const b64url = (data) => Buffer.from(data).toString('base64url');

console.log('2. b64url helper defined');

const signer = await pqc.keys.generate({ algorithm: 'ml-dsa-65' });

console.log('3. Key pair generated');

const payloadCLP = `{
  "counterparty": {
    "holder_id": "21459179-0",
    "holder_name": "Felipe Molina",
    "account_number": "10081987",
    "type": "sight_account",
    "institution_id": "cl_banco_santander"
  },
  "amount": 50000,
  "currency": "CLP"
}`;

console.log('4. Payload built');

const header = { alg: 'ML-DSA-65', typ: 'JWT' };
const body = { clp: payloadCLP};

console.log('5. Header and body built');

const signingInput = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(body))}`;

console.log('6. Signing input built');

const signature = await pqc.sign(signingInput, signer.secretKey);

console.log('7. Signed successfully');

console.log('\n=== PAYLOAD CLP ===');
console.log(payloadCLP);

console.log('\n=== SIGNATURE (base64url) ===');
console.log(b64url(signature));

console.log('\n=== SIGNATURE LENGTH ===');
console.log('Bytes:', signature.length);

console.log('\n8. Starting verification');

const valid = await pqc.verify(signingInput, signature, signer.publicKey);

console.log('9. Verification done');
console.log('Signature valid?', valid);

