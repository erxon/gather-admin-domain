export default function addID(data){
    let index = -1
    const newArray = data.map((document) => {
        index = index + 1;
        return {...document, id: index }
    })

    return newArray;

}