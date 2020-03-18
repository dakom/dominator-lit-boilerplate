export type ChangeAmount = {delta: number};
export class ChangeAmountEvent extends CustomEvent<ChangeAmount> {
    constructor(detail: ChangeAmount) {
        super("change-amount", { detail });
    }
}