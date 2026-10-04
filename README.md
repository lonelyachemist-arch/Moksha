**Idiomas:** [English](README.md) | [Português](README.pt-BR.md) | [Español](README.es-CL.md)
# Moksha
**Moksha** ("Liberation") is a proof-of-concept for post-quantum cryptography in PIX and CLP transactions, combining ML-KEM-768 and ML-DSA-65 with sacred dharmic verses as a linguistic signature layer. 

> "ML-KEM encrypts, ML-DSA signs, verses prove."

## Architecture 
Moksha encrypts and signs two dummy payloads for PIX and CLP with a post-quantum traditional hybrid scheme built with PQC-SDK. WideHoly provides the dharmic religious verses for each payload. 

The architecture is built on three layers:

## 1.  Post-Quantum Traditional — ML-KEM-768 + X25519 (X-Wing) + ML-DSA-65 (Dilithium)

- **The post-quantum ML-KEM-768 (Kyber) and the classical X25519 algorithms combine into an X-Wing hybrid scheme**.

- **The ML-DSA-65 (Dilithium) algorithm signs both payloads. Each payload has its own key pair and its own signature. The signature is 3309 bytes and detects any tampering**.

 ## 2. Dummy Payloads 
 
### PIX Payload

- **The PIX payload follows the Brazilian Central Bank specification, 
the same format used by the `pix-payload` npm package. The placeholder numbers featured are symbolic dates**.

### CLP Payload

- **The CLP payload follows the Fintoc (Fintech) API specification for CLP 
payments, using the recipient_account object defined by 
the Fintoc Direct Payments guide**.

## Linguithium - Linguistic Signature Layer (Experimental)   

- **Linguithium is the combination of Dilithium (ML-DSA-65) with a 
linguistic signature (sacred verse)**.

- **The sacred verse serves as a linguistic proof of the transaction's 
uniqueness. Each payload is associated with a unique verse, 
retrieved from the WideHoly API**.

- **The verse is not encrypted. It is a cultural and linguistic layer 
that complements the mathematical proof (ML-DSA-65 signature)**.

- **Together, they form a dual-proof system that validates the transaction only if both proofs are present and unaltered**.

  - **The verses are drawn from two dharmic traditions: the Bhagavad Gita 
(Hinduism) for the PIX payload, and the Tripitaka + Mahayana sutras 
(Buddhism) for the CLP payload**.

- **Verses are translated to local languages using open-google-translator**.

- **Production use requires curated translations of
Sanskrit and Pali terms from published sources to ensure accuracy and
auditability**.


## Dependencies

- @pqc-sdk/core — ML-KEM-768 + ML-DSA-65
- wideholy — Sacred verses
- open-google-translator — Verse translation to local languages (PT/ES) 


## Installation

### 1. Prerequisites
Make sure you have installed:

- Node.js 20+ (LTS version recommended) 

- npm (comes with Node.js)

- Git (Git Bash)

### 2. Clone the Repository

```bash
git clone https://github.com/lonelyachemist-arch/Moksha.git
cd Moksha
```

### 3. Install Dependencies

```bash
npm install
```

 ### 4. Run the POC

The PIX flow runs in Portuguese (pt-BR) and the CLP flow runs in Spanish
(es-ES/CL), ensuring accessibility for each payment rail.


```bash
## Run the PIX flow

node moksha-criptografar-pix.js
node moksha-descriptografar-pix.js
node moksha-assinar-pix.js
node moksha-verso-gita-pix.js
node moksha-verso-gita-traducao-pt.cjs
node moksha-verificar-pix.js
node moksha-teste-adulteracao-pix.js


## Run the CLP flow

node moksha-cifrar-clp.js
node moksha-descifrar-clp.js
node moksha-firmar-clp.js
node moksha-verso-sutra-clp.js 
node moksha-verso-sutra-traduccion-es.cjs
node moksha-verificar-clp.js
node moksha-prueba-adulteracion-clp.js
```
