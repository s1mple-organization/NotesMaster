export const VALID_BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
export const VALID_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
export const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
export const NOTES = [
  'c',
  'df',
  'd',
  'ef',
  'e',
  'f',
  'gf',
  'g',
  'af',
  'a',
  'bf',
  'b',
];
export const NOTE_TO_KEY: {[noteName: string]: string} = {
  c: 'z',
  df: 's',
  d: 'x',
  ef: 'd',
  e: 'c',
  f: 'v',
  gf: 'g',
  g: 'b',
  af: 'h',
  a: 'n',
  bf: 'j',
  b: 'm',
};
export const KEY_TO_NOTE: {[keyName: string]: string} = {
  z: 'c',
  s: 'df',
  x: 'd',
  d: 'ef',
  c: 'e',
  v: 'f',
  g: 'gf',
  b: 'g',
  h: 'af',
  n: 'a',
  j: 'bf',
  m: 'b',
};
