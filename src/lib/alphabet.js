import shuffle from '../lib/shuffle';

export default function genAlphabet(num) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  shuffle(alphabet);
  const deleteCount = alphabet.length - num;
  alphabet.splice(0, deleteCount);

  return alphabet;
}
