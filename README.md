# feeder-react-feedback 🐼

Embeddable Feedback React component hooked up to an [admin dashboard](http://feeder-admin-client.now.sh/). The fastest way to start collecting feedback across your React projects! ⚡

## Quick Links

### External

- [Component Demo/Playground](http://feeder-xi.now.sh/)
- [Admin Dashboard](http://feeder-admin-client.now.sh/)

### Documentation

- [Install via NPM](#install-via-npm)
- [Features](#features)
- [Usage](#usage)
- [Props](#props)
- [FAQ](#faqs)

## Install via NPM

`npm install feeder-react-feedback`

## Features

- **Collect Feedback**: Collect and view feedback for across your react projects in a sortable data table
- **Fully Customizable**: Match the component to your project's style guide and color scheme (see [props](#props) for more information)
- **Share Projects**: Add unlimited collaborators to projects
- **Export your Data**: Export project-specific feedback to CSV

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

## Props

| prop                | description                                           | type             | required | default                    |
| ------------------- | ----------------------------------------------------- | ---------------- | -------- | -------------------------- |
| **projectId**       | **Unique project id from admin app**                  | **string**       | **yes**  | **null**                   |
| email               | Whether email input field is included                 | boolean          | no       | false                      |
| emailRequired       | Whether email input field, if included, is required   | boolean          | no       | false                      |
| emailDefaultValue   | Default value for email input field                   | string           | no       | null                       |
| feedbackTypes       | Specify **exactly 2 or 3** custom feedback types      | array of strings | no       | ["general", "bug", "idea"] |
| hoverBorderColor    | Hover, active and focus border color (inputs, button) | string           | no       | #000000                    |
| postSubmitButtonMsg | Submit button text after submission                   | string           | no       | Thanks!                    |
| projectName         | Project's top-level name                              | string           | no       | null                       |
| primaryColor        | Primary color (header, buttons, trigger)              | string           | no       | #ffffff                    |
| submitButtonMsg     | Submit button text                                    | string           | no       | Send Feedback              |
| subProject          | Project within top-level project                      | string           | no       | null                       |
| textColor           | Text color                                            | string           | no       | #000000                    |

## FAQs

### What do I need to get started?

3 easy steps.

**First, install the Feedback component from NPM**: `npm install feeder-react-feedback`

**Second, import the component and stylesheet into your React Project**:

```javascript
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet

class App extends Component {
  render() {
    return <Feedback projectId="PROJECT_ID_FROM_ADMIN_APP" />;
  }
}
```

**Lastly, create an Account/Project on the [admin dashboard](http://feeder-admin-client.now.sh/) and pass in your project's `projectId` as a prop to the `Feedback` component**.

### What is the Admin Dashboard?

The [admin dashboard](http://feeder-admin-client.now.sh/) is where all the feedback for each project is collected. Each project has a unique id that is passed as a prop to the `<Feedback/>` component.

You can add collaborators to each project as well, which will give them the ability to view all the feedback for a given project.

### What if I want to move my data off the platform?

The admin dashboard allows users to export all project-specific data to CSV.
