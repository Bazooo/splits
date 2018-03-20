/**
 * Splits has lots of methods that plays with an array of object
 */
class Splits {

    let splitter = _defaultSplitter;
    let splits = [];

    function setSplitter(splitter) {
        this.splitter = splitter;
    }

    function _defaultSplitter(input) {
        return input;
    }
}
