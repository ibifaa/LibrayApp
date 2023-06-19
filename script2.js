let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let readInfo = document.getElementById('read');

title.innerHTML = localStorage.getItem('titleValue');
author.innerHTML = localStorage.getItem('authorValue');
pages.innerHTML = localStorage.getItem('pagesValue');
readInfo.innerHTML = localStorage.getItem('readValue');