import CodeSnippet from '../helpers/CodeSnippet';

const installationCode = `npm install @seeqdev/qomponents

# or with yarn
yarn add @seeqdev/qomponents`;

const basicUsageCode = `import * as React from 'react';
import { Button } from '@seeqdev/qomponents';

function App() {
  return <Button variant="theme" label="Seeq Rocks" />;
}`;

const importStylesCode = `@import '@seeqdev/qomponents/dist/styles.css';`;

const themeCode = `<!-- Apply theme to your application wrapper -->
<div class="color_analysis">
  <!-- Your application here -->
</div>`;

const fontAwesomeCode = `npm install --save @fortawesome/fontawesome-free

# Then import in your CSS:
@import "@fortawesome/fontawesome-free/css/all.css";

# Or for specific icon types:
@import "@fortawesome/fontawesome-free/css/fontawesome.css";
@import "@fortawesome/fontawesome-free/css/solid.css";`;

const webpackCode = `// Add to your webpack.config rules array:
{
  test: /@?(seeqdev).*\\.(ts|js)x?$/, 
  loader:'babel-loader'
},
{
  test: /\\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
}

// For webpack + scss imports:
@import '~@seeqdev/qomponents/dist/styles.css';
@import '~@fortawesome/fontawesome-free/css/all.css';`;

function GettingStartedQomponent() {
  return (
    <div className="space-y-8">
      {/* Header with Logo */}
      <div className="text-start">
        <img
          width="150"
          src="https://seeq.com/sites/default/files/seeq-content/seeq-logo-blue-web-33h.svg"
          alt="Seeq logo"
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Qomponents</h1>
        <p className="text-lg text-gray-600 mb-6">
          Seeq qomponents are a collection of UI components, including a Button, a TextField, an Icon, as well as a
          Tooltip React component (more coming soon!)
        </p>
        <p className="text-gray-600 mb-6">
          These components are used by Seeq's application and are made publicly available for Developers who want to
          expand the Seeq eco-system with their own plugins and add-ons without having to worry about creating a
          cohesive Seeq UX experience. Every component comes fully styled (and with dark mode support).
        </p>
      </div>

      {/* Installation */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Installation</h2>
        <p className="text-gray-600 mb-4">Seeq qomponents are available on npm:</p>
        <CodeSnippet code={installationCode} language="bash" />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Getting started with Seeq qomponents</h2>
        <p className="text-gray-600 mb-4">
          Prefer a more complete example? Checkout the example folder provided. It includes a ready to run example
          application. Here is an example of a basic app using the Button component:
        </p>
        <CodeSnippet code={basicUsageCode} language="jsx" />
      </div>

      {/* Importing Styles */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Importing Styles</h2>
        <p className="text-gray-600 mb-4">
          To make sure all styles are properly applied be sure to include the qomponents css file in your main css file:
        </p>
        <CodeSnippet code={importStylesCode} language="css" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
          <p className="text-yellow-800 mb-2">
            <strong>A note on CSS:</strong>
          </p>
          <p className="text-yellow-700 mb-2">
            Seeq's qomponents come fully styled and ready to use. While it is tempting to use the available{' '}
            <em>extraClassNames</em> property to provide yet additional styling we strongly advise you to use this
            property to provide only width, margins and padding. This will ensure for a smooth upgrade experience when
            Seeq's look and feel changes.
          </p>
          <p className="text-yellow-700">
            <strong>Tip:</strong> to indicate missing or wrong user input use the <em>showError</em> property available
            on TextField, TextArea, as well as Select.
          </p>
        </div>
      </div>

      {/* Themes */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Themes</h2>
        <p className="text-gray-600 mb-4">
          The colors of your qomponents are controlled by the "theme". If you do not provide a theme your qomponents
          will use the default blue or also known as Topic-based theme. Themes are applied by adding the class of the
          desired theme to a wrapper of your application:
        </p>
        <CodeSnippet code={themeCode} language="html" />

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Available Themes:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">Theme</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">Color</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">Class</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 text-sm text-gray-900">Topic</td>
                  <td className="px-4 py-2 text-sm text-blue-600">blue</td>
                  <td className="px-4 py-2 text-sm font-mono text-gray-600">color_topic</td>
                  <td className="px-4 py-2 text-sm font-mono text-gray-600">class="color_topic"</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 text-sm text-gray-900">Analysis</td>
                  <td className="px-4 py-2 text-sm text-green-600">green</td>
                  <td className="px-4 py-2 text-sm font-mono text-gray-600">color_analysis</td>
                  <td className="px-4 py-2 text-sm font-mono text-gray-600">class="color_analysis"</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">DataLab</td>
                  <td className="px-4 py-2 text-sm text-orange-600">orange</td>
                  <td className="px-4 py-2 text-sm font-mono text-gray-600">color_datalab</td>
                  <td className="px-4 py-2 text-sm font-mono text-gray-600">class="color_datalab"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FontAwesome */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">FontAwesome Icons</h2>
        <p className="text-gray-600 mb-4">Before you can use FontAwesome icons you must install FontAwesome:</p>
        <CodeSnippet code={fontAwesomeCode} language="bash" />
        <p className="text-gray-600 mt-4">
          If your project only uses Classic Solid (or any other one kind) it's better to import only the required css
          for that Icon type to keep your package size small. Note: if you don't import "all" like shown above be sure
          to include <code className="bg-gray-100 px-1 rounded">fontawesome.css</code> in addition to whatever Icon
          style you require.
        </p>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              1) I use webpack and I get a strange error once I added qomponents to my package.json!
            </h3>
            <p className="text-gray-600 mb-3">
              Webpack needs a little help :) Add the following to the{' '}
              <code className="bg-gray-100 px-1 rounded">rules</code> array in your{' '}
              <code className="bg-gray-100 px-1 rounded">webpack.config</code>:
            </p>
            <CodeSnippet code={webpackCode} language="javascript" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">2) How do I get my Button to be green?</h3>
            <p className="text-gray-600">
              The colors of your qomponents are controlled by the "theme". See the Themes section above for details on
              how to apply different color schemes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              3) How can I see all the props that are available?
            </h3>
            <p className="text-gray-600">
              Take a look at the <code className="bg-gray-100 px-1 rounded">.types.d.ts</code> files that can be found
              in the <code className="bg-gray-100 px-1 rounded">dist/&#123;component name&#125;/</code>
              folder. This file contains all available properties including some descriptive text that tells you more
              about them.
            </p>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">What's Next?</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 mb-3">Now that you have Qomponents set up, explore the available components:</p>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>
              <strong>Form Components:</strong> TextField, TextArea, Select, Checkbox
            </li>
            <li>
              <strong>Navigation:</strong> Button, ButtonWithDropdown, ToolbarButton, Tabs
            </li>
            <li>
              <strong>Layout:</strong> Modal, Accordion
            </li>
            <li>
              <strong>Feedback:</strong> QTip (tooltips)
            </li>
            <li>
              <strong>Visual:</strong> Icon
            </li>
          </ul>
          <p className="text-blue-700 mt-3">
            Each component includes live examples, code snippets, and interactive demos to help you get started quickly.
          </p>
        </div>
      </div>

      {/* Support */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Support</h2>
        <p className="text-gray-600">
          For questions, issues, or contributions, please refer to the Qomponents documentation or reach out to the Seeq
          development team.
        </p>
      </div>
    </div>
  );
}

export default GettingStartedQomponent;
