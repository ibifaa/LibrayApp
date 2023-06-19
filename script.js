

// function Book(title, author, pages, read){
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     }

    // const  addbtn = document.getElementsByClassName('addbtn')
    //  addbtn.addEventListener(){
      
    //  }

   function addBook(){
     let titleTxt = document.getElementById('title-txt').value;
     localStorage.setItem('titleValue', titleTxt);

     let authorTxt = document.getElementById('author-txt').value;
     localStorage.setItem('authorValue', authorTxt);

     let pagesTxt = document.getElementById('pages-txt').value;
     localStorage.setItem('pagesValue', pagesTxt);

     let readInfo = document.getElementById('read-txt').value;
     localStorage.setItem('readValue', readInfo);
     return false;
 
}

//     btn.addEventListener("click", ()=>{
//       addBookToLibrary();
//     })
// function addBookToLibrary(){
//      let myBookDetails ={title:myTitle, author:myAuthor, pages:myPages, read:readInfo}
//      myLibrary.push(myBookDetails)
//    }

//    function handleSubmit(){

//    }

//   function handleChange(e){
//     const {name, value} = e.target;
//   }





  //  function displayBooks(){
  //   for(let i=0; i<myLibrary.length; i++){
  //     return myLibrary[i]
        
  //   }
   