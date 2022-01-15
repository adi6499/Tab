let buttons = document.querySelector(".buttons")
let tabs = document.querySelector(".tabs")

let data=[
    {
        button:"Development",
        tabPara:"This is development area and this will change once i click another tab",
    },
    {
        button:"python",
        tabPara:"This is python area and this will change once i click another tab",
    },
    {
        button:"javascript",
        tabPara:"This is javascript area and this will change once i click another tab",
    },
    {
        button:"jquery",
        tabPara:"This is jquery area and this will change once i click another tab",
    },
    {
        button:"react",
        tabPara:"This is react area and this will change once i click another tab",
    },
    {
        button:"larva",
        tabPara:"This is larva area and this will change once i click another tab",
    },
    {
        button:"netflix",
        tabPara:"This is netflix area and this will change once i click another tab",
    },
    {
        button:"amazon",
        tabPara:"This is amazon area and this will change once i click another tab",
    },
    {
        button:"swift",
        tabPara:"This is swift area and this will change once i click another tab",
    },
    {
        button:"pycharm",
        tabPara:"This is pycharm area and this will change once i click another tab",
    },
    {
        button:"vscode",
        tabPara:"This is vscode area and this will change once i click another tab",
    },
    {
        button:"forecast",
        tabPara:"This is forecast area and this will change once i click another tab",
    },
    {
        button:"news",
        tabPara:"This is news area and this will change once i click another tab",
    },
    {
        button:"games",
        tabPara:"This is games area and this will change once i click another tab",
    },
    {
        button:"movies",
        tabPara:"This is movies area and this will change once i click another tab",
    },
    {
        button:"science",
        tabPara:"This is science area and this will change once i click another tab",
    },
]


data.forEach((datas)=>{
    const {button,tabPara} = datas
    buttons.innerHTML += `<button>${button}</button>`
    tabs.innerHTML +=`
    <div class=${button} id="content">
    <div class="head">${button}</div>
    <div class="para">${tabPara}</div>
    </div>
    `
})
let tabButton = buttons.querySelectorAll("button")
let content = document.querySelectorAll("#content")
function hide(){
content.forEach((con)=>{
    con.style.display="none"
    
})
}
tabButton.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        hide()
       let classValue = e.target.textContent
       document.getElementsByClassName(classValue)[0].style.display="block"
      
    })
})