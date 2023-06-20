export default function errorMessage(error){
    if(error){
        return `${error.name}: ${error.message}`
    }
}