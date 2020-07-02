[![npm version](https://img.shields.io/npm/v/feeder-react-feedback.svg)](https://www.npmjs.com/package/feeder-react-feedback)
[![bundle size](https://img.shields.io/bundlephobia/min/feeder-react-feedback.svg)](https://www.npmjs.com/package/feeder-react-feedback)
[![stars](https://img.shields.io/github/stars/rishipr/feeder-react-feedback.svg)](https://www.npmjs.com/package/feeder-react-feedback)
[![npm](https://img.shields.io/npm/dm/feeder-react-feedback.svg)](https://www.npmjs.com/package/feeder-react-feedback)

# Feeder: feeder-react-feedback

Embeddable Feedback React component hooked up to an [admin dashboard](http://feeder-admin-client.now.sh/). The fastest way to start collecting feedback across your React projects! ⚡

## Quick Links

### External

- [Component Demo/Playground](http://feeder-xi.now.sh/)
- [Admin Dashboard](http://feeder-admin-client.now.sh/)

### Documentation

- [Features](#features)
- [Install via NPM](#install-via-npm)
- [Usage](#usage)
- [Props](#props)
- [FAQs](#faqs)
  - [What is the Admin Dashboard?](#what-is-the-admin-dashboard)
  - [Usage with SSR React Frameworks (e.g. Gatsby, Next)](#will-this-work-with-ssr-react-frameworks)
- [Tips](#tips)

## Features

- **Collect Feedback**: Collect and view feedback for across your react projects in a sortable data table
- **Customize Freely**: Match the component to your project's style guide and color scheme (see [props](#props) for more information)
- **Share Projects**: Add unlimited collaborators to projects
- **Export your Data**: Export project-specific feedback to CSV

## Install via NPM

`npm install feeder-react-feedback`

## Usage

If you want the Feedback trigger to be included on every page, add the `<Feedback/>` component to your Layout/Wrapper/Global App component.

Alternatively, if you want the Feedback trigger to be included on certain pages, embed the `<Feedback/>` component in that specific page.

```javascript
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet

class App extends Component {
  render() {
    // See all customizable props below
    return <Feedback projectId="PROJECT_ID_FROM_ADMIN_APP" />;
  }
}
```

After importing the component, create an Account/Project on the [admin dashboard](http://feeder-admin-client.now.sh/) and pass in your project's `projectId` as a prop to the `Feedback` component.

## Props

| prop                | description                                                                                                                                | type             | required | default                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | -------- | -------------------------- |
| **projectId**       | **Unique project id from admin app**                                                                                                       | **string**       | **yes**  | **null**                   |
| email               | Whether email input field is included                                                                                                      | boolean          | no       | false                      |
| emailRequired       | Whether email input field, if included, is required                                                                                        | boolean          | no       | false                      |
| emailDefaultValue   | Default value for email input field                                                                                                        | string           | no       | null                       |
| feedbackTypes       | Specify **exactly 2 or 3** custom feedback types                                                                                           | array of strings | no       | ["general", "bug", "idea"] |
| hoverBorderColor    | Hover, active and focus border color (inputs, button) - can accept any value that is valid for the CSS3 `color` property (hex, rgba, etc.) | string           | no       | "#000000"                  |
| postSubmitButtonMsg | Submit button text after submission                                                                                                        | string           | no       | "Thanks!"                  |
| projectName         | Project's top-level name                                                                                                                   | string           | no       | null                       |
| primaryColor        | Primary color (header, buttons, trigger) - can accept any value that is valid for the CSS3 `color` property (hex, rgba, etc.)              | string           | no       | "#ffffff"                  |
| submitButtonMsg     | Submit button text                                                                                                                         | string           | no       | "Send Feedback"            |
| subProject          | Project within top-level project                                                                                                           | string           | no       | null                       |
| textColor           | Text color - can accept any value that is valid for the CSS3 `color` property (hex, rgba, etc.)                                            | string           | no       | "#000000"                  |
| zIndex              | z-index of Modal and Trigger Button                                                                                                        | string           | no       | "100000000"                |

## FAQs

### What is the Admin Dashboard?

The [admin dashboard](http://feeder-admin-client.now.sh/) is where all the feedback for each project is collected. Each project has a unique id that is passed as a prop to the `<Feedback/>` component.

You can add collaborators to each project as well, which will give them the ability to view all the feedback for a given project. The admin dashboard also allows users to export all project-specific data to CSV.

### Will this work with SSR React frameworks?

If you are using SSR React frameworks such as Gatsby or Next, you may run into something similar to the following error:

`WebpackError: ReferenceError: document is not defined`

During SSR builds, there is no `window` or `document` object (which exists in the browser). For now, your best bet is to use a lightweight package such as [loadable-components](https://github.com/gregberge/loadable-components), which will dynamically load the module on the client side (and not during SSR).

```javascript
import loadable from "@loadable/component"; // npm install @loadable/component
const Feedback = loadable(() => import("feeder-react-feedback/dist/Feedback")); // dynamically load Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet

class App extends Component {
  render() {
    return <Feedback projectId="PROJECT_ID_FROM_ADMIN_APP" />;
  }
}
```

## Tips

### Default Email Value

While it is possible to specify the inclusion of an email input field, you can set a default value for the email address while hiding the input field, thereby reducing user effort. This is especially relevent if/when you have access to an authenticated user's email in a global store such as Redux or the Context API.

```javascript
class App extends Component {
  render() {
    return (
      <Feedback
        defaultEmailValue={this.props.user.email}
        projectId="PROJECT_ID_FROM_ADMIN_APP"
      />
    );
  }
}
```

### Subprojects

If you want to embed the `Feedback` component on multiple pages in the same web app/website but be able to distinguish between which page you are on, consider setting the `subProject` prop. That way, you can use a single top-level project name instead of creating different projects for each page you want to include the `Feedback` component on.

```javascript
class ExampleComponentA extends Component {
  render() {
    return <Feedback subProject="Project A" projectId="SAME_PROJECT_ID" />;
  }
}

class ExampleComponentB extends Component {
  render() {
    return <Feedback subProject="Project B" projectId="SAME_PROJECT_ID" />;
  }
}
```
