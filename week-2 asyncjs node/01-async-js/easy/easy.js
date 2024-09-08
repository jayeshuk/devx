// let count = 0;
// (
//     function(){
//         setInterval(function(){
//             count++;
//             console.log(count);
//         },1000,[count])
//     }
// )()

let count = 0;

updateCounter = () => {
    count++;
    console.log(count);

    setTimeout(updateCounter, 1000);
}

updateCounter();

