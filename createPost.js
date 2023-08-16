import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current module's directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdDirectory = path.join(__dirname, './src/content/posts');

const existingFiles = fs
  .readdirSync(mdDirectory)
  .filter((file) => file.endsWith('.md'));
const lastFile = existingFiles[existingFiles.length - 1];
const lastNumber = parseInt(lastFile.match(/post-(\d+)\.md/)[1]);

const newNumber = lastNumber + 1;
const newFileName = `post-${newNumber}.md`;
const creationDate = getCurrentDate();

const newFilePath = path.join(mdDirectory, newFileName);
fs.writeFileSync(
  newFilePath,
  `---
title: Post-${newNumber}
author: Himanshu
description: Find out what makes Astro awesome!
createdAt: ${creationDate}
imagePath: ../images/post-1/rocket.png
---

This is a post written in Markdown.`
);

console.log(`File ${newFileName} created.`);

function getCurrentDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 since months are zero-based
  const day = String(currentDate.getDate()).padStart(2, '0');

  const creationDate = `${year}-${month}-${day}`;
  return creationDate;
}
