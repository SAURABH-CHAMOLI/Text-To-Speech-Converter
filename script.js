let speech=new SpeechSynthesisUtterance();

let box=document.querySelector('.content');
let btn=document.querySelector('button');
let select=document.querySelector('select')
let voices=[];

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();

    voices.forEach((voice,i)=>{
        select.options[i]=new Option(voice.name,i)
    })
};

select.addEventListener("change",()=>{
    speech.voice=voices[select.value];
})

btn.addEventListener('click',()=>{
    let sentence=box.value;
    speech.text=sentence;

    window.speechSynthesis.speak(speech);
})