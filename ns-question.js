export class Question extends HTMLElement {

    static get observedAttributes() {
        return ["question", "option-a", "option-b"];
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });

        const template = document.getElementById("ns-question");
        const element = template.content.cloneNode(true);

        this.rootElement = element;
        this.questionElement = element.getElementById("question");
        this.optionAElement = element.querySelector('slot[name="option-a"]');
        this.optionBElement = element.querySelector('slot[name="option-b"]');

        Array.from(element.querySelectorAll("slot"))
            .forEach((slot) => {
                slot.addEventListener("slotchange", (event) => {
                    console.log(1, event.currentTarget);
                    console.log(2, event.currentTarget.assignedNodes());
                });
            });

        shadowRoot.appendChild(element);

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
