export default async function unarchiveHelper(reportId, itemId){
    //update the report, set status to archive
    const setStatusToArchive = await fetch(`/api/reports/${reportId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status: 'closed'})
    })
    //add report to archive
    if(setStatusToArchive.status === 200){
        const removeReportToArchive = await fetch(`/api/archives/${itemId}`, {
            method: 'DELETE'
        })

        const result = await removeReportToArchive.json();
        return result;
    }

}