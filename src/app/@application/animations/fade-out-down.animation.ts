import { animate, style, transition, trigger } from '@angular/animations';

export function fadeOutDownAnimation(duration: number) {
  return trigger('fadeOutDown', [
    transition(':enter', [
      style({
        transform: 'translateY(-20px)',
        opacity: 0,
      }),
      animate(
        `${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`,
        style({
          transform: 'translateY(2)',
          opacity: 1,
        })
      ),
    ]),
  ]);
}

export const fadeOutDown400ms = fadeOutDownAnimation(400);
