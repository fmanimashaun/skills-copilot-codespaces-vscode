function skillsMember() {
  this.name = 'skillMember';
  this.skill = 'JS';
  this.getMember = function() {
    return this.name + ' has ' + this.skill;
  };
}