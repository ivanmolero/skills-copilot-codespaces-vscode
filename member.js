function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/skills/skills-member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true
  };
}