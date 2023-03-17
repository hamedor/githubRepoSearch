const renderItems = (data) =>{

    const list = document.querySelector('.list');
    list.innerHTML = '';

    if(data.items.length>0){
        data.items.map(e=>{
            let template = 
            `
            <div class = 'item'>
                <div class='flex'>
                <a href="${e.html_url}" target="_blank"> <p class="name">${e.name}</p></a>
                <p class='text'> by </p>
                <p class="owner text">${e.owner.login}</p>
                </div>
               
                <p class="description">${e.description}</p>
               
          
    
            </div>
            `
            list.insertAdjacentHTML('afterbegin', template);
        })
    }else{
        list.insertAdjacentHTML('afterbegin',`<p>ничего не найдено</p>`)
    }

}

export default renderItems;