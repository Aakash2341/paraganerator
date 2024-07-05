const input = document.getElementById("number1");
const container = document.querySelector(".container");

const generateword = (n) => {
    let text =  "";
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0; i<n; i++){
        const random = (Math.random()*10).toFixed(0);
       text += letter[random]; 
    }
    return text;
};
console.log(generateword(667));


let numword;

const generatepara = () => {
    console.log(input.value)
    numword = Number(input.value);
    const para = document.createElement("p");
    let data ="";
    for(let i =0; i<numword; i++){
        const random = (Math.random()*13).toFixed(0);
        data+= generateword(random);
        data += " ";
    }



    para.innerText = data;
    para.setAttribute("class", "para");
    container.append(para);

};

const deletepara = () => {
    console.log(input.value);
    const para = document.querySelector("p");
    para.remove();
};