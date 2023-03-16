let data= new Date()
let ano=String(data.getFullYear())
let mes=String(data.getMonth() + 1)
let dia=String(data.getDate())
let hr=String(data.getHours())
let min=String(data.getMinutes())

let hora=document.getElementById('hour')
let infor=document.getElementById('info')
let ph=document.getElementById('h')
let pm=document.getElementById('m')

if (hr.length<2){
  hr='0'+hr
}
if (min.length<2) {
  min='0'+min
}
if (dia.length<2) {
  dia='0'+dia
}
if (mes.length<2) {
  mes='0'+mes
}

infor.innerHTML=dia+'/'+mes+'/'+ano
hora.innerHTML=hr+':'+min
ph.style.transform='translate(0,-50%) rotate('+Number(hr)*30+'deg)'
pm.style.transform='translate(0,-50%) rotate('+Number(min)*6+'deg)'

let body = document.getElementById('body')
let clock = document.getElementById('clock')
let im = document.getElementById('image')
  
im.addEventListener('click',()=>{
  body.classList.toggle('preto')
  clock.classList.toggle('preto')
  clock.style.animationName='shadowMoviment'
},true)