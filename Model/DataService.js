export default class DataService{
    constructor(){
        console.log("működik");
    }
    getData(vegpont, callback){
        axios
            .get(vegpont)
            .then(function (response) {
                // handle success
                console.log(response);
                console.log(response.data);
                callback(response.data.irok);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };
    postData(){
        
    };
    putData(){
        
    };
    deleteData(){
        
    };

}