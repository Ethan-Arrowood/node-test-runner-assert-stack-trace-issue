module.exports = async function reporter (source) {
    for await (const event of source) {
        switch (event.type) {
            case 'test:fail': {
                console.log(event.data.details.error.stack);
                break;
            }
            default:
                // console.log(event);
                break;
        }
    }
}