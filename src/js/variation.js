// import { Configuration, OpenAIApi } from 'openai';
// import { createReadStream, writeFileSync } from 'fs';

// const config = new Configuration({
//     apiKey: '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',
// });

// const openai = new OpenAIApi(config);

// let prompt = 'sanda fight';

// const src = '../imgs/1668235969008.png'
// const result = await openai.createImageVariation(
//     createReadStream(`../imgs/${src}`),
//     1,
//     "1024x1024"
// );

// const url = result.data.data[0].url;
// console.log(url);

// // Save img to disk
// const imgResult = await fetch(url);
// const blob = await imgResult.blob();
// const buffer = Buffer.from(await blob.arrayBuffer());
// writeFileSync(`../imgs/${Date.now()}.png`, buffer);


