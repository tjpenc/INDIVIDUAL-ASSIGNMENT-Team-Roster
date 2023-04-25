import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';
import { getMembers } from '../API/teamMembersAPI';

export default function Team({ searchInput }) {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();
  const getAllMembers = () => getMembers(user.uid).then(setMembers);

  const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(searchInput)
  || member.role.toLowerCase().includes(searchInput));

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <>
      <h1>Team</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
      >
        {filteredMembers.map((member) => <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />)}
      </div>
    </>
  );
}

Team.propTypes = {
  searchInput: PropTypes.string,
};

Team.defaultProps = {
  searchInput: '',
};
