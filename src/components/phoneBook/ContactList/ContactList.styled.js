import styled from '@emotion/styled';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ContactsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const DeleteButton = styled.button`
  width: 30%;
  cursor: pointer;
  border: none;
  padding: 8px 16px;
  border-radius: 3px;
  background-color: #dceaef;
  :hover {
    background-color: #1d5a95;
    color: white;
  }
`;
export { ContactsList, ContactsItem, DeleteButton };
