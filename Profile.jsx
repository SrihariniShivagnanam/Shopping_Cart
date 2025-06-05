import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/userSlice';
import '../../Styles/profile.css';


const Profile = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.users.list);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  if (!authUser) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center mt-10">
        <p className="text-red-500 font-semibold">You need to login to see your profile!</p>
      </div>
    );
  }

  const fullProfile = users.find((u) => u.id === authUser.id);

  if (loading || !fullProfile) return <p className="text-center mt-10">Loading full profile...</p>;

  const {
    id,
    firstName,
    lastName,
    age,
    gender,
    phone,
    email,
    username,
    birthDate,
    image,
    address,
    country,
  } = fullProfile;

  return( 

  <div className="profile-container">
  {/* Left - Image */}
  <div className="profile-left">
    <img
      src={image}
      alt={`${firstName} ${lastName}`}
      className="profile-image"
    />
  </div>

  {/* Right - Details */}
  <div className="profile-right">
    <h1>{firstName} {lastName}</h1>
    <p className="profile-meta">User ID: {id}</p>

    <div className="profile-grid">
      <div>
        <strong>Age:</strong>
        <p>{age}</p>
      </div>
      <div>
        <strong>Gender:</strong>
        <p>{gender}</p>
      </div>
      <div>
        <strong>Phone:</strong>
        <p>{phone}</p>
      </div>
      <div>
        <strong>Email:</strong>
        <p>{email}</p>
      </div>
      <div>
        <strong>Username:</strong>
        <p>{username}</p>
      </div>
      <div>
        <strong>DOB:</strong>
        <p>{birthDate}</p>
      </div>
      <div>
        <strong>Country:</strong>
        <p>{country}</p>
      </div>
      <div className="col-span-2">
        <strong>Address:</strong>
        <p>{address?.address}, {address?.city}, {address?.postalCode}</p>
      </div>
      <div className="col-span-2">
        <strong>State:</strong>
        <p>{address?.state}</p>
      </div>
    </div>
  </div>
</div>


);
};

export default Profile;
