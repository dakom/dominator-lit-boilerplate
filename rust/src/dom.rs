use futures_signals::signal::{Mutable, Signal, SignalExt};
use dominator::{Dom, html, clone};
use std::rc::Rc;
use crate::events::*;

pub struct Main {
    pub amount: Mutable<i32>
}

impl Main {
    pub fn new() -> Self {
        Self {
            amount: Mutable::new(0)
        }
    }

    pub fn render(app: Rc<Self>) -> Dom {
        html!("main-app", {
            .attribute_signal("amount", app.amount_signal())
            .event(clone!(app => move |event:ChangeAmountEvent| {
                let current = app.amount.get();
                app.amount.set(current + event.data().delta);
            }))
        })
    }

    fn amount_signal(&self) -> impl Signal<Item = String> {
        self.amount.signal().map(|amt| format!("{}", amt))
    }
}