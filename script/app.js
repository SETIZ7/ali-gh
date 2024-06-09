const $=document,posetionImgs='img/cp/'

const dbprodauct = [
    {name:'80cp' , img:posetionImgs+'80Cp.png'}
    ,{name:'160cp' , img:posetionImgs+'160Cp.png'}
    ,{name:'240cp' , img:posetionImgs+'240Cp.png'}
    ,{name:'360cp' , img:posetionImgs+'360Cp.png'}
    ,{name:'420cp' , img:posetionImgs+'420Cp.png'}
    ,{name:'560cp' , img:posetionImgs+'560Cp.png'}
    ,{name:'880cp' , img:posetionImgs+'880Cp.png'}
    ,{name:'1080cp' , img:posetionImgs+'1080Cp.png'}
    ,{name:'2080cp' , img:posetionImgs+'2080Cp.png'}

]

const imgHeader = $.getElementById('imgHeader')
, header_content = $.querySelector('.header_content')
, main = $.querySelector('#main')
, iconBoxDying = $.querySelector('.icon_box__bying')
, figure = $.querySelector('figure')
, ulFigure = $.querySelector('#ulFigure')
, priceAllElm = $.querySelector('#priceAll')
, btnPurchase = $.querySelector('#btnPurchase')
, bglineHeader = $.getElementById('bglineHeader')
, lineHeader = $.getElementById('lineHeader')


let XnumberDarsad,ecx,ecy,time=0,
 areeyImgHeaderPoints=[]
,resaltDying,flagFkharid=true
,sabadKharidLS=[]
, gg=0,setTimeoutScroll=0,setTimeoutScrollTime=1
,daler=670000,testTargetTrash,priceAll=0


///////////////////////





function FgetPriceAll(){
    priceAll=0
for (const key of sabadKharidLS) {
    priceAll+=key.tedad * key.price
}
priceAllElm.innerHTML=' ریال ' + priceAll.toLocaleString()

}




////////////////////////






function FnewBTNElmfigurePQty(e) {
    e.target.parentElement.children[1].innerHTML++
    for (const iterator in sabadKharidLS) {
        if(sabadKharidLS[iterator].name===this.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML){
            sabadKharidLS[iterator].tedad=e.target.parentElement.children[1].innerHTML
            localStorage.setItem('sabadKharidLS',JSON.stringify(sabadKharidLS))
        }
    }
    FgetPriceAll()
}

function FnewBTNElmfigureMQty(e) {
    if(e.target.parentElement.children[1].innerHTML>1){
    e.target.parentElement.children[1].innerHTML--
    for (const iterator in sabadKharidLS) {
        if(sabadKharidLS[iterator].name===this.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML){
            sabadKharidLS[iterator].tedad=e.target.parentElement.children[1].innerHTML
            localStorage.setItem('sabadKharidLS',JSON.stringify(sabadKharidLS))
        }
    }
    }

    FgetPriceAll()
}



////////////////////////

