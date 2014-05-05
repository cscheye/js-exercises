function Student (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.enroll = function (course) {
  for (var i = 0; i < this.courses.length; i++) {
    if (course.conflictsWith(this.courses[i])) {
      throw "Courses Conflict";
    }
  }
  this.courses.push(course);
  course.students.push(this);
};

Student.prototype.courseLoad = function () {
  var load = {};
  for(var i = 0; i < this.courses.length; i++) {
    var curr_course = this.courses[i];
    var curr_dept = curr_course.department;
    var curr_creds = curr_course.credits;

    if(load[curr_dept]) {
      load[curr_dept] += curr_creds;
    } else {
      load[curr_dept] = curr_creds;
    }
  }

  return load;
}

function Course (name, department, credits, days, block) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.block = block;
}

Course.prototype.add_student = function (student) {
  student.enroll(this);
}

Course.prototype.conflictsWith = function (other_course) {
  if (this.block === other_course.block) {
    for(var i = 0; i < this.days.length; i++) {
      if (other_course.days.indexOf(this.days[i]) !== -1) {
        return true;
      }
    }
  }
  return false;
}

var cristi = new Student("cristi", "scheye");
var rails = new Course("ruby on rails", "appacademy", 5000, ['mon', 'wed'], 5);
var andrew = new Student("andrew", "wong");
var javascript = new Course("JavaScript", "appacademy", 1, ['mon'], 6);

cristi.enroll(rails);
cristi.enroll(javascript);
andrew.enroll(rails);

console.log(cristi.courseLoad());
