const header = document.querySelector('#header');
const FolderConntainer = document.querySelector('#FolderConntainer');
const backArrow = document.querySelector('#backArrow');
const downladBTN = document.querySelector('#downladBTN');

var foldPrefab="", imgPrefab="";
fetch('./prefab/fold_prefab.html')
  .then(response => response.text())
  .then((data) => {
    foldPrefab = data;
    loadFoldersIntoGallery();
})
fetch('./prefab/img_prefab.html')
  .then(response => response.text())
  .then((data) => {
    imgPrefab = data;
}) 


function loadDataIntoGallery(folder)
{
    if (folder==0) {loadFoldersIntoGallery();}
    header.innerHTML =  imgData[folder]["name"];
    backArrow.style.display = "block";
    downladBTN.style.display = "block";
    downladBTN.setAttribute("href", "./zip/"+imgData[folder]["name"]+".zip");
    FolderConntainer.innerHTML = "";
    imgData[folder]["imgs"].forEach(img=>{
        FolderConntainer.innerHTML += imgPrefab.replace(/NAME/g, "./data/" +  imgData[folder]["name"] + "/" +  img);
    });
}


function loadFoldersIntoGallery()
{
    header.innerHTML = "Gallerieauswahl";
    FolderConntainer.innerHTML = "";
    backArrow.style.display = "none";
    downladBTN.style.display = "none";
    var i = 0;
    imgData.forEach(folder=>{
        FolderConntainer.innerHTML += foldPrefab.replace(/NAME/g, folder.name).replace(/ID/g, i);
        i++;
    })
}


