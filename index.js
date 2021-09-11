import alfy from 'alfy';

const data = await alfy.fetch(
  `https://dict-mobile.iciba.com/interface/index.php?c=word&m=getsuggest&nums=9&is_need_mean=1&word=${encodeURI(
    alfy.input
  )}`
);

const items = [];

for (let element of data.message) {
  if (!element.means) continue;
  for (let mean of element.means) {
    const title = mean.part + mean.means.join('；');
    items.push({
      title: title,
      subtitle: element.key,
      arg: element.key,
    });
  }
}

alfy.output(items);
