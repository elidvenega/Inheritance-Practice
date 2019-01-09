const Person = function(name, yearOfBirth, job , hobby , comicHero) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.hobby = hobby;
  this.comicHero = comicHero;
 };


Person.prototype.calculateAge =
//template literals 
function() {
  console.log(2019 - `${this.yearOfBirth}` + `${this.job}`);
  console.log(this.comicHero);
};

const eric = new Person("Eric", 1987, "Programmer","guitar","Captain America");
const jane = new Person('Michelle',1980,'Traveler', "basketball" , "Spider Maan");
const mark = new Person('Mark' , 1948 , 'Retired' , "hockey" , "Iron Man");

eric.calculateAge();
jane.calculateAge();
mark.calculateAge();