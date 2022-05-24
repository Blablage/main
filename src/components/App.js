import React from 'react';
import Menu from './Menu'
import TitleSearch from './TitleSearch';
import StudentTable from './StudentTable'

const App = () => {
   return (
      <div>
         <Menu id='searchMain'/>
         <TitleSearch/>
         <StudentTable/>
      </div>
   );
};

export default App;
