/**
 * @typedef {{
 *   type: string;
 *   scope: string;
 *   subject: string;
 *   body: string;
 *   isBreaking: boolean;
 *   breakingBody: string;
 *   breaking: string;
 *   isIssueAffected: boolean;
 *   issuesBody: string;
 *   issues: string;
 * }} Answers
 */

/** @type import('cz-format-extension').Config<Answers> */
module.exports = {
  questions({inquirer, gitInfo}) {
    return [
      {
        type: "list",
        name: "type",
        message: "Select type",
        choices: [
          {
            name: "feat: A new feature",
            value: "feat"
          },
          {
            name: "improve: A business change that wasn't a bug nor a new feature",
            value: "improve"
          },
          {
            name: "fix: A bug fix",
            value: "fix"
          },
          {
            name: "docs: Documentation only changes",
            value: "docs"
          },
          {
            name: "style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
            value: "style"
          },
          {
            name: "refactor: A code change that neither fixes a bug nor adds a feature",
            value: "refactor"
          },
          {
            name: "perf: A code change that improves performance",
            value: "perf"
          },
          {
            name: "test: Adding missing tests or correcting existing tests",
            value: "test"
          },
          {
            name: "build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
            value: "build"
          },
          {
            name: "ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
            value: "ci"
          },
          {
            name: "chore: Other changes that don't modify src or test files",
            value: "chore"
          },
          {
            name: "revert: Reverts a previous commit",
            value: "revert"
          }
        ]
      },
      {
        type: 'input',
        name: 'scope',
        message:
          'What is the scope of this change (e.g. component or file name): (press enter to skip)\n'
      },
      {
        type: 'input',
        name: 'subject',
        message: "Write a short, imperative tense description of the change\n",
        validate: (subject) => subject.length === 0 ? 'subject is required' : true
      },
      {
        type: 'input',
        name: 'body',
        message: 'Provide a longer description of the change: (press enter to skip)\n',
      },
      {
        type: 'confirm',
        name: 'isBreaking',
        message: 'Are there any breaking changes?',
        default: false
      },
      {
        type: 'input',
        name: 'breakingBody',
        default: '-',
        message:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:\n',
        when: answers => answers.isBreaking && !answers.body
      },
      {
        type: 'input',
        name: 'breaking',
        message: 'Describe the breaking changes:\n',
        when: answers => answers.isBreaking
      },
      {
        type: 'input',
        name: 'issues',
        message: 'Add issue references (e.g. "SITE-1982, A&C-986".):\n',
        default: undefined,
        validate: (issues) => {
          const issueQty = issues.length;
          const issueRegex = /^([A-Z\d]{2,})-([\d]+(,\s*[A-Z\d]{2,}-[\d]+)*)$/g;
          let response = true;

          if (!issueRegex.test(issues)) response = `Validation failed.\nCheck if the issue pattern follow these examples: SITE-283 or AAC-482\nRemember that if you're using multiples issues you should use comma separated values as "SITE-18373, AAC-383"`;
          if (!issueQty) response = 'issues is required';

          return response;
        }
      },
      {
        type: 'input',
        name: 'issuesBody',
        default: '-',
        message:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself:\n',
        when: answers => !answers.body && !answers.breakingBody
      },
    ]
  },
  commitMessage({answers, gitInfo}) {
    const issues = answers.issues ? answers.issues : '';
    const scope = answers.scope ? `(${answers.scope})` : '';
    const head = `${answers.type}${scope}: ${issues} ${answers.subject}`;
    const body = answers.body ? answers.body : '';
    const breaking = answers.breaking ? `BREAKING CHANGE: ${answers.breaking}` : '';

    return [head, body, breaking].join('\n\n').trim();
  }
}
