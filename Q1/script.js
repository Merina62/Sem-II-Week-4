document.getElementById('fruit-status')
function getFruit(fruit_name){
    return new Promise((resolve, reject)=>{
        if(fruit_name!="watermelon"){
            setTimeout(()=>{
                resolve(`Here is your ${fruit_name}`);
            },1000)
        }
        else if(fruit_name=="watermelon"){
            setTimeout(()=> {
                reject(`Sorry, we are out of watermelons`);
            },2000)
        }
    })
}
const fruit_name=prompt("Enter a fruit you want to order: ");
getFruit(fruit_name)
.then(value=>{document.getElementById('fruit-status').innerHTML=value})
.catch(value1=> {document.getElementById('fruit-status').innerHTML=value1})
 
