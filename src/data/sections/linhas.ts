/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 *
 * Aqui os cards são os portes da linha APE Atlas Copco, e o escuro é a linha elétrica
 * WEG. As quatro fotos seguem como placeholder: a ficha declara o slot `linhas` em
 * `assets.pendentes`.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Linhas por porte',
  title: 'Compressores portáteis para cada exigência de ar',
  text: 'Escolha pela aplicação. Cada porte combina vazão, pressão e motor para um tipo de serviço em campo.',
  items: [
    {
      id: 'small-air',
      tag: 'Pequeno porte',
      title: 'Small Air',
      description: 'Ar móvel para sinalização rodoviária, demolição e perfuração manual.',
      photo: { src: linha1, alt: 'Compressor portátil Small Air' },
      features: ['100 a 190 CFM', '7 a 10 bar', 'Motor Kubota'],
      dark: false,
    },
    {
      id: 'medium-air',
      tag: 'Médio porte',
      title: 'Medium Air',
      description: 'Para jateamento abrasivo, concreto projetado e perfuração de rocha.',
      photo: { src: linha2, alt: 'Compressor portátil Medium Air' },
      features: ['272 a 404 CFM', '7 a 14 bar', 'Motor Perkins'],
      dark: false,
    },
    {
      id: 'large-air',
      tag: 'Grande vazão',
      title: 'Large Air',
      description: 'Para poços artesianos, fundações e geotecnia, com alta vazão e pressão.',
      photo: { src: linha3, alt: 'Compressor portátil Large Air' },
      features: ['Até 1.567 CFM', 'Até 30 bar', 'Motores MWM e Scania'],
      dark: false,
    },
    {
      id: 'eletricos',
      tag: 'Elétrico',
      title: 'Elétricos WEG',
      description: 'Modelos T400 a V1100 com motor WEG e acionamento elétrico.',
      photo: { src: marcasPhoto, alt: 'Compressor portátil elétrico com motor WEG' },
      features: ['403 a 1.100 CFM', '10 bar', 'Motor elétrico WEG'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
