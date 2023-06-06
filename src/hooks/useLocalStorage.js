import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
      } else {
        const parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem)
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return {item, saveItem, loading, error};
}

export {useLocalStorage};
