import React from 'react';

// HTML karakterlerini dönüştürme fonksiyonu
const escapeHtml = (unsafe: string) => unsafe
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

// JavaScript anahtar kelimeleri
const jsKeywords = ['const', 'return', 'let', 'if', 'else', 'function', 'class', 'export', 'import', 'from'];

// HTML taglerini renklendir
const highlightHtmlAttributes = (attributes: string) => attributes.replace(
  /(\b(?:className|style|id)\b)(=)(['"`]?)(\{?)(.*?)(\}?)(['"`]?)/g,
  (_, attrName, equalSign, quoteStart, braceStart, value, braceEnd, quoteEnd) => {
    const highlightedValue = value.replace(/(\{|\})/g, match => `<span class="text-red-400">${match}</span>`);
    return `<span class="text-green-400 font-bold">${attrName}</span>`
      + `<span class="text-blue-400">${equalSign}</span>`
      + `<span class="text-white">${quoteStart}</span>${braceStart ? '<span class="text-red-400">{</span>' : ''
      }<span class="text-purple-400">${highlightedValue}</span>${braceEnd ? '<span class="text-red-400">}</span>' : ''
      }<span class="text-white">${quoteEnd}</span>`;
  },
);

// HTML taglerini renklendir
const highlightHtmlTags = (code: string) => code.replace(
  /(&lt;\/?)([a-z]+)(.*?)(&gt;)/g, // Küçük harfli tagleri yakala
  (_, openingTag, tagName, attributes, closingTag) => `${openingTag}<span class="text-blue-400 font-bold">${tagName}</span>${highlightHtmlAttributes(attributes)}${closingTag}`,
);

// JSX taglerini renklendir
const highlightJsxTags = (code: string) => code.replace(
  /(&lt;\/?)([A-Z][a-zA-Z]*)(.*?)(&gt;)/g, // Büyük harfli tagleri ve JSX componentlerini yakala
  (_, openingTag, tagName, attributes, closingTag) => `${openingTag}<span class="text-red-400 font-bold">${tagName}</span>${highlightHtmlAttributes(attributes)}${closingTag}`,
);

// JavaScript anahtar kelimelerini renklendir
const highlightJsKeywords = (code: string) => {
  jsKeywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b(?![^<]*>)`, 'g'); // Sadece HTML etiketleri içinde olmayan kelimeleri yakala
    code = code.replace(
      regex,
      `<span class="text-yellow-400 font-bold">${keyword}</span>`,
    );
  });
  return code;
};

// Kod bloğunu renklendir
const highlightCode = (code: string) => {
  try {
    let highlightedCode = escapeHtml(code);
    highlightedCode = highlightJsxTags(highlightedCode); // JSX taglerini önce renklendir
    highlightedCode = highlightHtmlTags(highlightedCode); // HTML taglerini renklendir
    highlightedCode = highlightJsKeywords(highlightedCode); // JavaScript anahtar kelimelerini renklendir
    return highlightedCode;
  } catch (error) {
    console.error('Kod renklendirme sırasında bir hata oluştu:', error);
    return code;
  }
};

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const highlightedCode = highlightCode(code);

  return (
    <pre className="rounded-lg bg-gray-900 p-4 text-white overflow-x-auto">
      <code
        className="whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
};

export default CodeBlock;
