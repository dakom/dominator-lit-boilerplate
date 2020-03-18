#![cfg_attr(feature = "ts_test", allow(non_snake_case))]

use dominator_helpers::{make_event};
use dominator::traits::{StaticEvent};
use web_sys::EventTarget;
use wasm_bindgen::{JsValue, JsCast};
use serde::{Deserialize};
use cfg_if::cfg_if;
#[cfg(feature = "ts_test")]
use serde::{Serialize};


// ChangeAmount 
#[cfg_attr(feature = "ts_test", derive(Serialize))]
#[derive(Deserialize)]
pub struct ChangeAmount {
    pub delta: i32 
}
make_event!("change-amount", ChangeAmount);

//impl defaults for tests
cfg_if! {
    if #[cfg(feature = "ts_test")] {

        //matches the test in typescript events.spec.ts
        impl Default for ChangeAmount {
            fn default() -> Self {
                Self {
                    delta: 1 
                }
            }
        }
    }
}