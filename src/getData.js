import renderItems from "./renderItems";


const getData = async (searched) => {

        let url = `https://api.github.com/search/repositories?q=+${searched}&sort=stars&per_page=10`

        try{
            const response = await fetch(url);
            const result = await response.json()

            if(response.ok){
                return renderItems(result) 
            }
        } catch(err){
            console.log(err)
        }
}

export default getData;