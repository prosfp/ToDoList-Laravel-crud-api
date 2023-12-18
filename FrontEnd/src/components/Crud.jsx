import React, { useState, useEffect } from 'react';
import { read, create, update, remove } from '../api/index';

// Anem a fer un CRUD de tasques
function TodoList() {
  // Primerament creem un estat per guardar les tasques. Cada vegada que canviï aquest estat, el component es tornarà a renderitzar
  const [items, setItems] = useState([]);
  // Creem un estat per guardar el nou item que s'afegirà. D'aquesta manera
  const [newItem, setNewItem] = useState('');

  // READ
  useEffect(() => {
    read().then(setItems);
  }, []);

  // CREATE
  const handleAdd = () => {
    create({ title: newItem, completed: false }).then((newTask) => {
      setItems([...items, newTask]);
      setNewItem('');
    });
  };

  // UPDATE

  const handleUpdate = (id) => {
    const item = items.find((item) => item.id === id);
    update(id, { ...item, completed: !item.completed }).then((updatedTask) => {
      setItems(items.map((item) => (item.id === id ? updatedTask : item)));
    });
  };

  // DELETE

  const handleDelete = (id) => {
    remove(id).then(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  return (
    <div className="container mx-auto p-4">
      <input
        className="mb-2 rounded border border-gray-300 px-2 py-1"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        className="mx-5 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleAdd}
      >
        Add
      </button>
      {items.map((item) => (
        <div key={item.id} className="mt-2 rounded border border-gray-300 p-2">
          <p>{item.title}</p>
          <button
            className={`mx-5 mt-2 rounded ${
              item.completed ? 'bg-green-700' : 'bg-indigo-500'
            } px-2 py-1 font-bold text-white hover:bg-green-700`}
            onClick={() => handleUpdate(item.id)}
          >
            {item.completed ? 'Mark as incomplete' : 'Mark as complete'}
          </button>
          <button
            className="mt-2 rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

/* 
1. When the component mounts, useEffect runs and fetches the initial list of items. This list is set to the items state using setItems.

2. The component renders the list of items on the screen.

3. When you add, update, or delete an item, the corresponding handler function is called. This function updates the items state using setItems.

4. Because the items state has changed, the component re-renders, updating the list of items on the screen. */
