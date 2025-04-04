// Example of a dynamic JavaScript function
// function greet(data) {
//     console.log(data, 'greet data');
// }

class ExternalClass {
    constructor(data) {
        console.log(data, 'ExternalClass called sss');
        this.responseData = data?.affectedItemsInfo;
    }
    getDropdownOptions() {
        console.log(this.responseData);
        const mcoData = this.responseData;
        let respData = {};
        mcoData?.mcoaffectedItem?.forEach(eitem => {
            if (!respData[eitem?.name]) {
                respData[eitem?.name] = [];
            }
            respData[eitem?.name].push({
                "id": "1708082625440",
                "templates": "1708082625440",
                "templateName": "EMR PHANTOM ITEM FLOW sdsdsdsd",
                "desc": "Oracle Template",
            });
        })
        return respData;
    }
    dropdownValidation() {
        let collectErrors = ["External file validation failed"]
        return { valid: false, errDesc: collectErrors };
    }
}

// Add the ExternalClass class to the global window object
window.ExternalClass = ExternalClass;
