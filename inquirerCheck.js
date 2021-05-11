const inquirer = require('inquirer');

const questions = [{
  type: 'confirm',
  name: 'installConfirm',
  message: 'Are you sure you want to continue with an outdated package? This will result in some serious technical dept in the future and prevent security updates arriving...',
  default: false,
}];
inquirer.prompt(questions).then((a) => {
  console.log(a);
});