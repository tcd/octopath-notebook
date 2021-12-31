const BUTTON_INPUT_SELECTOR = "button#bulk-upload-button"
const FILE_INPUT_SELECTOR   = "input#bulk-upload-file-input"

const startBulkUpload = () => {
    $(FILE_INPUT_SELECTOR).click()
}

const readText = async (event) => {
    $(BUTTON_INPUT_SELECTOR).addClass("loading")
    const file = event.target.files.item(0)
    const text = await file.text()
    submitBulkUpload(text)
}

const submitBulkUpload = (text) => {
    const successEndpoint = "?order=desc&sort=created_at"
    const endpoint = $(FILE_INPUT_SELECTOR).data("clays-endpoint")
    $.post(endpoint, { text: text }, (result) => {
        console.log(result)
        window.location.reload()
    })
}
