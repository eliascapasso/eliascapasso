import { InfoField } from './infoField.model'
import { Injectable } from '@angular/core'

@Injectable()
export class AboutService {
  works: InfoField[] = [
    new InfoField(
      'Diveria SRL',
      'Desarrollo y mantenimiento de múltiples proyectos',
      'febrero 2019 – febrero 2020',
      'https://www.diveria.com/',
    ),
    new InfoField(
      'Neoris',
      'Mantenimiento de una aplicación web correspondiente al área de seguros.',
      'febrero 2020 – agosto 2020',
      'https://www.neoris.com/',
    ),
    new InfoField(
      'GoTechy Consulting',
      'Casa Orlandai',
      'agosto 2020 – presente',
      'https://gotechy.com/en/',
    ),
  ]

  education: InfoField[] = [
    new InfoField(
      'Técnico electromecánico',
      'E.E.T. N°114 “Justo José de Urquiza”',
      '2007 – 2013',
      'http://www.escuelatecnica114.net/',
    ),
    new InfoField(
      'Ingeniero en Sistemas de Información',
      'Universidad Tecnológica Nacional Regional de Santa Fe',
      '2014 – presente (falta 1 materia y tesis para obtención del título)',
      'https://www.frsf.utn.edu.ar/',
    ),
  ]

  languages: InfoField[] = [
    new InfoField('Español', 'Nativo', ' ', ' '),
    new InfoField('Italiano', 'Intermedio', ' ', ' '),
    new InfoField('Inglés', 'Básico', ' ', ' '),
  ]

  getEducation(): InfoField[] {
    return this.education
  }

  getWorks(): InfoField[] {
    return this.works
  }

  getLanguages(): InfoField[] {
    return this.languages
  }
}
