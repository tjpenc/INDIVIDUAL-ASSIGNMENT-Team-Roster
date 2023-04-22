import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CreateMember from '../../../components/forms/CreateMember';
import { getSingleMember } from '../../../API/teamMembersAPI';

export default function EditAuthor() {
  const [member, setMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setMember);
  }, [firebaseKey]);

  return <CreateMember member={member} />;
}
