/**
 * Splits a String into an array
 */
class Splitter {

    let splitter = _defaultSplitter;
    let pattern = null;

    constructor(pattern = null) {
        this.pattern = pattern;
    }

    setPattern(pattern) {
        this.pattern = pattern;
    }

    setSplitter(splitter) {
        this.splitter = splitter;
    }

    split(stringInput) {
        let result = [];
        // use the pattern

        
        return result;
    }

    _defaultSplitter(input) {
        return input;
    }
}
