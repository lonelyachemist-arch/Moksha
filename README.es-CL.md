**Idiomas:** [English](README.md) | [Português](README.pt-BR.md) | [Español](README.es-CL.md)

# Moksha

**Moksha** ("Liberación") es una prueba de concepto para criptografía post-cuántica en transacciones PIX y CLP, combinando ML-KEM-768 y ML-DSA-65 con versos sagrados dhármicos como capa de firma lingüística.

> "ML-KEM cifra, ML-DSA firma, los versos prueban."

## Arquitectura

Moksha cifra y firma dos payloads ficticios para PIX y CLP con un esquema híbrido post-cuántico tradicional construido con PQC-SDK. WideHoly proporciona los versos religiosos dhármicos para cada payload.

La arquitectura se construye en tres capas:

## 1. Criptografía Híbrida — ML-KEM-768 + X25519 (X-Wing) + ML-DSA-65 (Dilithium)

- Los algoritmos **ML-KEM-768 (Kyber)** post-cuántico y el **X25519** clásico se combinan en un **esquema híbrido X-Wing**.

- El algoritmo **ML-DSA-65 (Dilithium)**  firma ambos payloads. Cada payload tiene su propio par de claves y su propia firma. La firma tiene **3309 bytes** y detecta cualquier manipulación.

## 2. Payloads Ficticios

### Payload PIX

- El **payload PIX** sigue la especificación del Banco Central de Brasil, el mismo formato utilizado por el paquete npm `pix-payload`. Los números representan fechas simbólicas.

### Payload CLP

- El **payload CLP** sigue la especificación de la API de Fintoc para pagos en CLP, utilizando el objeto `recipient_account` definido en la guía Fintoc Direct Payments.

## Linguithium — Capa de Firma Lingüística (Experimental)

- **Linguithium** es la combinación de Dilithium (ML-DSA-65) con una firma lingüística (verso sagrado).

- El **verso sagrado** sirve como prueba lingüística de la unicidad de la transacción. Cada payload se asocia con un verso único, obtenido de la API WideHoly.

- El verso **no está cifrado**. Es una capa cultural y lingüística que complementa la prueba matemática (firma ML-DSA-65).

- Juntos, forman un **sistema de doble prueba** que valida la transacción solo si ambas pruebas están presentes e inalteradas.

- Los versos se **generan aleatoriamente** a partir de dos tradiciones dhármicas: el **Bhagavad Gita** (Hinduismo) para el payload PIX, y el **Tripitaka + sutras Mahayana** (Budismo) para el payload CLP.

- **Traducción**: Los versos placeholders se traducen a idiomas locales usando open-google-translator.

- **Producción**: El uso en producción requiere traducciones curadas de términos en sánscrito y pali, provenientes de fuentes publicadas, para garantizar precisión y auditabilidad.

## Dependencias

- @pqc-sdk/core — ML-KEM-768 + ML-DSA-65
- wideholy — Versos sagrados
- open-google-translator — Traducción de versos a idiomas locales (Portugués/Español)

## Instalación

### 1. Requisitos previos

Asegúrate de tener instalado:

- Node.js 20+ (versión LTS recomendada)

- npm (viene con Node.js)

- Git (Git Bash)

### 2. Clonar el Repositorio

```bash
git clone https://github.com/lonelyachemist-arch/Moksha.git
cd Moksha
```

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Ejecutar la POC

El flujo PIX se ejecuta en portugués (pt-BR) y el flujo CLP se ejecuta en español (es-CL), garantizando accesibilidad para cada riel de pago.


```bash
## Ejecutando el flujo PIX

node moksha-criptografar-pix.js
node moksha-descriptografar-pix.js
node moksha-assinar-pix.js
node moksha-verso-gita-pix.js
node moksha-verso-gita-traducao-pt.cjs
node moksha-verificar-pix.js
node moksha-teste-adulteracao-pix.js


## Ejecutando el flujo CLP

node moksha-cifrar-clp.js
node moksha-descifrar-clp.js
node moksha-firmar-clp.js
node moksha-verso-sutra-clp.js
node moksha-verso-sutra-traduccion-es.cjs
node moksha-verificar-clp.js
node moksha-prueba-adulteracion-clp.js
```







