const fs = require('fs');
const https = require('https');

const screens = [
  { name: 'beranda', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzBjZmY0MGE0MmFhYjQwNGZiNzA1NGE4ODgwNGZkMWUzEgsSBxCjy_CbtwcYAZIBIwoKcHJvamVjdF9pZBIVQhM5NzM2NDIzNDM3MTk4NDk5NjMx&filename=&opi=89354086' },
  { name: 'profil', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1M2EwMTIyZjY2MzcwNTAzYzJlNTM4MzE2ZWEyEgsSBxCjy_CbtwcYAZIBIwoKcHJvamVjdF9pZBIVQhM5NzM2NDIzNDM3MTk4NDk5NjMx&filename=&opi=89354086' },
  { name: 'artikel', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2MwNjVkMDEyOTY0ZDQ5MmRiZDFjMTkwNWI1YTkzMzgzEgsSBxCjy_CbtwcYAZIBIwoKcHJvamVjdF9pZBIVQhM5NzM2NDIzNDM3MTk4NDk5NjMx&filename=&opi=89354086' },
  { name: 'smp', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzcxNTQwMzE0ZGUyMzQyODE4MGY1NzNlZjZhMDFhNDNmEgsSBxCjy_CbtwcYAZIBIwoKcHJvamVjdF9pZBIVQhM5NzM2NDIzNDM3MTk4NDk5NjMx&filename=&opi=89354086' },
  { name: 'sma', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MzlmZDI4MzY1OGIwNTAzYzE4OGZlMzY4YjcwEgsSBxCjy_CbtwcYAZIBIwoKcHJvamVjdF9pZBIVQhM5NzM2NDIzNDM3MTk4NDk5NjMx&filename=&opi=89354086' },
  { name: 'spmb', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MzgyNWZiYWI2OWIwOTI1YzJmYTBiMjIxMzYyEgsSBxCjy_CbtwcYAZIBIwoKcHJvamVjdF9pZBIVQhM5NzM2NDIzNDM3MTk4NDk5NjMx&filename=&opi=89354086' },
  { name: 'hubungi', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzIyM2U1NjRmNWZiOTQ1NTVhOTcxZGVhODE2ZjI0OTI1EgsSBxCjy_CbtwcYAZIBIwoKcHJvamVjdF9pZBIVQhM5NzM2NDIzNDM3MTk4NDk5NjMx&filename=&opi=89354086' }
];

screens.forEach(screen => {
  https.get(screen.url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      fs.writeFileSync(`${screen.name}.html`, data);
      console.log(`Saved ${screen.name}.html`);
    });
  }).on('error', (err) => {
    console.error(`Error fetching ${screen.name}:`, err.message);
  });
});
