import { useState } from 'react';
import { useRouter } from 'next/router';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createMember, updateMember } from '../../API/teamMembersAPI';

const initialState = {
  image: '',
  name: '',
  role: '',
  uid: '',
  firebaseKey: '',
};

export default function CreateMember() {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, uid: user.uid };
    createMember(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateMember(patchPayload).then(() => {
        router.push('/team');
      });
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput2" label="Role" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Member Role"
            name="role"
            value={formInput.role}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput3" label="Image URL" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Image URL"
            name="image"
            value={formInput.image}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Button type="submit">Add Member</Button>
      </Form>
    </>
  );
}
