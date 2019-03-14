/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    const obj = {};

    const isUnique = function (arr) {
        let result = true;
        arr.forEach(function (element, index, array) {
            if (array[index] === array[index + 1]) {
                result = false;
            }
        });
        return result;
    };

    const getLovers = function (index) {
        let arr = [];
        arr.push(index);
        let currentIndex = preferences[index - 1];
        while (arr.length <= 3) {
            arr.push(currentIndex);
            currentIndex = preferences[currentIndex - 1];
        }

        if (arr[0] === arr[3]) {
            arr = arr.slice(0, 3).sort();
            if (isUnique(arr)) {
                obj[arr] = true;
            }
        }
    };

    preferences.forEach(
        function (element) {
            getLovers(element);
        }
    );

    return Object.keys(obj).length;
};
