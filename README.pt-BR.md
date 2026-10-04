
**Idiomas:** [English](README.md) | [Português](README.pt-BR.md) | [Español](README.es-CL.md)

# Moksha

**Moksha** ("Libertação") é uma prova de conceito para criptografia pós-quântica em transações PIX e CLP, combinando ML-KEM-768 e ML-DSA-65 com versos sagrados dhármicos como camada de assinatura linguística.

> "ML-KEM criptografa, ML-DSA assina, versos provam."

## Arquitetura

O Moksha criptografa e assina dois payloads fictícios para PIX e CLP com um esquema híbrido pós-quântico tradicional construído com o PQC-SDK. O WideHoly fornece os versos religiosos dhármicos para cada payload.

A arquitetura é construída em três camadas:

## 1. Criptografia Híbrida — ML-KEM-768 + X25519 (X-Wing) + ML-DSA-65 (Dilithium)


- Os algoritmos **ML-KEM-768 (Kyber)** pós-quântico e o **X25519** clássico se combinam em um **esquema híbrido X-Wing**.

- **O algoritmo pós-quântico **ML-DSA-65 (Dilithium)** assina ambos os payloads. Cada payload tem seu próprio par de chaves e sua própria assinatura. A assinatura tem 3309 bytes e detecta qualquer adulteração.

## 2. Payloads Fictícios

### Payload PIX

- **O payload PIX**  segue a especificação do Banco Central do Brasil, o mesmo formato usado pelo pacote npm `pix-payload`. **Os números representam datas simbólicas**.

### Payload CLP

- **O payload CLP** segue a especificação da API da Fintoc para pagamentos em CLP, usando o objeto `recipient_account` definido no guia Fintoc Direct Payments.

## Linguithium — Camada de Assinatura Linguística (Experimental)

- **Linguithium**  é a combinação do **Dilithium (ML-DSA-65)**  com uma assinatura linguística (verso sagrado).

- **O verso sagrado**  serve como prova linguística da unicidade da transação. Cada payload é associado a um verso único, obtido da API WideHoly.

- **O verso **não é cifrado** . É uma camada cultural e linguística que complementa a prova matemática (assinatura ML-DSA-65).

- **Juntos, formam um **sistema de dupla prova** que valida a transação apenas se ambas as provas estiverem presentes e inalteradas.

- **Os versos **são gerados aleatoriamente**  a partir de duas tradições dhármicas: o **Bhagavad Gita** (Hinduísmo) para o payload PIX, e o **Tripitaka + sutras Mahayana** (Budismo) para o payload CLP.

- **Tradução**: Os versos placeholders são traduzidos para idiomas locais usando o open-google-translator.

- **Produção**: O uso em produção exige traduções curadas de termos em sânscrito e páli, provenientes de fontes publicadas, para garantir precisão e auditabilidade.

## Dependências

- @pqc-sdk/core — ML-KEM-768 + ML-DSA-65
- wideholy — Versos sagrados
- open-google-translator — Tradução dos versos placeholders para idiomas locais (Português/Espanhol)

## Instalação

### 1. Pré-requisitos

Certifique-se de ter instalado:

- Node.js 20+ (versão LTS recomendada)

- npm (vem com o Node.js)

- Git (Git Bash)

### 2. Clonar o Repositório

```bash
git clone https://github.com/lonelyachemist-arch/Moksha.git
cd Moksha
```

### 3. Instalar Dependências

```bash
npm install
```

### 4. Executar a POC

O fluxo PIX roda em português (pt-BR) e o fluxo CLP roda em espanhol (es-ES/CL), garantindo acessibilidade para cada trilho de pagamento.

```bash
## Executando o fluxo PIX

node moksha-criptografar-pix.js
node moksha-descriptografar-pix.js
node moksha-assinar-pix.js
node moksha-verso-gita-pix.js
node moksha-verso-gita-traducao-pt.cjs
node moksha-verificar-pix.js
node moksha-teste-adulteracao-pix.js


## Executando o fluxo CLP

node moksha-cifrar-clp.js
node moksha-descifrar-clp.js
node moksha-firmar-clp.js
node moksha-verso-sutra-clp.js
node moksha-verso-sutra-traduccion-es.cjs
node moksha-verificar-clp.js
node moksha-prueba-adulteracion-clp.js
```
