import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',*/
  template: `
  <main>
    <a [routerLink]="['/']" title="Home">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/home-logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
    <app-home></app-home>
    </section>
  </main>
`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homes';
}
