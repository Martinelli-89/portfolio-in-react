import './styles/styles.css';
import EntryPage from "./components/EntryPage.js";

function App() {

  const projectsInfo = [{
    projName: "HTML & CSS portfolio",
    link: "https://martinelli-89.github.io/My-Portfolio/",
    description: "My first website",
    code: ["HTML", "BEM", "CSS", "SASS"],
    imgSource: "portfolio.svg"},
    {projName: "Calculator",
    link: "https://martinelli-89.github.io/calculator/",
    description: "Our first javascript challange",
    code: ["HTML", "CSS", "SASS", "JAVASCRIPT"],
    imgSource: "calculator.svg"},
    {projName: "Chess",
    link: "https://martinelli-89.github.io/ChessJS/",
    description: "My first game :)",
    code: ["HTML", "CSS", "SASS", "JAVASCRIPT"],
    imgSource: "BlackKnight.svg"},
    {projName: "this.portfolio",
    link: "",
    description: "",
    code: ["", "", "", ""],
    imgSource: "this.svg"},
    {projName: "",
    link: "",
    description: "",
    code: ["", "", "", ""]},
    {projName: "",
    link: "",
    description: "",
    code: ["", "", "", ""]},
    {projName: "",
    link: "",
    description: "",
    code: ["", "", "", ""]},
    {projName: "",
    link: "",
    description: "",
    code: ["", "", "S", ""]},
    {projName: "Easter egg",
    link: "This portfolio",
    description: "A mistery... can you solve it?",
    code: ["", "", "", ""],
    imgSource: "easterEgg.svg"},

]

  return (
    <div className="App">
      <EntryPage projectsArray={projectsInfo} />
    </div>
  );
}

export default App;

