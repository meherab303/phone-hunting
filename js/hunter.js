const loadData=async (text,isshowall)=>{
const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`)
const datas=await res.json();
const phones=datas.data
display(phones,isshowall)
// console.log(datas.data)
}
const inputfield=(isshowall)=>{
    const searchField=document.getElementById('search-field')
    toggle(true)
    const searchText=searchField.value
    loadData(searchText,isshowall)
}

const display=(phones,isshowall)=>{

    const phoneContainer=document.getElementById('phone-container')
    phoneContainer.textContent='' 
const hiddenbutton=document.getElementById('hidden-btn')
if(phones.length>12 &&!isshowall){
  hiddenbutton.classList.remove('hidden')
}
else{
  hiddenbutton.classList.add('hidden')
}

    if(!isshowall){
      phones=phones.slice(0,12)
    }
    else{

    }
    

    phones.forEach(phone => {
        // console.log(phone)
        const phonecard=document.createElement('div')
        phonecard.classList=`card bg-slate-400  shadow-xl`
        phonecard.innerHTML=`
        <figure class="px-10 pt-10">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>${phone.slug}</p>
                      <div class="card-actions">
                        <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">show details</button>
                      </div>
                    </div>
        
        `
        phoneContainer.appendChild(phonecard)
       
    });
    toggle(false)
}
 const handleShowDetails=async (id)=>{
console.log('clicked',id)
const res=await fetch(` https://openapi.programming-hero.com/api/phone/${id}`)
const data=await res.json()
const phone=data.data
// console.log(phone)
showmoreDetails(phone)

 }

 const showmoreDetails=(phone)=>{
  console.log(phone)
  
  const showModal=document.getElementById('show-details-container')
  showModal.innerHTML=`
  <p>BRAND:${phone?.brand || 'not available'}</p>
  <p>NAME:${phone?.name || 'not available'}</p>
  <img src="${phone?.image || 'not available'}">
  <p>DISPLAY:${phone?.mainFeatures?.displaySize || 'not available'}</p>
  <p>STORAGE:${phone?.mainFeatures?.storage || 'not available'}</p>
  <p>CHIPSET:${phone?.mainFeatures?.chipSet || 'not available'}</p>
  <p>MEMORY:${phone?.mainFeatures?.memory || 'not available'}</p>
  

  
  `

  my_modal_5.showModal()
 }




const toggle=(isloading)=>{
  const toggol=document.getElementById('toggle')
  if(isloading){
    toggol.classList.remove('hidden')

  }
else{
  toggol.classList.add('hidden')
}


}
const showallbutton=()=>{

  inputfield(true)
}


