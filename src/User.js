class User{
    constructor(userId, userName, userLastName, userCellNumber, userEmail, userBirthdate){
        this.id = userId;
        this.name = userName;
        this.lastName = userLastName;
        this.number = userCellNumber;
        this.email = userEmail;
        this.age = this.getUserAge(userBirthdate);
    }

    getUserAge(birthDate){

    }
}