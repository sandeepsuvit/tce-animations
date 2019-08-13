import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';

// List animations
export const ListAnimation = trigger('listAnimation', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('150ms', [
            animate('.5s ease-in', keyframes([
                style({ opacity: 0, transform: 'scale(0.8) translate3d(-60%, 0, 0)', offset: 0 }),
                style({ opacity: .5, transform: 'scale(0.9) translate3d(30px,0,0)', offset: 0.5 }),
                style({ opacity: 1, transform: 'scale(1) translate3d(0,0,0)', offset: 1.0 }),
            ]))
        ]), { optional: true })
    ])
]);
