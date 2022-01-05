const cardData = 

fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json')
.then ((response)=> response.json())
.then((data)=>{
    for(let i = 1; i < data.length; i++){
        newCard(data[i]);
    }
})
.catch((e)=>{
    console.log(e);
})



const searchValue = () => {
    let input = document.getElementById('inputFeild');
    let filter = input.value.toUpperCase();

    let div = document.getElementById('_cards');
    title = div.getElementsByClassName('game_title');
   
    let text ;
    for(let i = 0; i <= title.length; i++){
        text = title.item(i).textContent.toUpperCase();
        if(text.indexOf(filter) > -1){
            title.item(i).parentNode.style.display = "";
        }else{
            title.item(i).parentNode.style.display = "none";
        }
    }
} 

const onSubmit = () => {
    console.log("submitted");
}







// create new cards with details
const newCard = (data) => {
    let div = document.getElementById('_cards');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
        <ul id="features" class="list-group list-group-flush" style = "list-style: none">
            <li id="${data.title}" class="card-body game_title" style = "font-size: 1.2em; font-weight: 450;">${data.title}</li>
            <li id="${data.platform}" class="list-group-item platform">Platform :  ${data.platform}</li>
            <li id="${data.score}" class="list-group-item score">Score : ${data.score}</li>
            <li id="${data.genre}" class="list-group-item genre">Genre : ${data.genre}</li>
            <li id="${data.editors_choice}" class="list-group-item editors_choice ">Editor's Choice : ${data.editors_choice}</li>
        </ul>
    </div>`
    div.appendChild(newDiv);
    newDiv.classList.add("_card");
}