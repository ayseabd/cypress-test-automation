class baseLib {

    getRandomNumber(length) {
        return Math.floor(Math.random() * length);
    }

    getRandomText(length) {
        let result = '';
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabdcefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

}

export default baseLib;