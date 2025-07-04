import './App.css';
import React from 'react';
import AvailableIcons from './AvailableIcons';
import AvailableQomponents from './AvailableQomponents';
import { Select } from '@seeqdev/qomponents';
import './index.css';

const themes = [
  { label: 'Analysis', value: 'color_analysis' },
  { label: 'Topic', value: 'color_topic' },
  { label: 'DataLab', value: 'color_datalab' },
];
function App() {
  const [display, setDisplay] = React.useState('qomponents');
  const [theme, setTheme] = React.useState('color_analysis');
  const activeTab = 'text-white border-white border-b-4';
  const inactiveTab = 'text-gray-400 border-b-4 border-gray-900';
  return (
    <>
      <div className={theme}>
        <nav className="bg-gray-900 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">Q</span>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                  <a
                    href="#"
                    className={`py-4 px-2 font-semibold transition duration-300 ${
                      display === 'qomponents' ? activeTab : inactiveTab
                    }`}
                    onClick={() => setDisplay('qomponents')}>
                    qomponents
                  </a>
                  <a
                    href="#"
                    onClick={() => setDisplay('icons')}
                    className={`py-4 px-2 font-semibold transition duration-300 ${
                      display === 'icons' ? activeTab : inactiveTab
                    }`}>
                    icons
                  </a>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-3 tw-dark">
                <Select
                  extraClassNames="w-28"
                  onChange={({ value }) => setTheme(value)}
                  options={themes}
                  placeholder="Theme"
                />
              </div>
            </div>
          </div>
        </nav>

        <div className={'p-6'}>
          {display === 'qomponents' && <AvailableQomponents />}

          {display === 'icons' && <AvailableIcons />}
        </div>
      </div>
    </>
  );
}

export default App;
