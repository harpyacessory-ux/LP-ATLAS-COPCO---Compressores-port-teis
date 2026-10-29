/**
 * Dados globais da LP. Tudo que aparece em mais de um lugar (head, header, footer,
 * JSON-LD) vem daqui. Transcrito da ficha de execução (`docs/FICHA-LP.md`): campos `site` e `campanha`.
 */
export const site = {
  /** Nome completo da empresa (entrada 1). */
  brand: 'Safe Mine Soluções',
  /** Nome curto usado em frases como "Por que a …" (entrada 2). */
  brandShort: 'Safe Mine',
  /**
   * Produto principal (entrada 3). Vai na tagline do header e no H1. No singular de
   * propósito: é a palavra-chave literal, e o `check:lp` não reconhece "portáteis"
   * como plural de "portátil".
   */
  product: 'Compressor portátil Atlas Copco',
  /** Contexto de uso (entrada 4). Completa o H1 e o title. */
  context: 'obras, mineração e perfuração',
  /** URL absoluta da página no ar (entrada 10). Usada em canonical e og:url. Provisória. */
  url: 'https://lp-atlas-copco-compressores-portateis.vercel.app/',
  /** Endereço completo com CEP (entrada 9). Footer e JSON-LD. */
  address: 'Rua José de Paula Filho, 128 - Europa, Contagem - MG, 32043-050',
  /** Link da política de privacidade do cliente (entrada 10). Vazio esconde o link, mas a nota de LGPD continua. */
  privacyUrl: '',
  /** Versão do padrão B2 que esta LP segue. Não editar manualmente; vem do template. */
  standardVersion: '2.8.0',
} as const

/**
 * Shortcodes do plugin de atendimento do WordPress (entrada 11 da entrevista).
 *
 * Ficam aqui, e não na página, porque `src/pages/index.astro` é gerado por
 * `npm run compose` e seria sobrescrito a cada recomposição.
 */
export const shortcodes = {
  /** Chat na coluna de 300px do hero. */
  chat: '[atendimento_chat id="default"]',
  /** Formulário da seção de cotação. */
  form: '[atendimento_form id="default-form"]',
} as const

/**
 * Título da aba. A ficha define `conteudo.title`: o formato padrão
 * ("{Produto} para {contexto} | {Marca}") passaria de 80 caracteres com "Safe Mine Soluções".
 */
export const title = 'Compressor portátil Atlas Copco para obras e mineração | Safe Mine'

/** Meta description (≤ 160 caracteres). Ajuste o texto, mantendo marcas e o apoio técnico. */
export const description =
  'Compressores portáteis Atlas Copco a diesel e elétricos WEG, de 100 a 1.567 CFM, para perfuração, jateamento e obras, com atendimento consultivo.'

/**
 * Campanha que leva tráfego para esta LP (entrada 15). Quem clica digitou a
 * palavra-chave antes: se o H1 não a repete, a pessoa volta para o Google.
 */
export const campaign = {
  /**
   * Palavra-chave principal, como está na campanha. O `check:lp` falha se ela não
   * estiver no H1 e no title — aceita maiúscula, acento, plural e outra ordem.
   * `null` quando a LP não tem campanha definida; vazio é entrada não preenchida.
   */
  mainKeyword: 'compressor portátil atlas copco',
  /**
   * Negativas **de oferta** da campanha — o que a empresa não vende. O `check:lp`
   * avisa quando o texto da página usa uma delas. As de intenção (emprego, curso)
   * ficam só no BRIEFING.md.
   */
  negatives: [
    'compressor de geladeira',
    'compressor de ar condicionado',
    'mini compressor pneu',
    'inflador portátil',
    'compressor para aerógrafo',
    'compressor odontológico',
    'compressor doméstico',
    'compressor de áudio',
    'ferramentas pneumáticas',
    'bateria para compressor',
  ],
  /**
   * Claims que o briefing proíbe ("autorizado", "distribuidor", "até 42%"), em todas
   * as formas em que podem aparecer. O `check:lp` falha se a página usar qualquer um.
   */
  forbidden: [
    'somos fabricantes',
    'fabricamos',
    'nossa fábrica',
    'filial',
    'site oficial',
    'loja oficial',
    'canal oficial',
    'locação de compressores',
    'aluguel de compressores',
    'alugamos',
    'locamos',
    'manutenção de compressores',
    'serviço de manutenção',
    'todo o Brasil',
    'todo o país',
    'todo o território nacional',
    'atendimento nacional',
    'cobertura nacional',
    'líder',
    'o melhor',
    'a melhor',
    'número 1',
    'nº 1',
    'maior distribuidor',
    'maior distribuidora',
    'distribuidor autorizado',
    'distribuidora autorizada',
    'autorizado',
    'autorizada',
    'representamos',
    'representante',
  ],
} as const satisfies {
  mainKeyword: string | null
  negatives: readonly string[]
  forbidden: readonly string[]
}

/** WhatsApp comercial (entrada 12). Número no formato internacional, só dígitos (ex.: 5511999999999). Vazio desativa o botão flutuante. */
export const whatsapp = '5531995538843'
