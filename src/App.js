import { useEffect, useState, createContext } from 'react';
import Axios from 'axios';
import './App.css';
import Task from './Task';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Profile';
import Form from './pages/Form';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Profile from './pages/Profile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useToggle } from './useToggle';
import Cat from './pages/Cat';
import { useCounter } from './pages/useCounter';
import Person from './pages/Person';

function Header() {
  return (
    <h1>Hello world</h1>
  )
}

function WorkingWithList() {
  const users = [{ name: "Sai", age: 24 }, { name: "Ram", age: 21 }]
  const names = ["Sai", "Ram", "Rohini", "Jaya"];
  return <div className="App">
    {
      names.map((name, index) => {
        return <h1>{name}</h1>
      })
    }
    {
      users.map((user, index) => {
        return <User name={user.name} age={user.age} />
      })
    }

  </div>
}


function WorkingWithListExercise() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Pluto", isGasPlanet: true },
    { name: "Mercury", isGasPlanet: false }
  ]
  return <div className="App">{
    planets.map((planet, key) => {
      return planet.isGasPlanet && <h1>{planet.name}</h1>
    })
  }</div>
}

function User(props) {
  return (
    <div><h1></h1>{props.name} {props.age}</div>
  )
}

function WorkingWithUseStateHook() {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  function increaseAge() {
    setAge(age + 1);
  }
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return <div className="App"><h1>{age}</h1><button onClick={increaseAge}>Increase Age</button><br></br><input type="text" onChange={handleInputChange} /><br></br><h2>{inputValue}</h2></div>
}

function WorkingWithUseStateHookExample2() {
  const [show, setShow] = useState(true);
  function toggleShow() {
    setShow(!show);
  }


  return <div className="App">
    <button onClick={toggleShow}>Show / Hide</button>
    {show && <h1>My Name is Saiprasaad Kalyanaraman</h1>}
  </div>
}

function WorkingWithUseStateHookExercise() {
  const [count, setCount] = useState(0);
  function incrementCounterValue() {
    setCount(count + 1)
  }
  function decrementCounterValue() {
    setCount(count - 1)
  }
  function setToZero() {
    setCount(0)
  }
  return <div className="App" style={{ display: 'flex', justifyContent: 'center' }}><button onClick={decrementCounterValue} style={{ padding: '0 10px' }}><h1>-</h1></button><h1 style={{ padding: '0 10px' }}>{count}</h1><button onClick={setToZero}>Set To Zero</button><button onClick={incrementCounterValue} style={{ padding: '0 10px' }}><h1>+</h1></button></div>
}

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function changeNewTaskValue(event) {
    setNewTask(event.target.value);
  }

  function addNewTask() {
    const newTodoTask = {
      id: todoList.length !== 0 ? todoList[todoList.length - 1].id + 1 : 1,
      name: newTask,
      completed: false
    }
    setTodoList([...todoList, newTodoTask]);
  }

  function deleteTask(taskId) {

    setTodoList(todoList.filter((task) => {

      if (task.id === taskId) {
        return false;
      } else {
        return true;
      }
    }))
  }

  function markTaskAsCompleted(taskId) {
    setTodoList(todoList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      } else {
        return task;
      }
    }))
  }

  return <div className="App">
    <div className="addTask">
      <input onChange={changeNewTaskValue} />
      <button onClick={addNewTask}>Add Task</button>
    </div>
    <div className="list">
      {todoList.map((task) => {
        return <Task id={task.id} name={task.name} completed={task.completed} deleteTask={deleteTask} markTaskAsCompleted={markTaskAsCompleted} />
      })}
    </div>
  </div>
}

function Text() {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    }

  }, [])

  function changeTextValue(event) {
    setTextValue(event.target.value)
  }
  return <div className="App">
    <input onChange={changeTextValue} />
    <h1>{textValue}</h1>
  </div>
}

function ShowOrHideText() {
  const [showText, setShowText] = useState(true);
  function toggleText() {
    setShowText(!showText);
  }
  return <div className="App">{showText && <Text />} <button onClick={toggleText}>{showText ? "Hide Text" : "Show Text"}</button></div>
}

function CatFact() {
  const [fact, setFact] = useState("");
  useEffect(() => {
    generateCatFact()
  }, [])

  function generateCatFact() {
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        setFact(res.data.fact)
      })
  }

  return <div className="App">
    <button onClick={generateCatFact}>Generate cat fact</button>
    <p>{fact}</p>
  </div>
}

function GenerateAge() {
  const [age, setAge] = useState(null);
  const [name, setName] = useState("");

  function predictAge() {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        setAge(res.data);
      });
  }

  function changeNameValue(event) {
    setName(event.target.value);
  }

  return <div className="App">
    <input onChange={changeNameValue} />
    <button onClick={predictAge}>Predict Age</button>
    <h1>Name: {age?.name}</h1>
    <h1>Age: {age?.age}</h1>
    <h1>Count: {age?.count}</h1>
  </div>
}

function Excuser() {
  const [excuse, setExcuse] = useState("");

  function fetchExcuse(category) {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
      .then((res) => {
        setExcuse(res.data[0].excuse);
      });
  }

  return <div className="App">
    <h1>Generate An Excuse</h1>
    <button onClick={() => fetchExcuse("party")}>Party</button>
    <button onClick={() => fetchExcuse("family")}>Family</button>
    <button onClick={() => fetchExcuse("office")}>Office</button>
    {excuse !== "" && <p>Excuse: {excuse}</p>}
  </div>
}

export const AppContext = createContext();

function UseContextTutorial() {
  const [userName, setUsername] = useState("Sai");
  return <div className="App">
    <AppContext.Provider value={{ userName, setUsername }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND </h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
  </div>
}

function UseQueryTutorial() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });
  return <div className="App">
    <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>PAGE NOT FOUND </h1>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </div>
}

function TogglingApplication() {
  const [isVisible, setIsVisible] = useToggle(false);
  return <div className="App">{isVisible && <p style={{ color: 'black' }}>Hello</p>}<button onClick={setIsVisible}>{isVisible ? "Hide" : "Show"}</button></div>
}

function CustomHooks() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true
      }
    }
  });
  return <div className="App">
    <QueryClientProvider client={client}>
      <Cat />
    </QueryClientProvider>
  </div>
}

function CustomHooksExercise() {
  const {incrementCounter, decrementCounter, count} = useCounter();

  return <div className="App">
    <button onClick={decrementCounter}>-</button><p style={{color: 'black'}}>{count}</p><button onClick={incrementCounter}>+</button>
  </div>
}

function App() {
  return <div className="App"><Person name="Saiprasaad" email="saiprasaad1999@gmail.com" age={24} friends={["Friend1", "Friend2"]} /></div>
}




export default App;
