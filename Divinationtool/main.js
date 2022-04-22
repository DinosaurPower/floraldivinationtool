let form = document.getElementById('frm1');
let phrase = document.getElementById('flowerWord');
var text = document.getElementById('text');
var newDom = '';
var linebreak = '\n';
let flowerImage = ['flower1.png', 'flower3.png', 'flower4.png', 'flower5.png', 'flower6.png', 'flower7.png', 'flower8.png', 'flower9.png', 'flower10.png', 'flower11.png', 'flower12.png'];
let flowerNarrative1 = ['viburnum', 'bellflower', 'aster', 'poppy', 'St Johns - wort', 'sunflower', 'cornflower', 'mallow', 'camomile', 'periwinkle', 'iris'];
let flowerNarrative2 = ['hope', 'gratitude', 'purity', 'youth', 'protection', 'fidelity', 'modesty', 'safety', 'youth', 'invincibility', 'fight'];
let flowerNarrative3 = [' will come true if you believe in it. ', ' will come true, but you will have to be grateful. ', ' will come true. ', ' will come true very-very soon. ', ' will be difficult to achieve. Be careful! ', ' will come true, but it will take a while to happen. ', ' will come true at the moment you expect the least. ', ' will be difficult but rewarding to achieve. ', ' needs more time.', ' will be challenging, but you will manage to overcome.', ' will be difficult to achieve.'];
let adviseList = [' drink enough of water.', ' dont forget to rest enough.', ' contact someone you didnt message for a while.', ' keep believing.', ' breathe deeply.'];
const heading = document.getElementById('heading');










document.addEventListener('DOMContentLoaded', function () {

    
    let btn = document.querySelector('button');
    let form = document.getElementById('frm1');
    let headings = document.getElementsByTagName('h2');
    console.log(headings);

form.addEventListener("submit", (e) => {


        e.preventDefault();
        console.log("hehe");




    });


  

    btn.addEventListener('click', () => {


        
        let rando = Math.floor(Math.random() * flowerImage.length);
        let randomAdvise = Math.floor(Math.random() * adviseList.length);

        console.log(rando);
        //frm1.remove;

        var myImage = new Image(400, 400);
        myImage.src = flowerImage[rando];
        document.body.appendChild(myImage);
       


        const h2 = document.createElement("H2");
        const textNode = document.createTextNode("Your flower is " + flowerNarrative1[rando] + ". ");
        h2.appendChild(textNode);
        document.body.appendChild(h2);
        




       // let textNode1 = document.createTextNode();

       // document.body.appendChild(textNode1);
        const h11 = document.createElement("H2");
        let textNode2 = document.createTextNode("This flower symbolises " + flowerNarrative2[rando]+". ");
        h11.appendChild(textNode2);
        document.body.appendChild(h11);

        let i;
        let elem = [];
        for (i = 0; i < form.length; i++) {
            elem.push(document.createElement('h1'));
            elem[i].innerHTML = form.elements[i].value;
            let textNode3 = document.createTextNode("it means that your wish for ");
            const h111 = document.createElement("H1");
            h111.appendChild(textNode3);
            document.body.appendChild(h111);
            document.body.appendChild(elem[i]);
        }



        const wish = document.createElement("H1");
        let textNode4 = document.createTextNode(flowerNarrative3[rando]);
        wish.appendChild(textNode4);
        document.body.appendChild(wish);

        const advisse = document.createElement("H2");
        let textNode5 = document.createTextNode(" Your advice for today is " + adviseList[randomAdvise]);
        advisse.appendChild(textNode5);
        document.body.appendChild(advisse);



        

    });



   

    });

    


