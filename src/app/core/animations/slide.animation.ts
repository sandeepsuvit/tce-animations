import { trigger, transition, style, animate } from '@angular/animations';

// Animate by sliding in from left
export const SlideInFromLeft = trigger('slideInFromLeft', [
    transition('void => *', [
        style({ transform: 'translate3d(-100%, 0, 0)' }),
        animate('150ms ease-out')
    ]),
    transition('* => void', [
        animate('60ms ease-in', style({ transform: 'translate3d(-100%, 0, 0)', height: '!' }))
    ])
]);

// Animate by sliding in from right
export const SlideInFromRight = trigger('slideInFromRight', [
    transition('void => *', [
        style({ transform: 'translate3d(100%, 0, 0)' }),
        animate('150ms ease-out')
    ]),
    transition('* => void', [
        animate('60ms ease-in', style({ transform: 'translate3d(100%, 0, 0)',  }))
    ])
]);

