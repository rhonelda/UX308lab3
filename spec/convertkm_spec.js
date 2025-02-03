import { convertkilometersToMiles} from "../convertkilometerTomiles.js":


describe("test convertKilometersToMiles", function () {
    it ("tests 150 km",  function() {
        let kilometers = 150;
        let miles = convertkilometersToMiles( kilometers);
        expect(miles.tofixed(2)).toBe("93.23");
    });
    it ("tests 70 km", function () {
        let kilometers = 70;
        let miles = convertkilometersToMiles(kilometers);
        expect(miles.tofixed(2)).toBe("43.51"):
    });
});
