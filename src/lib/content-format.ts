export function lines(value: string) { return value.split('\n').map((item) => item.trim()).filter(Boolean); }

export function pairs(value: string) {
  return lines(value).map((line) => {
    const [title, ...description] = line.split('|');
    return [title.trim(), description.join('|').trim()] as const;
  }).filter(([title]) => title);
}

export function paragraphs(value: string) { return value.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean); }
