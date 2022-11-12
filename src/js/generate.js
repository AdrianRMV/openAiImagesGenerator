import { Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from 'fs';

const config = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(config);

let prompt = 'Monkey d. Luffy';
const result = await openai.createImage({
    prompt,
    n: 1,
    size: '1024x1024',
    user: 'elonmusk69420',
});

const url = result.data.data[0].url;
console.log(url);

// Save img to disk
const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync(`../imgs/${Date.now()}.png`, buffer);

// const content = document.querySelector('.imageToSearch').value;

// const button = document.querySelector('.btn-action').addEventListener('click', () =>{
//     prompt = content;
// });
