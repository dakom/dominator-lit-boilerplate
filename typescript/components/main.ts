import {LitElement, customElement, property, css} from "lit-element";
import {nothing, html} from "lit-html";
import {repeat} from 'lit-html/directives/repeat';
import main_css from "@styles/main.css";
import {ChangeAmountEvent} from "@events/events";

@customElement("main-app")
export class Main extends LitElement {
    static styles = main_css;

    @property( { type : Number}  ) amount = 0;

    render() {

        const on_inc = (evt:any) => this.dispatchEvent(new ChangeAmountEvent({delta: 1}));
        const on_dec = (evt:any) => this.dispatchEvent(new ChangeAmountEvent({delta: -1}));

        return html`
            <section class="main">
                <section class="grid-vertical">
                    <div></div>
                    <section class="grid-horizontal">
                        <div></div>
                        <section class="content">
                            <button @click=${on_dec}>-</button>
                            <div class="amount">${this.amount}</div>
                            <button @click=${on_inc}>+</button>
                        </section>
                        <div></div>
                    </section>
                    <div></div>
                </section>
            </section>
        `;
    }
}