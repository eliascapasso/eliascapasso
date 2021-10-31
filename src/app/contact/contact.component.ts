import { Component } from '@angular/core'
import { Contact } from './contact.model'

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contacts = [
    new Contact(
      '/elias-capasso',
      'https://www.linkedin.com/in/elias-capasso/',
      'linkedin',
      'linkedin',
    ),
    new Contact(
      'elias_capasso@live.com',
      'mailto:elias_capasso@live.com',
      'email',
      'envelope',
    ),
    new Contact('/eliascapasso', 'https://github.com/eliascapasso', 'github', 'github'),
    new Contact(
      '@EliasCapasso',
      'https://twitter.com/EliasCapasso',
      'twitter',
      'twitter',
    ),
    new Contact('/elias.capasso', 'https://www.facebook.com/elias.capasso', 'facebook', 'facebook'),
    new Contact(
      '@eliascapasso',
      'https://www.instagram.com/eliascapasso/',
      'instagram',
      'instagram',
    ),
  ]
}
