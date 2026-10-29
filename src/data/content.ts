/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

/** Linha da faixa "Encontre a linha" no pé do hero. Cada card é um CTA. */
export interface HeroLine {
  id: string
  icon: IconName
  title: string
  /** Dado de destaque sob o título; mais de um item entra separado por divisória. */
  spec: readonly string[]
  description: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicitar cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu compressor',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
  /** Link do hero que rola até a seção de linhas. Não é CTA de atendimento. */
  findLine: 'Encontrar minha linha',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Ar comprimido para operações exigentes',
  title: `${site.product} para ${site.context}`,
  text: 'Modelos a diesel e elétricos para diferentes vazões, pressões e aplicações. A Safe Mine ajuda você a escolher o compressor para o seu serviço.',
  banner: {
    src: heroBg,
    alt: 'Compressores portáteis Atlas Copco em área de mineração',
  },
  help: {
    title: 'Não sabe a vazão ou a pressão?',
    text: 'Descreva o serviço. Nós ajudamos na seleção.',
  },
  lines: {
    title: 'Encontre a linha para a sua aplicação',
    note: 'Vazão e pressão variam conforme o modelo e a configuração.',
    items: [
      {
        id: 'small-air',
        icon: 'road',
        title: 'Small Air',
        spec: ['100 a 190 CFM'],
        description: 'Sinalização rodoviária, demolição e perfuração manual.',
      },
      {
        id: 'medium-air',
        icon: 'blast',
        title: 'Medium Air',
        spec: ['Versatilidade por aplicação'],
        description: 'Jateamento abrasivo, concreto projetado e perfuração de rocha.',
      },
      {
        id: 'large-air',
        icon: 'drill',
        title: 'Large Air',
        spec: ['Até 1.567 CFM', 'até 30 bar'],
        description: 'Poços artesianos, fundações e geotecnia.',
      },
      {
        id: 'eletricos',
        icon: 'plug',
        title: 'Linha elétrica',
        spec: ['Motor WEG'],
        description: 'Para operações com alimentação elétrica disponível.',
      },
    ],
  },
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  banner: Photo
  help: { title: string; text: string }
  lines: {
    title: string
    note: string
    items: readonly [HeroLine, HeroLine, HeroLine, HeroLine]
  }
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de compressores portáteis.',
  text: 'Descreva o serviço e a equipe indica a linha Atlas Copco adequada à sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'users', label: 'Atendimento consultivo' },
    { icon: 'clock', label: 'Resposta rápida' },
    { icon: 'file', label: 'Cotação pela descrição do serviço' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.',
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
