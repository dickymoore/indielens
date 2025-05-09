import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../contexts/FirebaseContext';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function UserProfile() {
  const { auth, db } = useContext(FirebaseContext);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // Fetch the user profile document from Firestore.
  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      };
      fetchProfile();
    }
  }, [user, db]);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please sign in to view your profile.</p>;

  return (
    <div>
      <h2>User Profile</h2>
      {profile ? (
        <div>
          <p>Name: {profile.displayName}</p>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>No profile data found.</p>
      )}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default UserProfile;
