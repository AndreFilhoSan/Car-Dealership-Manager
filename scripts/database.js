// Function Master GeT and Save
const storage = (dataField) => {
    const get = () => {
        let data = localStorage.getItem(dataField);
        let convertedData = JSON.parse(data);
        return convertedData
    }

    const save = () => {dataField
        let convertedData = JSON.stringify(data);
        localStorage.setItem(dataField, convertedData);
    }
    return (get, save)
}

