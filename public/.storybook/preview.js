/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegx: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$ ,
            },
        },
    },
},

export const decorators = [(Story, context) => <Story key={JSON.stringify(context.args)} />];

export default preview;
