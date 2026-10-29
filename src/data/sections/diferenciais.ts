/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Nesta LP a seção segue o mockup de 29/10 (componente alterado — ver docs/BRIEFING.md):
 * frase de autoridade e CTA ao lado de uma foto, e os 5 diferenciais num painel navy.
 * São 5 exatos: o painel é `lg:grid-cols-5`. Sem a pessoa recortada do padrão.
 *
 * `cenario.jpg` é provisória, recortada do mockup: o slot `diferenciais` segue em
 * `assets.pendentes` até chegar a foto original.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Diferenciais ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada); a segunda sai em verde. 3–6 palavras no total. */
  titleLines: ['Ar certo para', 'cada aplicação.'],
  text: `A ${site.brandShort} entende o serviço antes de indicar o compressor, avaliando vazão, pressão, motor e aplicação.`,
  /** Linha de apoio sob o botão. */
  help: 'Descreva o serviço. Nós ajudamos na escolha do compressor.',
  scene: {
    src: cenario,
    alt: 'Técnico com tablet ao lado de um compressor portátil Atlas Copco',
  },
  reasons: [
    {
      icon: 'user',
      title: 'Atendimento consultivo',
      description: 'Entende a aplicação antes de indicar o compressor.',
    },
    {
      icon: 'truck',
      title: 'Mobilidade em campo',
      description: 'Fornecimento móvel de ar para serviços de campo.',
    },
    {
      icon: 'zap',
      title: 'Diesel ou elétrico',
      description: 'Versões a diesel e modelos elétricos com motor WEG.',
    },
    {
      icon: 'layers',
      title: 'Portfólio por porte',
      description: 'Small, Medium e Large Air, de 100 a 1.567 CFM.',
    },
    {
      icon: 'clock',
      title: 'Agilidade na identificação',
      description: 'Orientação para encontrar a solução para sua operação.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  help: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
