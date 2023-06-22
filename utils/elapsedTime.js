export default function elapsedTime(date){
    const currentDate = new Date()
    const elapsedTime = currentDate - new Date(date);

    if(elapsedTime <= (60000*60) && elapsedTime >= 60000 ){
        return `${Math.round(elapsedTime / 60000)}m ago`
    } else if (elapsedTime <= (60000*60)*24 && elapsedTime >= (60000*60)) {
        return `${Math.round(elapsedTime/(60000*60))}hr ago`
    } else {
        return new Date(date).toDateString();
    }

}