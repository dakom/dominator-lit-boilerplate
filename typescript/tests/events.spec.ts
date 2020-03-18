if (typeof CustomEvent === "undefined") {
  (global as any)["CustomEvent"] = 
    class CustomEvent<T> {
        type:string;
        detail:T;

        constructor(name:string, props:{detail: T} ) {
            this.type = name;
            this.detail = props ? props.detail : null;
        }
    }
}

import {
    ChangeAmountEvent,
} from "@events/events";


const wasm = require("../../_static/wasm/app/pkg/my_app");

describe("check event types", () => {
    test("ChangeAmount", () => {
        //matches ChangeAmount::default() in rust events.rs
        const event = new ChangeAmountEvent({delta: 1});
        expect(wasm.check_rust_event_ChangeAmount(event)).toEqual(JSON.stringify(event.detail));
    });
});