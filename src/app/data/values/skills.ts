import { mainText as defaultColor } from "../colors/elements";
import languages from "../colors/laguages";
import { ReactComponent as PythonIcon } from "../../../assets/icons/skills/python.svg";
import { ReactComponent as MatlabIcon } from "../../../assets/icons/skills/matlab.svg";
import { ReactComponent as KotlinIcon } from "../../../assets/icons/skills/kotlin.svg";
import { ReactComponent as GoIcon } from "../../../assets/icons/skills/go.svg";
import { ReactComponent as RustIcon } from "../../../assets/icons/skills/rust.svg";
import { ReactComponent as JSIcon } from "../../../assets/icons/skills/js.svg";
import { ReactComponent as TSIcon } from "../../../assets/icons/skills/ts.svg";
import { ReactComponent as HTMLIcon } from "../../../assets/icons/skills/html.svg";
import { ReactComponent as CSSIcon } from "../../../assets/icons/skills/css.svg";
import { ReactComponent as JavaIcon } from "../../../assets/icons/skills/java.svg";
import { ReactComponent as ScalaIcon } from "../../../assets/icons/skills/scala.svg";
import { ReactComponent as VueIcon } from "../../../assets/icons/skills/vue.svg";
import { ReactComponent as ReactIcon } from "../../../assets/icons/skills/react.svg";
import { ReactComponent as GitIcon } from "../../../assets/icons/skills/git.svg";
import { ReactComponent as GithubIcon } from "../../../assets/icons/skills/github.svg";
import { ReactComponent as GCPIcon } from "../../../assets/icons/skills/gcp.svg";
import { ReactComponent as FirebaseIcon } from "../../../assets/icons/skills/firebase.svg";
import { ReactComponent as SignalIcon } from "../../../assets/icons/skills/signal.svg";
import { ReactComponent as MLIcon } from "../../../assets/icons/skills/ml.svg";
import { ReactComponent as DLIcon } from "../../../assets/icons/skills/dl.svg";
import { ReactComponent as AndroidIcon } from "../../../assets/icons/skills/android.svg";
import { ReactComponent as BCIcon } from "../../../assets/icons/skills/bc.svg";

const skills = {
  languages: [
    {
      name: languages.go.name,
      level: 4,
      color: languages.go.color,
      icon: GoIcon
    },
    {
      name: languages.scala.name,
      level: 3,
      color: languages.scala.color,
      icon: ScalaIcon
    },
    {
      name: languages.java.name,
      level: 3,
      color: languages.java.color,
      icon: JavaIcon
    },
    {
      name: languages.kotlin.name,
      level: 3,
      color: languages.kotlin.color,
      icon: KotlinIcon
    },
    {
      name: languages.rust.name,
      level: 2,
      color: languages.rust.color,
      icon: RustIcon
    },
    {
      name: languages.python.name,
      level: 3,
      color: languages.python.color,
      icon: PythonIcon
    },
    {
      name: languages.matlab.name,
      level: 2,
      color: languages.matlab.color,
      icon: MatlabIcon
    },
    {
      name: languages.ts.name,
      level: 3,
      color: languages.ts.color,
      icon: TSIcon
    },
    {
      name: languages.js.name,
      level: 3,
      color: languages.js.color,
      icon: JSIcon
    },
    {
      name: languages.html.name,
      level: 4,
      color: languages.html.color,
      icon: HTMLIcon
    },
    {
      name: languages.css.name,
      level: 4,
      color: languages.css.color,
      icon: CSSIcon
    }
  ],
  libraries: [
    {
      name: languages.vue.name,
      level: 3,
      color: languages.vue.color,
      icon: VueIcon
    },
    {
      name: languages.react.name,
      level: 2,
      color: languages.react.color,
      icon: ReactIcon
    }
  ],
  tools: [
    { name: "Git", level: 4, color: defaultColor, icon: GitIcon },
    { name: "GitHub", level: 4, color: defaultColor, icon: GithubIcon },
    { name: "GCP", level: 2, color: defaultColor, icon: GCPIcon },
    { name: "Firebase", level: 2, color: defaultColor, icon: FirebaseIcon }
  ],
  others: [
    {
      name: "Signal Processing",
      level: 5,
      color: defaultColor,
      icon: SignalIcon
    },
    { name: "Machine Learning", level: 4, color: defaultColor, icon: MLIcon },
    { name: "Deep Learning", level: 2, color: defaultColor, icon: DLIcon },
    { name: "Android", level: 2, color: defaultColor, icon: AndroidIcon },
    { name: "Blockchain", level: 1, color: defaultColor, icon: BCIcon }
  ]
};

export default skills;
