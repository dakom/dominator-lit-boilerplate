[![Build Status](https://github.com/dakom/dominator-lit-boilerplate/workflows/Test%2C%20Build%2C%20and%20Deploy/badge.svg)](https://github.com/dakom/dominator-lit-boilerplate/actions)

## [LIVE DEMO](https://dakom.github.io/dominator-lit-boilerplate)

* [Rust] DOM is rendered via [Dominator](https://github.com/pauan/rust-dominator)
* [Typescript] Aesthetics are driven by WebComponents in [lit-element](https://lit-element.polymer-project.org/)
* [Interop] is handled via tested events

# Development

1. Install prerequisites like [cargo-make](https://github.com/sagiegurari/cargo-make), and `npm install`
2. `npm start` (will open a browser and rebuild/reload on source change - either typescript, rust, or static files)

More commands are available via `cargo make`:

* `cargo make test` (runs all the tests)
* `cargo make build --profile production` (used in ci/cd - but can check out release builds in `dist/` this way)
* `cargo make build --profile development` (same but used for seeing how non-optmized builds look)

# Prior Art

Much simplified version of [todo-shipyard-lit-dominator](https://github.com/dakom/todo-shipyard-lit-dominator) (e.g. this boilerplate is without the ECS)