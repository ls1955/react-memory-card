// Shuffles, mutates and return given array.
const shuffle = (ary) => {
  for (let i = ary.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ary[i], ary[j]] = [ary[j], ary[i]];
  }

  return ary;
}

export default shuffle;
