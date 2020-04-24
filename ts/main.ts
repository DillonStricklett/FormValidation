window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");    
}

/**
 * Returns true if the textbox with given
 * id has text inside it
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span
 * of the textbox
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value;
    if (textBoxValue == "") {
        let errSpan = <HTMLSpanElement>textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
