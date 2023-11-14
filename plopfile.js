const plopSetup = (plop) => {
  plop.setGenerator('component', {
    description: 'All needed directories and files for a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name in ProperCase:',
      },
      {
        type: 'confirm',
        name: 'graphql',
        message: 'Does this component need GraphQL:',
      },
      {
        type: 'confirm',
        name: 'hooks',
        message: 'Are you writing hooks:',
      },
      {
        type: 'input',
        name: 'hookName',
        message:
          "Name the hook in ProperCase, 'use' will automatically be prepended:",
        when: (response) => {
          return response.hooks;
        },
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: './src/components/{{properCase name}}',
        base: './plop/component',
        templateFiles: './plop/component/*',
      },
      {
        type: 'addMany',
        skip: (args) =>
          args.graphql === false ? 'Not creating a gql file' : undefined,
        base: './plop/graphql',
        destination: './src/components/{{properCase name}}',
        templateFiles: './plop/graphql/*',
      },
      {
        type: 'addMany',
        skip: (args) =>
          args.hooks === false ? 'No need for hooks' : undefined,
        base: './plop/hooks',
        destination: './src/components/{{properCase name}}/hooks',
        templateFiles: './plop/hooks/*',
      },
    ],
  });
};

export default plopSetup;
