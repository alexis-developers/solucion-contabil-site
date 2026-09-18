export const site = {
  nome: 'Solucion Consultoria & Assessoria Contábil',
  nomeCurto: 'Solucion Contábil',
  url: 'https://legalizacaodeempresa.com.br',
  whatsapp: '5532987037221',
  telefoneExibicao: '(32) 98703-7221',
  fone1: '(21) 2283-5064',
  fone2: '(21) 99997-2229',
  email: 'consultoria@solucionconsultoria.com.br',
  endereco: {
    logradouro: 'Rua do Acre, 51 – Sala 905',
    bairro: 'Centro',
    cidade: 'Rio de Janeiro',
    uf: 'RJ',
    cep: '20081-000',
  },
  // GA4 / GTM — preencher quando o chefe criar as contas.
  ga4Id: '',
  gtmId: '',
} as const;

export function whatsappLink(
  mensagem = 'Olá! Vim pelo site e gostaria de falar com um especialista.'
): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
