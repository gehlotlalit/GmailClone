import { useEffect, useState } from 'react'
import Message from './Message'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/appSlice';

const Messages = () => {
  const { searchText, emails } = useSelector(store => store.app);
  const [filteredEmails, setFilteredEmails] = useState(emails);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setEmails(allEmails));
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const filterEmails = () => {
      const filtered = emails?.filter((email) => {
        return (
          email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
          email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
          email?.message?.toLowerCase().includes(searchText.toLowerCase())
        );
      });
      setFilteredEmails(filtered);
    };
    filterEmails();
  }, [searchText, emails]);

  return (
    <div>
      {filteredEmails && filteredEmails.map((email) => (
        <Message key={email.id} email={email} /> // Ensure key prop is provided for mapping
      ))}
    </div>
  );
}

export default Messages;
