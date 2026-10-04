import { pqc } from '@pqc-sdk/core';

console.log('1. SDK imported');

const b64url = (data) => Buffer.from(data).toString('base64url');

console.log('2. b64url helper defined');

const signer = await pqc.keys.generate({ algorithm: 'ml-dsa-65' });

console.log('3. Key pair generated');

const payloadPIX = JSON.stringify({
  key: "08072026050",
  name: "Mario Henrique",
  city: "Sao Paulo",
  amount: 150.00,
  transactionId: "PEDIDO09111989"
});

console.log('4. Payload built');

const header = { alg: 'ML-DSA-65', typ: 'JWT' };
const body = { pix: payloadPIX };

console.log('5. Header and body built');

const signingInput = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(body))}`;

console.log('6. Signing input built');

const signature = await pqc.sign(signingInput, signer.secretKey);

console.log('7. Signed successfully');

console.log('\n=== PAYLOAD PIX ===');
console.log(payloadPIX);

console.log('\n=== SIGNATURE (base64url) ===');
console.log(b64url(signature));

console.log('\n=== SIGNATURE LENGTH ===');
console.log('Bytes:', signature.length);