function FDOMcreateELM(x) {
     newliElm=$.createElement('li')
    , newDivElmfigureProductName=$.createElement('div')
    , newSpanElmfigureProductName=$.createElement('span')
    
    , newDivElmfigureProductPrice=$.createElement('div')
    , newSpanElmfigureProductPrice=$.createElement('span')
    
    , newDivElmfigureProductQty=$.createElement('div')
    , newBTNElmfigurePQty=$.createElement('button')
    , newBTNElmfigureMQty=$.createElement('button')
    , newSpanElmfigureProductQty=$.createElement('span')
    
    , newHrElm1=$.createElement('hr')
    , newHrElm2=$.createElement('hr')
    , newHrElm3=$.createElement('hr')
    
    ,newSvgElmTrashcan='<svg class="figureProductTrashcan" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 456 511.82"><path fill="#FD3B3B" d="M48.42 140.13h361.99c17.36 0 29.82 9.78 28.08 28.17l-30.73 317.1c-1.23 13.36-8.99 26.42-25.3 26.42H76.34c-13.63-.73-23.74-9.75-25.09-24.14L20.79 168.99c-1.74-18.38 9.75-28.86 27.63-28.86zM24.49 38.15h136.47V28.1c0-15.94 10.2-28.1 27.02-28.1h81.28c17.3 0 27.65 11.77 27.65 28.01v10.14h138.66c.57 0 1.11.07 1.68.13 10.23.93 18.15 9.02 18.69 19.22.03.79.06 1.39.06 2.17v42.76c0 5.99-4.73 10.89-10.62 11.19-.54 0-1.09.03-1.63.03H11.22c-5.92 0-10.77-4.6-11.19-10.38 0-.72-.03-1.47-.03-2.23v-39.5c0-10.93 4.21-20.71 16.82-23.02 2.53-.45 5.09-.37 7.67-.37zm83.78 208.38c-.51-10.17 8.21-18.83 19.53-19.31 11.31-.49 20.94 7.4 21.45 17.57l8.7 160.62c.51 10.18-8.22 18.84-19.53 19.32-11.32.48-20.94-7.4-21.46-17.57l-8.69-160.63zm201.7-1.74c.51-10.17 10.14-18.06 21.45-17.57 11.32.48 20.04 9.14 19.53 19.31l-8.66 160.63c-.52 10.17-10.14 18.05-21.46 17.57-11.31-.48-20.04-9.14-19.53-19.32l8.67-160.62zm-102.94.87c0-10.23 9.23-18.53 20.58-18.53 11.34 0 20.58 8.3 20.58 18.53v160.63c0 10.23-9.24 18.53-20.58 18.53-11.35 0-20.58-8.3-20.58-18.53V245.66z"/></svg>'
    
    newDivElmfigureProductName.className='figureProductName'
    newDivElmfigureProductPrice.className='figureProductPrice'
    newDivElmfigureProductQty.className='figureProductQty'
    
    newBTNElmfigurePQty.addEventListener('click',FnewBTNElmfigurePQty)
    newBTNElmfigureMQty.addEventListener('click',FnewBTNElmfigureMQty)


}




///////////////////////



function FDOMappendELM() {

    newDivElmfigureProductName.append(newSpanElmfigureProductName)
newDivElmfigureProductPrice.append(newSpanElmfigureProductPrice)
newDivElmfigureProductQty.append( newBTNElmfigureMQty , newSpanElmfigureProductQty , newBTNElmfigurePQty)

newDivElmfigureProductPrice.innerHTML+=' ریال '

newliElm.append(newDivElmfigureProductName , newHrElm1 , newDivElmfigureProductPrice , newHrElm2 , newDivElmfigureProductQty , newHrElm3)
newliElm.insertAdjacentHTML('beforeend',newSvgElmTrashcan)

newliElm.lastElementChild.addEventListener('click',(e)=>{
    for (const iterator in sabadKharidLS) {

        if( e.target.parentElement.tagName!=='LI'){
            testTargetTrash = e.target.parentElement.parentElement.firstElementChild.firstElementChild.innerHTML
            e.target.parentElement.parentElement.remove()
    }else{
        testTargetTrash = e.target.parentElement.firstElementChild.firstElementChild.innerHTML
        e.target.parentElement.remove()
        }

        if(testTargetTrash===sabadKharidLS[iterator].name)
            {
                sabadKharidLS.splice(iterator,1)
                localStorage.setItem('sabadKharidLS',JSON.stringify(sabadKharidLS))
                break
            }
            
        }
        FgetPriceAll()
})

ulFigure.append(newliElm)

}



//////////////////////////////


function FDOMcreate(x) {

    FDOMcreateELM()
    

newSpanElmfigureProductName.innerHTML=x.name
newSpanElmfigureProductPrice.innerHTML = ((daler/80) * Number.parseInt(x.name)).toLocaleString()
newSpanElmfigureProductQty.innerHTML=1

newBTNElmfigurePQty.innerHTML='+'
newBTNElmfigureMQty.innerHTML='_'



FDOMappendELM()
FgetPriceAll()

}


function Floadsite() {
    
    if(JSON.parse(localStorage.getItem('sabadKharidLS'))!=null)
    sabadKharidLS=JSON.parse(localStorage.getItem('sabadKharidLS'))

    for (const iterator of sabadKharidLS) {

        FDOMcreateELM()

        newSpanElmfigureProductName.innerHTML=iterator.name
        newSpanElmfigureProductPrice.innerHTML = iterator.price.toLocaleString()
        newSpanElmfigureProductQty.innerHTML=iterator.tedad


     newBTNElmfigurePQty.innerHTML='+'
    newBTNElmfigureMQty.innerHTML='_'

    FDOMappendELM()

    }


    FgetPriceAll()
    
} 


////////////////////////////


