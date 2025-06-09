// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Counter } from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <Counter />
      </header>
    </div>
  );
};

export default App;
// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import { Header } from './components/Header';
// import { Login } from './components/login';
// import { PostsList } from './components/PostsList';
// import { CreatePost } from './components/CreatePosts';
// import { Notifications } from './components/Notifications';
// import './App.css';

// const App: React.FC = () => {
//   const [activeTab, setActiveTab] = React.useState<'posts' | 'create' | 'login'>('posts');
  
//   return (
//     <Provider store={store}>
//       <div className="app">
//         <Header />
//         <Notifications />
        
//         <div className="app-tabs">
//           <button 
//             className={activeTab === 'posts' ? 'active' : ''} 
//             onClick={() => setActiveTab('posts')}
//           >
//             Posts
//           </button>
//           <button 
//             className={activeTab === 'create' ? 'active' : ''} 
//             onClick={() => setActiveTab('create')}
//           >
//             Create Post
//           </button>
//           <button 
//             className={activeTab === 'login' ? 'active' : ''} 
//             onClick={() => setActiveTab('login')}
//           >
//             Login
//           </button>
//         </div>
        
//         <main className="app-content">
//           {activeTab === 'posts' && <PostsList />}
//           {activeTab === 'create' && <CreatePost />}
//           {activeTab === 'login' && <Login />}
//         </main>
//       </div>
//     </Provider>
//   );
// };

// export default App;
