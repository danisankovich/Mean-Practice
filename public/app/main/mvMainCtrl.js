angular.module('app').controller('mvMainCtrl', function($scope) {
  $scope.courses = [
    {name: 'C# for Sociopaths', featured: false, published: new Date('Mar 5')},
    {name: 'C++ for Sociopaths', featured: false, published: new Date('Dec 15')},
    {name: 'Java for Sociopaths', featured: false, published: new Date('Jan 2')},
    {name: 'Javascript for Cool People', featured: true, published: new Date('Feb 9')},
    {name: 'Ruby for Chill People', featured: true, published: new Date('Oct 29')},
    {name: 'Swift for Nerds', featured: true, published: new Date('Jan 31')},
    {name: 'VB for Jocks', featured: true, published: new Date('Apr 22')},
    {name: 'C for Old Guys', featured: true, published: new Date('Aug 24')},
    {name: 'Python for You', featured: true, published: new Date('Mar 5')},
    {name: 'Intro to Lisp', featured: true, published: new Date('Dec 15')},
    {name: 'Racket and Me', featured: false, published: new Date('Jan 2')},
    {name: 'Python Into Coding', featured: true, published: new Date('Feb 9')},
    {name: 'Web Design for Dumbasses', featured: false, published: new Date('Oct 29')},
    {name: 'Excelsior Coders', featured: false, published: new Date('Jan 31')},
    {name: 'Beyond the Script Kiddies', featured: true, published: new Date('Apr 22')},
    {name: 'Fortran, the most relevant thing in the world', featured: true, published: new Date('Aug 24')},
  ];
});
