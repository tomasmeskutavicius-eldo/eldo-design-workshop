function preserveCase(original: string, replacement: string) {
  if (original === original.toUpperCase()) {
    return replacement.toUpperCase();
  }

  if (original[0] === original[0]?.toUpperCase()) {
    return replacement[0]?.toUpperCase() + replacement.slice(1);
  }

  return replacement;
}

export function uwuify(text: string): string {
  if (!/[a-zA-Z]/.test(text)) {
    return text;
  }

  return text
    .replace(/[rl]/gi, (match) => preserveCase(match, "w"))
    .replace(/n([aeiouAEIOU])/g, (_, vowel) => `ny${vowel}`)
    .replace(/N([aeiouAEIOU])/g, (_, vowel) => `Ny${vowel}`)
    .replace(/th/gi, (match) => preserveCase(match, "d"))
    .replace(/\byou\b/gi, (match) => preserveCase(match, "u"))
    .replace(/\bthe\b/gi, (match) => preserveCase(match, "da"))
    .replace(/\bno\b/gi, (match) => preserveCase(match, "nyo"))
    .replace(/\bmy\b/gi, (match) => preserveCase(match, "myah"))
    .replace(/!+/g, " uwu!")
    .replace(/\?+/g, " OwO?");
}
