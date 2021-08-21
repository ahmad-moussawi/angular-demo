import { Component, Input, } from "@angular/core";

@Component({
    selector: 'clock',
    template: `
        <div class="clock">
            <div class="hour">{{ hour }}</div>
            <span class="separator">:</span>
            <div class="minute">{{ minute }}</div>
        </div>

        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
        <button (click)="now()">Now</button>
    `,
    styles: [`
        :host {
            display: block;
            margin-bottom: 10px;
        }

        .clock {
            display: inline-flex;
            border: 1px solid grey;
            font: 21px monospace;
            padding: 10px;
            background: black;
            color: lightgreen;
            border-radius: 4px;
        }
    `]
})
export class ClockComponent {

    @Input()
    public hour: number = (new Date()).getHours();

    @Input()
    public minute: number = (new Date()).getMinutes();


    increment() {
        this.hour = this.hour + 1;
        if(this.hour > 24) {
            this.hour = 1;
        }
    }

    decrement() {
        this.hour = (this.hour - 1) % 24;
    }

    now() {
        this.hour = (new Date()).getHours();
        this.minute = (new Date()).getMinutes();
    }

}