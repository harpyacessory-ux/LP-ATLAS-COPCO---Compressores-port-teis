/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 *
 * Aqui os cards são os portes da linha APE Atlas Copco. O layout desta LP segue o mockup
 * de 29/10 (componente alterado — ver docs/BRIEFING.md): os 4 cards são claros, e `dark`
 * fica só para o contrato da biblioteca. `features` é posicional: vazão, pressão, motor.
 *
 * Fotos provisórias, recortadas do mockup (~330 px de largura útil): o slot `linhas`
 * segue em `assets.pendentes` até chegarem os originais 800×600.
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
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'cada exigência de ar',
  text: 'Escolha pela aplicação. Cada porte combina vazão, pressão e motor para um tipo de serviço em campo.',
  /** Rótulos das duas primeiras features de cada card. */
  specLabels: ['Vazão', 'Pressão'],
  help: {
    title: 'Não sabe qual compressor escolher?',
    text: 'Descreva sua aplicação. A Safe Mine ajuda na seleção.',
    cta: 'Receber orientação',
  },
  note: 'Vazão e pressão variam conforme o modelo e a configuração.',
  items: [
    {
      id: 'small-air',
      tag: 'Pequeno porte',
      title: 'Small Air',
      description: 'Sinalização rodoviária, demolição e perfuração manual.',
      photo: { src: linha1, alt: 'Compressor portátil Small Air' },
      features: ['100 a 190 CFM', '7 a 10 bar', 'Motor Kubota'],
      dark: false,
    },
    {
      id: 'medium-air',
      tag: 'Médio porte',
      title: 'Medium Air',
      description: 'Jateamento abrasivo, concreto projetado e perfuração de rocha.',
      photo: { src: linha2, alt: 'Compressor portátil Medium Air' },
      features: ['272 a 404 CFM', '7 a 14 bar', 'Motor Perkins'],
      dark: false,
    },
    {
      id: 'large-air',
      tag: 'Grande vazão',
      title: 'Large Air',
      description: 'Poços artesianos, fundações e geotecnia, com alta vazão e pressão.',
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
  titleHighlight: string
  text: string
  specLabels: readonly [string, string]
  help: { title: string; text: string; cta: string }
  note: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
