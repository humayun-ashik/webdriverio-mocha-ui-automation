class ElementUtil{

    async doClick(element){
        await element.waitForDisplayed()
        await element.click()

    }
    async doClearValue(element){
        await element.waitForDisplayed();
        await element.clearValue();
    }
    async doSetValue(element, value){
        await element.waitForDisplayed()
        await element.setValue(value)
    }
    async doGetText(element){
        await element.waitForDisplayed()
        return element.getText()
    }

}
module.exports = new ElementUtil()