import './App.css';
import React from 'react';
import { Icon, TextField } from '@seeqdev/qomponents';
import _ from 'lodash';
import jsonData from './iconFont/_font_custom.css?inline';

function AvailableIcons() {
  const [availableIcons, setAvailableIcons] = React.useState<string[]>([]);
  const [displayIcons, setDisplayIcons] = React.useState<string[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const loadData = () => {
    let data = JSON.stringify(jsonData);
    const icons = [];
    while (data.indexOf('.') > -1) {
      const endIndex = data.indexOf(':');
      icons.push(data.substring(data.indexOf('.') + 1, endIndex));
      data = data.substring(endIndex + 1);
      data = data.substring(data.indexOf(':') + 1);
    }
    setAvailableIcons(icons);
    setDisplayIcons(icons);
  };

  React.useEffect(() => {
    searchTerm === ''
      ? setDisplayIcons(availableIcons)
      : setDisplayIcons(_.filter(availableIcons, (icon: string) => _.includes(icon, searchTerm)));
  }, [searchTerm, availableIcons]);

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={'flex-row'}>
      <div className="text-center flex-col">
        <div className="text-lg font-semibold">Seeq Custom Icons</div>
        <TextField
          extraClassNames="w-3/6 m-8"
          placeholder="search for icon"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4 gap-4">
          {displayIcons.map((icon) => (
            <div key={`id_${icon}`}>
              <div className="p-5 text-center w-48">
                <Icon icon={icon} type="theme" large={true} /> <br />
                <span className="text-sm">.{icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableIcons;
