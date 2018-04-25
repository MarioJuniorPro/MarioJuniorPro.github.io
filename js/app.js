(function(){
  
function createSkillElement(name, icon, level){
  var $skill = document.createElement('div');
  $skill.className  = 'skill';
  
  level = level || 0;
  
  var levelString = '';
  // for(var i = 0; i < level; i++){
  //   levelString += '<i class="fa fa-coffee"></i>'
  // }
  
  var templateString = `
  <div class="icon"><i class="${icon || ''}"></i></div>
  <div class="legend">
  ${name || ''}
  </div>
  <div class="measure">${levelString}</div>
  `;
  $skill.innerHTML = templateString;
  return $skill
}

var skills = [
  {icon: 'fa icon-html5', name: 'HTML5', level: 4},
  {icon: 'fa icon-css3', name: 'CSS3', level: 3},
  {icon: 'fa icon-sass', name: 'SASS', level: 2},
  {icon: 'fa icon-javascript', name: 'JS', level: 4},
  {icon: 'fa icon-angular', name: 'Angular 1.x', level: 4},
  {icon: 'fab fa-react', name: 'React', level: 4},
  {icon: 'fab fa-react', name: 'React Native', level: 2},
  {icon: 'fab fa-vuejs', name: 'Vuejs', level: 2},
  {icon: 'fa icon-nodejs', name: 'NodeJS', level: 3},
  {icon: 'fa icon-java-bold', name: 'Java', level: 4},
  {icon: 'fa icon-spring', name: 'Spring', level: 4},
  {icon: 'fa icon-php-alt', name: 'PHP', level: 3},
  {icon: 'fa icon-laravel', name: 'Laravel', level: 3},
  // {icon: 'fa icon-codeigniter', name: 'Code Igniter', level: 2},
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