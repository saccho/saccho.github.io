import profileIcon from '../../../assets/icons/profile.png'
import worksIcon from '../../../assets/icons/works.png'
import contactIcon from '../../../assets/icons/contact.png'
import logo from '../../../assets/icons/logo.png'

const siteInfo = {
  logo: logo,
  pages: [
    {name: "Profile", path: "/", iconUrl: profileIcon},
    {name: "Works", path: "/works", iconUrl: worksIcon},
    {name: "Contact", path: "/contact", iconUrl: contactIcon}
  ]
}

export default siteInfo