function FscrollBar(x) {
    $.scrollingElement.scrollLeft=$.scrollingElement.scrollWidth
    if($.scrollingElement.scrollTop>=100){
        iconBoxDying.style.position='absolute'
        iconBoxDying.style.left='-30px'
        iconBoxDying.style.top=$.scrollingElement.scrollTop+5+'px'
        
    }else{
        iconBoxDying.style.position='static'
    }
}


//////////////////////////



function FimgHeaderMove(e) {
    areeyImgHeaderPoints.push({clientX:e.clientX,clientY:e.clientY})

    setTimeout(()=>{
  if(e.clientY===ecy && e.clientX===ecx ){

    for (const key of areeyImgHeaderPoints) {
        time++ 
            setTimeout(()=>{
        imgHeader.style.setProperty('margin-top',((key.clientY-header_content.offsetHeight)/80)+'%')   
        
        imgHeader.style.setProperty('margin-left',((key.clientX-header_content.offsetWidth)/80)+'%')
        },time*10)
    }
    areeyImgHeaderPoints=[]
    time=0
    }
},1000)
ecx=e.clientX
ecy=e.clientY

}


////////////////////////


function Fkharid(x) {
    for (const key of dbprodauct) {
        if(x.target.dataset.id===key.name){

            for (const keyy of sabadKharidLS) {
                if(x.target.dataset.id===keyy.name){
    flagFkharid=false
                    break
         }  
    }

    if(flagFkharid){
            resaltDying=key
            sabadKharidLS.push({name:resaltDying.name , img:resaltDying.img , tedad:1 , price:(daler/80) * Number.parseInt(resaltDying.name)})
            localStorage.setItem('sabadKharidLS',JSON.stringify(sabadKharidLS))
            FDOMcreate(resaltDying)
            break
    }
    flagFkharid=true
        }
          
    }
}


///////////////////////


function FfigureClick(e) {
    if(e.target.tagName==='FIGURE'){
    $.body.className=null
    figure.style.transform=' translateX(-50%) scale(0)'
    figure.style.opacity='0'
    figure.style.top='25%'
    }
}


//////////////////////



function FEwheelUlFigure(e) {
    e.preventDefault();
    if(e.deltaY>=0){
            gg+=95
            if(gg >= ulFigure.scrollHeight-ulFigure.offsetHeight){
                gg= ulFigure.scrollHeight-ulFigure.offsetHeight+18
            }
            ulFigure.scrollTop=gg
              
    }else{
        gg-=95
        if(gg <= 0){
            gg = 0
        }  
    }
    ulFigure.scrollTop=gg
}



function FbtnPurchaseClickRemoveSabadKharid() {
    ulFigure.innerHTML=null
    sabadKharidLS=[]
    localStorage.removeItem('sabadKharidLS')
    priceAllElm.innerHTML=' ریال '+0
}










for (const x of dbprodauct) {
    
    let newImg = $.createElement('img'),
    newBoxImg = $.createElement('div'),
    newBtnOfBoxImg = $.createElement('button')
    

    newBtnOfBoxImg.innerHTML=' خرید '

    newImg.setAttribute('src',x.img)

    newBtnOfBoxImg.className='btnKharid'
    newBoxImg.className='mine_box__kharid'

    newImg.dataset.id= x.name
    

    newBoxImg.addEventListener('click',Fkharid)

    newBoxImg.append(newImg,newBtnOfBoxImg)
    
    main.append(newBoxImg)
}
    
iconBoxDying.addEventListener('click',(e)=>{
    $.body.className='off_scroll'
    figure.style.transform=' translateX(-50%) scale(1)'
    figure.style.opacity='1'
    figure.style.top='0%'
})





figure.addEventListener('click',FfigureClick)
addEventListener('load',Floadsite)
$.addEventListener('scroll',FscrollBar)
$.addEventListener('mousemove',FimgHeaderMove)


ulFigure.addEventListener("wheel", FEwheelUlFigure , { passive: false });



// window.addEventListener('blur',()=>{
//     $.title='دیوص بیا'
// })
// window.addEventListener('focus',()=>{
//     $.title='سلام عسیسم'
// })

btnPurchase.addEventListener('click',FbtnPurchaseClickRemoveSabadKharid)




$.addEventListener('scroll',(x)=>{

    scroolClientValue=$.scrollingElement.scrollTop/(($.body.scrollHeight-$.scrollingElement.clientHeight)/100)
    lineHeader.style.setProperty('width',scroolClientValue+'%')
})
