import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';
import { getMembers } from '../API/teamMembersAPI';

export default function Team() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();
  const getAllMembers = () => getMembers(user.uid).then(setMembers);

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <>
      <h1>Team</h1>
      {members.map((member) => <MemberCard memberObj={member} onUpdate={getAllMembers} />)}
    </>
  );
}
