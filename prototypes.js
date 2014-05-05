function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return "Everyone loves " + this.name;
}

Cat.prototype.meow = function () {
  return this.name + " meows at " + this.owner ;
}

cat = new Cat("captain", "Cristi");
cat2 = new Cat("Gerald", "Andrew");
console.log(cat.cuteStatement());
console.log(cat2.cuteStatement());

console.log(cat2.meow());
console.log(cat.meow());


cat2.meow = function () {
  return "BARK";
}


console.log(cat2.meow());
console.log(cat.meow());

