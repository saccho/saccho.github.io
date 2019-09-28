function isDark() {
  const nowHours = new Date().getHours()
  if (nowHours < 7 || nowHours >= 19) {
    return true
  } else {
    return false
  }
}

var background: string
var barBackground: string
var barBackgroundHover: string
var waveBackground: string
var skillBackground: string
var mainText: string
var subText: string
var notFoundText: string
var card: string
var worksCardHover: string
var linkTextHover: string

if (isDark()) {
  background = '#353535'
  barBackground = '#282828'
  barBackgroundHover = '#303030'
  waveBackground = '#292929'
  skillBackground = '#A4A4A4'

  mainText = '#E0E0E0'
  subText = '#BDBDBD'
  notFoundText = '#EEEEEE'

  card = '#616161'

  worksCardHover = '#03A9F4'
  linkTextHover = '#03A9F4'
} else {
  background = '#FAFAFA'
  barBackground = '#F5F5F5'
  barBackgroundHover = '#EEEEEE'
  waveBackground = '#ECEFF1'
  skillBackground = '#FFFFFF'

  mainText = '#424242'
  subText = '#757575'
  notFoundText = '#BDBDBD'

  card = '#E0E0E0'

  worksCardHover = '#4FC3F7'
  linkTextHover = '#03A9F4'
}

export { background, barBackground, barBackgroundHover, waveBackground, skillBackground,
  mainText, subText, notFoundText, card, worksCardHover, linkTextHover }
