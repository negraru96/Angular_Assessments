class Bike: {
    price: number;
    max_speed: string;
    miles: number;
    constructor(price: number, max_speed: string, miles: number) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    function displayInfo() {
        return console.log(this.price, this.max_speed, this.miles);
    }
    function ride() {
        if (this.miles >= 0) {
            this.miles = this.miles + 10;
            console.log('Riding');
        }
        return this
    }
    function reverse() {
        if (this.miles >= 5) {
            this.miles = this.miles - 5;
            console.log('Reversing');
        }
        return this
    }
    var fInstance = new Bike(100, "5mph");
    fInstance.ride().ride().ride().reverse().displayInfo();

    var sInstance = new Bike(200, "10mph");
    sInstance.ride().ride().reverse().reverse().displayInfo();

    var tInstance = new Bike(300, "15mph");
    tInstance.reverse().reverse().reverse().displayInfo();

}
