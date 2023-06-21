export default async function archiveHelper(report){
    //update the report, set status to archive
    const setStatusToArchive = await fetch(`/api/reports/${report}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status: 'archive'})
    })
    //add report to archive
    if(setStatusToArchive.status === 200){
        const addReportToArchive = await fetch('/api/archives', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({report: report})
        })

        const result = await addReportToArchive.json();
        return result;
    }

}