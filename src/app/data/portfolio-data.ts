import { StaticImageData } from 'next/image'

import AppGestaoImage from '../../../public/images/Aplicativo_de_gestao.png'
import giroCertoImage from '../../../public/images/CORTE_FINAL_GIRO_CERTO.png'
import cryptoAppImage from '../../../public/images/CryptoApp Wallet.png'
import cryptoAppImageOriginal from '../../../public/images/CryptoApp WalletOriginal.png'
import ArtworkFiguresImage from '../../../public/images/ECOMMERCE_Action-Figures.png'
import ArtworkFiguresImageOriginal from '../../../public/images/ECOMMERCE_Action-FiguresOriginal.png'
import EcommerceVegaImage from '../../../public/images/ECOMMERCE_VEGA-SHOP.png'
import EcommerceVegaImageOriginal from '../../../public/images/ECOMMERCE_VEGA-SHOP_Original.png'
import logisticaImage from '../../../public/images/logistica.png'
import MultinvestImage from '../../../public/images/LP-MultiInvest.png'
import logisticaImageOriginal from '../../../public/images/LP_CARGO LOGISTICA.png'
import lpDalacoinImage from '../../../public/images/lp_DalaCoin.png'
import siteFreteRapidoImage from '../../../public/images/SITE_freterapido.png'
import siteFreteRapidoImageOriginal from '../../../public/images/SITE_freterapidoOriginal.png'
import OdontoCareImage from '../../../public/images/tela_sistema.png'
import SAMImage from '../../../public/images/S.A.M-sistema_de_abastecimento.png'

export type PortfolioItem = {
  id: string
  thumbnail: StaticImageData
  modalImage: StaticImageData
  titleKey: string
  href?: string
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'frete-rapido',
    thumbnail: siteFreteRapidoImage,
    modalImage: siteFreteRapidoImageOriginal,
    titleKey: 'freteRapidoTitle',
    href: 'https://super-frete-rapido-site.vercel.app/',
  },
  {
    id: 'giro-certo',
    thumbnail: giroCertoImage,
    modalImage: giroCertoImage,
    titleKey: 'giroCertoTitle',
  },
  {
    id: 'crypto-wallet',
    thumbnail: cryptoAppImage,
    modalImage: cryptoAppImageOriginal,
    titleKey: 'cryptoWalletTitle',
  },
  {
    id: 'app-gestao',
    thumbnail: AppGestaoImage,
    modalImage: AppGestaoImage,
    titleKey: 'appGestaoTitle',
  },
  {
    id: 'odonto-care',
    thumbnail: OdontoCareImage,
    modalImage: OdontoCareImage,
    titleKey: 'odontoCareTitle',
    href: 'https://odonto-care-system.vercel.app/',
  },
  {
    id: 'sam',
    thumbnail: SAMImage,
    modalImage: SAMImage,
    titleKey: 'samTitle',
    href: 'https://s-a-m-sistema-municipal-de-abasteci.vercel.app/',
  },
  {
    id: 'artwork-figures',
    thumbnail: ArtworkFiguresImage,
    modalImage: ArtworkFiguresImageOriginal,
    titleKey: 'artworkFiguresTitle',
    href: 'https://artwork-figures.vercel.app/',
  },
  {
    id: 'ecommerce-vega',
    thumbnail: EcommerceVegaImage,
    modalImage: EcommerceVegaImageOriginal,
    titleKey: 'ecommerceVegaTitle',
  },
  {
    id: 'multi-invest',
    thumbnail: MultinvestImage,
    modalImage: MultinvestImage,
    titleKey: 'multiInvestTitle',
  },
  {
    id: 'dala-coin',
    thumbnail: lpDalacoinImage,
    modalImage: lpDalacoinImage,
    titleKey: 'dalaCoinTitle',
  },
  {
    id: 'logistica',
    thumbnail: logisticaImage,
    modalImage: logisticaImageOriginal,
    titleKey: 'logisticaTitle',
  },
]
