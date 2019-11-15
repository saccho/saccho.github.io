import nagaoka from '../../../assets/works/nagaokamatsuri.jpg'
import newPortfolioLight from '../../../assets/works/newPortfolioLight.jpg'
import newPortfolioDark from '../../../assets/works/newPortfolioDark.jpg'
import artistNetwork from '../../../assets/works/artistNetwork.jpg'
import oldPortfolio from '../../../assets/works/oldPortfolio.jpg'
import kawaya from '../../../assets/works/kawaya.jpg'
import autoCloudRT from '../../../assets/works/autoCloudRT.jpg'
import linebot from '../../../assets/works/linebot.jpg'
import languages from '../colors/laguages'
import { isDark } from '../colors/elements'

function getPortfolioColor() {
  if (isDark()) {
    return newPortfolioDark
  } else {
    return newPortfolioLight
  }
}

const works = [
  {
    title: '長岡花火 公式アプリ',
    imgPath: nagaoka,
    url: 'https://play.google.com/store/apps/details?id=io.joren.nagaokamatsuri',
    description: 'Product: Fuller, Inc. (joined as part-time job of Android engineer)',
    languages: [languages.kotlin],
  },
  {
    title: 'Portfolio Site (This site)',
    imgPath: getPortfolioColor(),
    url: 'https://github.com/saccho/saccho.github.io',
    description: 'Personal work',
    languages: [languages.react, languages.ts]
  },
  {
    title: 'Artist Network',
    imgPath: artistNetwork,
    url: 'https://github.com/saccho/artists-network-front',
    description: 'Personal work',
    languages: [languages.vue, languages.js, languages.python]
  },
  {
    title: 'Portfolio Site (Old)',
    imgPath: oldPortfolio,
    url: 'https://github.com/saccho/saccho.github.io-old',
    description: 'Personal work',
    languages: [languages.vue, languages.js]
  },
  {
    title: 'Auto CloudRT',
    imgPath: autoCloudRT,
    url: 'https://github.com/saccho/auto-cloudRT',
    description: 'Personal work (for study)',
    languages: [languages.python]
  },
  {
    title: 'KAWAYA',
    imgPath: kawaya,
    url: 'https://github.com/ExciteJapanPub/summer-intern-2018-blockchain-fabric',
    description: 'Internship: Excite Japan Co., Ltd.',
    languages: [languages.go, languages.js, languages.python]
  },
  {
    title: 'LINE BOT',
    imgPath: linebot,
    url: 'https://github.com/saccho/my_linebot',
    description: 'Personal work',
    languages: [languages.python]
  },
]

export default works
