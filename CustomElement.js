class StyleButton extends HTMLButtonElement{
    constructor(){
        super()
        this.style.backgroundColor = "green";
        this.style.borderRadius = "3px";
        this.style.fontSize="23px";
    this.onclick = (ev)=>{alert("Hi")}

    }
}
customElements.define("style-button",StyleButton,{extends:'button'});

class colorPara extends HTMLParagraphElement{
    constructor(){
        super()
        this.style.color = "blue";
        this.style.backgroundColor = "yellow";
        this.style.fontSize = "40px";
        this.onmouseenter = (e) =>{
            this.style.backgroundColor = "green";
        }
        this.onmouseout = (e) =>{
            this.style.backgroundColor = "yellow";
        }
    
    }
}
customElements.define("color-p",colorPara,{extends:"p"})

class PopMessage extends HTMLButtonElement{
    constructor(){
        super()
            this.onclick = (e) =>{
            var inputId=this.dataset.input
            var inputText = document.getElementById(inputId).value
            alert(inputText)
        }
    }
}
customElements.define("pop-msg",PopMessage,{extends:'button'})
