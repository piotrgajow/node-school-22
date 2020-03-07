export class Question extends HTMLElement {

    static observedAttributes = ["question", "option-a", "option-b"];

    constructor() {
        super();
        const template = document.getElementById("ns-question");
        const element = template.content.cloneNode(true);

        this.rootElement = element;
        this.questionElement = element.getElementById("question");
        this.optionAElement = element.getElementById("a");
        this.optionBElement = element.getElementById("b");
        this.appendChild(element);

        this.onOptionASelect = this.selectOption.bind(this, "a");
        this.onOptionBSelect = this.selectOption.bind(this, "b");
    }

    connectedCallback() {
        this.optionAElement.addEventListener("click", this.onOptionASelect);
        this.optionBElement.addEventListener("click", this.onOptionBSelect);
    }

    disconnectedCallback() {
        this.optionAElement.removeEventListener("click", this.onOptionASelect);
        this.optionBElement.removeEventListener("click", this.onOptionBSelect);
    }

    selectOption(option) {
        const event = new CustomEvent("option-select", {
            detail: option,
            bubbles: true,
            composed: true,
            cancelable: false,
        });
        this.dispatchEvent(event);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "question":
                this.questionElement.textContent = newValue;
                break;
            case "option-a":
                this.optionAElement.textContent = newValue;
                break;
            case "option-b":
                this.optionBElement.textContent = newValue;
                break;
        }
    }

}

customElements.define("ns-question", Question);
