(function(){
  
function createSkillElement(name, icon, level){
  var $skill = document.createElement('div');
  $skill.className  = 'skill';
  
  level = level || 0;
  
  var levelString = '';
  for(var i = 0; i < level; i++){
    levelString += '<i class="fa fa-coffee"></i>'
  }
  
  var templateString = `
  <div class="icon"><i class="fa ${icon || ''}"></i></div>
  <div class="legend">
  ${name || ''}
  </div>
  <div class="measure">${levelString}</div>
  `;
  $skill.innerHTML = templateString;
  return $skill
}

var skills = [
  {icon: 'icon-html5', name: 'HTML5', level: 4},
  {icon: 'icon-css3', name: 'CSS3', level: 3},
  {icon: 'icon-sass', name: 'SASS', level: 2},
  {icon: 'icon-javascript', name: 'JS', level: 4},
  {icon: 'icon-angular', name: 'Angular 1.x', level: 4},
  {icon: 'icon-nodejs', name: 'NodeJS', level: 3},
  {icon: 'icon-java-bold', name: 'Java', level: 4},
  {icon: 'icon-spring', name: 'Spring', level: 4},
  {icon: 'icon-php-alt', name: 'PHP', level: 3},
  {icon: 'icon-laravel', name: 'Laravel', level: 3},
  {icon: 'icon-codeigniter', name: 'Code Igniter', level: 2},
]


function createSectionElement(skills){
    var $section = document.createElement('div');
    $section.className  = 'skills';

    var $sectionEl = 
        skills
          .map(function(skill){
            return createSkillElement(skill.name, skill.icon, skill.level)
          })
          .reduce(function(acc,cur){
            acc.appendChild(cur)
            return acc;
          }, $section)

  return $sectionEl;
}

document
    .getElementById('skills')
    .appendChild(createSectionElement(skills))


})()