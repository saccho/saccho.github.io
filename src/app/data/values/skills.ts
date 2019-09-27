import {mainText as defaultColor} from '../colors/elements'
import languages from '../colors/laguages'

const skills = {
  languages: [
    {name: languages.python.name, level: 5, color: languages.python.color},
    {name: languages.matlab.name, level: 4, color: languages.matlab.color},
    {name: languages.kotlin.name, level: 3, color: languages.kotlin.color},
    {name: languages.go.name, level: 3, color: languages.go.color},
    {name: languages.js.name, level: 3, color: languages.js.color},
    {name: languages.ts.name, level: 2, color: languages.ts.color},
    {name: languages.html.name, level: 4, color: languages.html.color},
    {name: languages.css.name, level: 4, color: languages.css.color}
  ],
  others: [
    {name: languages.vue.name, level: 3, color: languages.vue.color},
    {name: languages.react.name, level: 2, color: languages.react.color},
    {name: languages.node.name, level: 1, color: languages.node.color},
    {name: 'Git / Github', level: 4, color: defaultColor},
    {name: 'Firestore', level: 1, color: defaultColor},
    {name: 'Machine Learning', level: 4, color: defaultColor},
    {name: 'Deep Learning', level: 2, color: defaultColor},
    {name: 'Blockchain', level: 1, color: defaultColor}
  ]
}

export default skills