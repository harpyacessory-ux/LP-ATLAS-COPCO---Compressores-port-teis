/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * `cenario.jpg` e `pessoa.png` seguem como placeholder — a ficha declara o slot
 * `diferenciais` em `assets.pendentes`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Diferenciais ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Ar certo para', 'cada aplicação.'],
  text: `A ${site.brandShort} entende o serviço antes de indicar o compressor, avaliando juntos vazão, pressão, motor e aplicação.`,
  scene: {
    src: cenario,
    alt: 'Compressor portátil em operação de campo',
  },
  person: {
    src: pessoa,
    alt: `Especialista da ${site.brandShort}`,
  },
  reasons: [
    {
      icon: 'search',
      title: 'Atendimento consultivo',
      description: 'Entende a aplicação antes de indicar o compressor.',
    },
    {
      icon: 'truck',
      title: 'Mobilidade em campo',
      description: 'Fornecimento móvel de ar para serviços de campo.',
    },
    {
      icon: 'power',
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
      description: 'Resposta rápida aos desafios da operação.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
