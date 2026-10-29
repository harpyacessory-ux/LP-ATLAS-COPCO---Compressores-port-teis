/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3 e cabeçalho centrado. O card inteiro é o CTA.
 *
 * As quatro aplicações que a campanha compra (perfuração, jateamento, mineração e
 * grande vazão). Fotos placeholder: slot `aplicacoes` em `assets.pendentes`, com
 * direito de uso das fotos do material da Atlas Copco a confirmar.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Ar comprimido para cada serviço de campo',
  text: 'Perfuração, jateamento, poços e fundações pedem combinações diferentes de vazão e pressão. Escolha a aplicação e fale com a equipe.',
  items: [
    {
      id: 'desmonte-de-rocha',
      label: 'Desmonte de rocha',
      description: 'Aciona perfuratrizes em rochas, pedras ornamentais, obras e mineração.',
      photo: { src: app1, alt: 'Perfuração de rocha para desmonte' },
    },
    {
      id: 'jateamento',
      label: 'Jateamento abrasivo',
      description: 'Acelera o abrasivo para remover corrosão, tinta e contaminantes.',
      photo: { src: app2, alt: 'Jateamento abrasivo em superfície metálica' },
    },
    {
      id: 'pocos-artesianos',
      label: 'Poços artesianos',
      description: 'Aciona o martelo de fundo e limpa o furo até a captação de água.',
      photo: { src: app3, alt: 'Perfuração de poço artesiano' },
    },
    {
      id: 'fundacoes',
      label: 'Fundações',
      description: 'Avança a ferramenta e limpa o furo para estacas e ancoragens.',
      photo: { src: app4, alt: 'Perfuração para fundações e estacas' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
