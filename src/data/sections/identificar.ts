/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas com divisórias, e
 * qualquer outro número deixa célula órfã.
 *
 * Os 6 dados são os campos do formulário pedido no briefing, que o padrão substitui
 * pelo shortcode do plugin. Vazão e pressão entram como opcionais: quem não as sabe
 * pede cotação descrevendo o serviço.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dados para cotação',
  title: 'Não sabe a vazão ou a pressão?',
  text: 'Descreva o serviço que o compressor vai executar e envie o que tiver. A equipe avalia a aplicação e indica a linha e o modelo adequados.',
  microcopy: 'Basta descrever o serviço',
  items: [
    { icon: 'target', label: 'Aplicação', hint: 'o serviço em campo' },
    { icon: 'move', label: 'Vazão', hint: 'em CFM, se souber' },
    { icon: 'cylinder', label: 'Pressão', hint: 'em bar, se souber' },
    { icon: 'power', label: 'Acionamento', hint: 'diesel ou elétrico' },
    { icon: 'pin', label: 'Cidade/UF', hint: 'local da operação' },
    { icon: 'layers', label: 'Linha', hint: 'se já tiver preferência' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
