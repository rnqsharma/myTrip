export interface IProfile {

    fullName: string;
    id: string;
    password: string;
    gender: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
    mobile: number;
    rights: string;
    bookedFlights: [{
        flightId: string;
        flightCompany: string;
        departureName: string;
        departureTime: string;
        arrivalName: string;
        arrivalTime: string;
        price: number;
        duration: string;
    }];
}
