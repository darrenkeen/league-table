import { headerHTML, footerHTML } from '~/templates';

export const app = (): string => {
  return `
    ${headerHTML}
    <main></main>
    ${footerHTML}
  `;
};
