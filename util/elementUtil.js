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
    async doSelectDropdownValues(element, byWhat, value){
        // await element.waitForDisplayed()
        if(byWhat === 'TEXT'){
            await element.selectByVisibleText(value)
        }
        if(byWhat === 'INDEX'){
            await element.selectByIndex(value)
        }


    }


}
module.exports = new ElementUtil()